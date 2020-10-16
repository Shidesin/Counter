import React from 'react';
import '.././App.css';
import {saveState} from '../App';
import styles from '../CounterStyle.module.css';
import {DisplaySetCounter} from './DisplaySetCounter';
import {DisplayCounter} from './DisplayCounter';
import {connect, useDispatch} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {
    incrementCounterValue,
    initialStateType,
    resetCounterValue,
    setError,
    setMaxValue,
    setMinValue
} from '../redux/counterReducer';

type mapStateToProps = {
    counter: initialStateType
}

const Counter: React.FC<mapStateToProps> = (props) => {

    let settingValueMin = props.counter.settingValueMin

    let settingValueMax = props.counter.settingValueMax

    let valueCounter = props.counter.valueCounter

    let error = props.counter.error

    let dispatch = useDispatch()

    const setSettingValueMin = (value: number) => {
        dispatch(setMinValue(value))
    }

    const setSettingValueMax = (value: number) => {
        dispatch(setMaxValue(value))
    }

    const setButtonFunc = () => {
        saveState<Array<number>>('Counter', [settingValueMin, settingValueMax])
    }

    const addNumber = () => dispatch(incrementCounterValue())

    const resetNumber = () => dispatch(resetCounterValue())

    const errorSet = (settingValueMin: number, settingValueMax: number) => {
        if (settingValueMin < 0 ||
            settingValueMin > settingValueMax ||
            settingValueMax < 0 ||
            (settingValueMin === settingValueMax && settingValueMin !== 0)) {
            return dispatch(setError('Incorrect value'))
        } else if (settingValueMin === 0 && settingValueMax === 0) {
            return dispatch(setError('Input values and click "Set"'))

        } else {
            dispatch(setError(''))
        }
    }

    let disableModInc: boolean =
        (valueCounter >= settingValueMax) ||
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

let mapStateToProps = (state: AppRootStateType): mapStateToProps => ({
    counter: state.counter
})


export default connect(mapStateToProps, {})(Counter);