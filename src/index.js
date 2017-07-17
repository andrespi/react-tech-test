import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import Store from './store';

import {getMessages} from './actions/messageActions';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoreInstance = Store();


StoreInstance.dispatch(getMessages());

ReactDOM.render(
    <Provider store={StoreInstance}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
