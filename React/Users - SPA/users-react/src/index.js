import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './app/App';
import AboutPage from './app/about/AboutPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
