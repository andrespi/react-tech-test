import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MessagesPage from './components/MessagesPage';
import { Provider } from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <MessagesPage/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
