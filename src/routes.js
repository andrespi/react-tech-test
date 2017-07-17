import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MessagesPage from './components/message/MessagesPage';
import AddMessagePage from './components/message/AddMessagePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MessagesPage}/>
        <Route path="message" component={AddMessagePage}/>
    </Route>
)
