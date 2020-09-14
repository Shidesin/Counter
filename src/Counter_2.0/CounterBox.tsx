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

    let errorMessage: string = (settingValueMin === 0 && settingValueMax === 0) ? "Click 'Set' and input value": ''

    const disableModSet = () => {
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
                               ErrorMessage={errorMessage}
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
                           />}
                />
        </div>

    )
}

export default CounterBox;