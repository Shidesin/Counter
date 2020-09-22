import React, {useState} from 'react';
import DisplayCounter from './DisplayCounter';
import './../App.css';
import {Route} from 'react-router-dom';
import {DisplaySetCounter} from './DisplaySetCounter';
import {restoreState, saveState} from '../App';
import styles from '../CounterStyle.module.css';


function Counter2() {

    const initialState = restoreState<Array<number>>(`${Counter2}`, [0, 0])

    let [settingValueMin, setSettingValueMin] = useState(initialState[0])

    let [settingValueMax, setSettingValueMax] = useState(initialState[1])

    let [valueCounter, setCounterValue] = useState<number>(settingValueMin);

    const setButtonFunc = () => {
        saveState<Array<number>>(`${Counter2}`, [settingValueMin, settingValueMax])
    }

    const addNumber = () => setCounterValue(valueCounter + 1)

    const resetNumber = () => setCounterValue(settingValueMin)

    let disableModInc: boolean =
        (valueCounter < 0 && valueCounter < settingValueMax) ||
        (valueCounter === settingValueMax) ||
        (valueCounter > settingValueMax);

    let disableModReset: boolean = valueCounter === settingValueMin

    let disableModSet  = () => {
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

    let textDisplay = (settingValueMin === 0 && settingValueMax === 0) ? "Click 'Set' and input value" : valueCounter

    let correctDisplayStyle = disableModInc ? `${styles.error_display}` : `${styles.correct_display}`

    let errorStyleValueInput = disableModSet() ? `${styles.input} ${styles.input_error}`: `${styles.input}`

    return (

        <div className="App">
            <Route path={'/Counter_2/displayCounter'}
                   render={() =>
                       <DisplayCounter
                           valueCounter={valueCounter}
                           textDisplay={textDisplay}
                           settingValueMax={settingValueMax}
                           addNumber={addNumber}
                           resetNumber={resetNumber}
                           disableModInc={disableModInc}
                           disableModReset={disableModReset}
                           className={correctDisplayStyle}
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
                           className={errorStyleValueInput}
                       />}
            />
        </div>

    )
}

export default Counter2;