import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import store from './store'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <Provider store={store}>
    <App className="site-content" />
    <Footer />
  </Provider>,
  document.getElementById('root'));