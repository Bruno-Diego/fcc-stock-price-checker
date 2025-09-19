'use strict';
const axios = require('axios');
const crypto = require('crypto');

const stockLikes = {}; // In-memory store: { SYMBOL: { likes: Set of hashed IPs } }

module.exports = function (app) {
  app.route('/api/stock-prices')
    .get(async function (req, res) {
      try {
        const { stock, like } = req.query;
        const ip = req.ip;
        const hashedIp = crypto.createHash('sha256').update(ip).digest('hex');

        const stocks = Array.isArray(stock) ? stock : [stock];

        const stockDataPromises = stocks.map(async (symbol) => {
          const url = `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${symbol}/quote`;
          const response = await axios.get(url);
          const { symbol: stockSymbol, latestPrice } = response.data;

          // Initialize if not present
          if (!stockLikes[stockSymbol]) {
            stockLikes[stockSymbol] = new Set();
          }

          // Handle like
          if (like === 'true') {
            stockLikes[stockSymbol].add(hashedIp);
          }

          return {
            stock: stockSymbol,
            price: latestPrice,
            likes: stockLikes[stockSymbol].size
          };
        });

        const results = await Promise.all(stockDataPromises);

        if (results.length === 1) {
          return res.json({ stockData: results[0] });
        } else {
          const [stock1, stock2] = results;
          return res.json({
            stockData: [
              {
                stock: stock1.stock,
                price: stock1.price,
                rel_likes: stock1.likes - stock2.likes
              },
              {
                stock: stock2.stock,
                price: stock2.price,
                rel_likes: stock2.likes - stock1.likes
              }
            ]
          });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Stock data fetch failed' });
      }
    });
};
