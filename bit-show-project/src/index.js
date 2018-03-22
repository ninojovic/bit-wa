import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './app/App';
import ShowPage from './app/partials/ShowPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/:id" component={ShowPage} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
