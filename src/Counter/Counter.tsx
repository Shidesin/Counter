import React from 'react';
import '.././App.css';
import {saveState} from '../App';
import styles from '../CounterStyle.module.css';
import {DisplaySetCounter} from './DisplaySetCounter';
import {DisplayCounter} from './DisplayCounter';
import {
    incrementCounterValue,
    initialStateType,
    resetCounterValue,
    setMaxValue,
    setMinValue
} from '../redux/counterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';

export const Counter = () => {

    let countData = useSelector<AppRootStateType, initialStateType>(state => state.counter)

    let settingValueMin = countData.settingValueMin

    let settingValueMax = countData.settingValueMax

    let valueCounter = countData.valueCounter

    let error = countData.error

    let dispatch = useDispatch()

    const setSettingValueMin = (value: number) => {
        dispatch(setMinValue(value))
    }

    const setSettingValueMax = (value: number) => {
        dispatch(setMaxValue(value))
    }

    const setButtonFunc = () => {
        saveState<initialStateType>('Counter', {settingValueMin, settingValueMax, valueCounter, error})
    }

    const addNumber = () => dispatch(incrementCounterValue())

    const resetNumber = () => dispatch(resetCounterValue())

    let disableModInc: boolean =
        (valueCounter === settingValueMax) ||
        (settingValueMax < 0) ||
        (settingValueMin < 0) ||
        (settingValueMin > settingValueMax) ||
        (settingValueMin === settingValueMax) ||
        (settingValueMax === 0 && settingValueMin < 0) ||
        (settingValueMax < 0 && settingValueMin < 0) ||
        (settingValueMax > 0 && settingValueMin < 0) ||
        (settingValueMax > 0 && settingValueMin < 0)

    const disableModSet = () => {
        // errorSet()
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
                disableModSet={disableModSet}
                setButtonFunc={setButtonFunc}
                settingValueMin={settingValueMin}
                settingValueMax={settingValueMax}
                // errorSet={errorSet}
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