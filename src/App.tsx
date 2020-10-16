import React from 'react';
import Header from './Header';
import Counter2 from './Counter_2.0/Counter2';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import CounterContainer from './Counter/CounterContainer';

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}



export function App() {

    return(
        <HashRouter>
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/Counter'}/>}/>
                <Route path={'/Counter'} render={() => <CounterContainer />}/>
                <Route path={'/Counter_2'} render={() => <Counter2/>}/>
            </Switch>
        </HashRouter>
    )

}