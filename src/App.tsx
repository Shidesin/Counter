import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {SettingCounter} from './Counter/SettingBox/SettingsBox';

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

    let [minMaxValue, setMinMaxValue] = useState<Array<number>>([]);

    let [valueCounter, setCounterValue] = useState<number>(minMaxValue[0]);

    let [error, setError] = useState<string>('Input values and click set')


    let callBack = (value: Array<number>) => setMinMaxValue(value);

    const callBackError = (value: string) => setError(value)


    return (
        <div className="App">
            <SettingCounter
                callBackError={callBackError}
                callback={callBack}
                setCounterValue={setCounterValue}
            />
            <Counter
                minMaxValue={minMaxValue}
                valueCounter={valueCounter}
                setCounterValue={setCounterValue}
                ErrorMessage={error}
            />
        </div>
    );
}
