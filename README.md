# 📈 Stock Price Checker

## Description

The **Stock Price Checker** is a full stack JavaScript application built with Node.js and Express that allows users to retrieve real-time stock price information for NASDAQ-listed companies. It uses a proxy API to fetch stock data without requiring an API key, making it simple and accessible for developers and users alike.

Users can also "like" a stock, with the system ensuring that only one like per IP address is counted. For privacy compliance, IP addresses are anonymized before being stored. Additionally, the app supports comparing two stocks side-by-side, displaying the relative difference in likes between them.

This project is part of the **FreeCodeCamp Information Security and Quality Assurance Certification** learning path.

## Features

- 🔍 Real-time stock price lookup via proxy API
- ❤️ Like system with one like per anonymized IP
- 📊 Compare two stocks and view relative likes
- 🔐 Security enhancements including Content Security Policy (CSP) and Helmet integration
- ✅ Automated functional testing using Mocha and Chai

## Technologies Used

- **Backend:** Node.js, Express
- **Testing:** Mocha, Chai, Chai-HTTP
- **Security:** Helmet, CSP headers
- **Data Source:** [FreeCodeCamp Stock Price Proxy API](https://stock-price-checker-proxy.freecodecamp.rocks/)

## Project Status

✅ Completed as part of the FreeCodeCamp curriculum.

## Stock Price Checker

This is created based on the boilerplate for the Stock Price Checker project. Instructions for building your project can be found at https://freecodecamp.org/learn/information-security/information-security-projects/stock-price-checker

## License

This project is licensed under the MIT License.

