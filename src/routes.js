import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MessagesPage from './components/MessagesPage';
//import AddMessagePage from './components/message/AddMessagePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MessagesPage}/>
    </Route>
)
