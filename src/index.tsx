import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {App} from './App';
import Header from './Header';
import {HashRouter} from 'react-router-dom';
import {Route, Switch, Redirect} from 'react-router-dom';
import CounterBox from './Counter_2.0/CounterBox';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/Counter'}/>}/>
                <Route path={'/Counter'} render={() => <App/> }/>
                <Route path={'/Counter_2'} render={() => <CounterBox/> }/>
            </Switch>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
