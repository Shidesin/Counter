import React, {useState} from 'react';
import '.././App.css';
import {restoreState, saveState} from '../App';
import styles from '../CounterStyle.module.css';
import DisplayCounter from '../Counter_2.0/DisplayCounter';
import {DisplaySetCounter} from '../Counter_2.0/DisplaySetCounter';


export function Counter() {

    const initialState = restoreState<Array<number>>(`${Counter}`, [0, 0])

    let [settingValueMin, setSettingValueMin] = useState(initialState[0])

    let [settingValueMax, setSettingValueMax] = useState(initialState[1])

    let [valueCounter, setCounterValue] = useState<number>(settingValueMin);

    let [error, setError] = useState<string>('Input values and click \'Set\'')

    const setButtonFunc = () => {
        saveState<Array<number>>(`${Counter}`, [settingValueMin, settingValueMax])
    }

    const addNumber = () => setCounterValue(valueCounter + 1)

    const resetNumber = () => setCounterValue(settingValueMin)

    const errorSet = () => {
        if (settingValueMin < 0 ||
            settingValueMin > settingValueMax ||
            settingValueMax < 0 ||
            (settingValueMin === settingValueMax && settingValueMin !== 0)) {
                setError('Incorrect value')
        } else if (settingValueMin === 0 && settingValueMax === 0) {
            setError("Input values and click 'Set'")
        } else {
            setError('')
        }
    }

    let disableModInc: boolean =
        (settingValueMax < 0) ||
        (settingValueMin < 0) ||
        (settingValueMin > settingValueMax) ||
        (settingValueMin === settingValueMax) ||
        (settingValueMax === 0 && settingValueMin < 0) ||
        (settingValueMax < 0 && settingValueMin < 0) ||
        (settingValueMax > 0 && settingValueMin < 0) ||
        (settingValueMax > 0 && settingValueMin < 0)

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

    let disableModReset: boolean = valueCounter === settingValueMin

    let correctDisplayStyle = disableModInc ? `${styles.error_display}` : `${styles.correct_display}`

    let errorStyleValueInput = disableModInc ? `${styles.input} ${styles.input_error}` : `${styles.input}`

    let textDisplay = error ? error : valueCounter

    return (
        <div className="App">
            <DisplaySetCounter
                callbackValueMin={setSettingValueMin}
                callbackValueMax={setSettingValueMax}
                setCounterValue={setCounterValue}
                disableModSet={disableModSet}
                setButtonFunc={setButtonFunc}
                settingValueMin={settingValueMin}
                settingValueMax={settingValueMax}
                errorSet={errorSet}
                className={errorStyleValueInput}
            />
            <DisplayCounter
                valueCounter={valueCounter}
                settingValueMax={settingValueMax}
                addNumber={addNumber}
                resetNumber={resetNumber}
                disableModInc={disableModInc}
                disableModReset={disableModReset}
                className={correctDisplayStyle}
                textDisplay={textDisplay}
            />
        </div>
    );
}
