require('file-loader?name=[name].[ext]!../public/index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
// import { MoralisProvider } from 'react-moralis';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);
// (
//   <MoralisProvider
//     appId='jgwQ1t84XpIgPoumdVDyM9bP1y6W9FTIsJ0JmXd0'
//     serverUrl='https://vwbdrwbl9sy0.usemoralis.com:2053/server'
//   >
//     <App />
//   </MoralisProvider>,
//   appElement
// );
