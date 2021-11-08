//React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "bootswatch/dist/vapor/bootstrap.min.css"

//Web3
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';

function getLibrary(provider){
  const library = new Web3(provider)
  return library
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById('root')
);

