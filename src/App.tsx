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

    const initialState = restoreState<Array<number>>('save setting', [0,0])

    let [settingValueMin, setSettingValueMin] = useState(initialState[0])

    let [settingValueMax, setSettingValueMax] = useState(initialState[1])

    let [valueCounter, setCounterValue] = useState<number>(settingValueMin);

    let [error, setError] = useState<string>("Input values and click 'set'")

    let array = [settingValueMin, settingValueMax]

    const setButtonFunc = () => {
        saveState<Array<number>>('save setting',array )
    }

    const errorSet = () => {
        if ( settingValueMin < 0 || settingValueMin > settingValueMax  || settingValueMax < 0) {
            setError('Incorrect value')
        } else if(settingValueMin === settingValueMax) {
            setError("Input values and click 'set'")
        } else {
            setError('')
        }
    }

    const disableModSet = () => {
        errorSet()
        return (
            (settingValueMax < 0) ||
            (settingValueMin < 0) ||
            (settingValueMin > settingValueMax) ||
            (settingValueMin === settingValueMax) ||
            (settingValueMax === 0 && settingValueMin < 0) ||
            (settingValueMax < 0 && settingValueMin < 0) ||
            (settingValueMax > 0 && settingValueMin < 0) ||
            (settingValueMax > 0 && settingValueMin < 0)
        )
    }

    return (
        <div className="App">
            <SettingCounter
                callbackValueMin={setSettingValueMin}
                callbackValueMax={setSettingValueMax}
                setCounterValue={setCounterValue}
                disableModSet={disableModSet}
                setButtonFunc={setButtonFunc}
                settingValueMin={settingValueMin}
                settingValueMax={settingValueMax}
                errorSet={errorSet}
            />
            <Counter
                valueCounter={valueCounter}
                setCounterValue={setCounterValue}
                ErrorMessage={error}
                settingValueMin={settingValueMin}
                settingValueMax={settingValueMax}
            />
        </div>
    );
}
