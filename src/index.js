import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
