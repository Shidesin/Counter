import React, {useState} from 'react';
import DisplayCounter from './DisplayCounter';
import './../App.css';
import {Route} from 'react-router-dom';
import {DisplaySetCounter} from './DisplaySetCounter';


export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}


function CounterBox() {

    const initialState = restoreState<Array<number>>('save setting2', [0, 0])

    let [settingValueMin, setSettingValueMin] = useState(initialState[0])

    let [settingValueMax, setSettingValueMax] = useState(initialState[1])

    let [valueCounter, setCounterValue] = useState<number>(settingValueMin);

    let array = [settingValueMin, settingValueMax]

    const setButtonFunc = () => {
        saveState<Array<number>>('save setting2', array)
    }

    let [error, setError] = useState<string>('Input values and click \'set\'')

    const errorSet = () => {
        if (settingValueMin < 0 || settingValueMin > settingValueMax || settingValueMax < 0 || (settingValueMin === settingValueMax && settingValueMin !== 0)) {
            setError('Incorrect value')
        } else if (settingValueMin === 0 && settingValueMax === 0) {
            setError('Input values and click \'Set\'')
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
                <Route path={'/Counter_2/displayCounter'}
                       render={() =>
                           <DisplayCounter
                               setCounterValue={setCounterValue}
                               valueCounter={valueCounter}
                               settingValueMin={settingValueMin}
                               settingValueMax={settingValueMax}
                               setButtonFunc={setButtonFunc}
                               ErrorMessage={error}
                           />}
                />
                <Route path={'/Counter_2/displaySetCounter'}
                       render={() =>
                           <DisplaySetCounter
                               callbackValueMin={setSettingValueMin}
                               callbackValueMax={setSettingValueMax}
                               setCounterValue={setCounterValue}
                               disableModSet={disableModSet}
                               setButtonFunc={setButtonFunc}
                               settingValueMin={settingValueMin}
                               settingValueMax={settingValueMax}
                               errorSet={errorSet}
                           />}
                />
        </div>

    )
}

export default CounterBox;