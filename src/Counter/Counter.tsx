import React, {useState} from 'react';
// import '.././App.css';
// import {saveState} from '../App';
// import styles from '../CounterStyle.module.css';
// import {DisplaySetCounter} from './DisplaySetCounter';
// import {DisplayCounter} from './DisplayCounter';
// import {
//     incrementCounterValue,
//     initialStateType,
//     resetCounterValue,
//     setMaxValue,
//     setMinValue
// } from '../redux/counterReducer';
// import {useDispatch} from 'react-redux';
//
//
// type mapStateToProps = {
//     counter: initialStateType
// }
//
// export const Counter: React.FC<mapStateToProps> = (props) => {
//
//     let settingValueMin = props.counter.settingValueMin
//
//     let settingValueMax = props.counter.settingValueMax
//
//     let valueCounter = props.counter.valueCounter
//
//     let dispatch = useDispatch()
//
//     const setSettingValueMin = (value: number) => {
//         dispatch(setMinValue(value))
//     }
//
//     const setSettingValueMax = (value: number) => {
//         dispatch(setMaxValue(value))
//     }
//
//     const setCounterValue = (value: number) => {
//         dispatch(setCounterValue(value))
//     }
//
//
//     // const initialState = restoreState('Counter', [0, 0])
//
//     // let [settingValueMin, setSettingValueMin] = useState(initialState[0])
//
//     // let [settingValueMax, setSettingValueMax] = useState(initialState[1])
//
//     // let [valueCounter, setCounterValue] = useState<number>(settingValueMin);
//
//
//     let [error, setError] = useState<string>('Input values and click \'Set\'')
//
//     const setButtonFunc = () => {
//         saveState<Array<number>>('Counter', [settingValueMin, settingValueMax])
//     }
//
//     const addNumber = () => dispatch(incrementCounterValue())
//
//     const resetNumber = () => dispatch(resetCounterValue())
//
//     const errorSet = () => {
//         if (settingValueMin < 0 ||
//             settingValueMin > settingValueMax ||
//             settingValueMax < 0 ||
//             (settingValueMin === settingValueMax && settingValueMin !== 0)) {
//             setError('Incorrect value')
//         } else if (settingValueMin === 0 && settingValueMax === 0) {
//             setError('Input values and click \'Set\'')
//         } else {
//             setError('')
//         }
//     }
//
//     let disableModInc: boolean =
//         (valueCounter >= settingValueMax) ||
//         (settingValueMax < 0) ||
//         (settingValueMin < 0) ||
//         (settingValueMin > settingValueMax) ||
//         (settingValueMin === settingValueMax) ||
//         (settingValueMax === 0 && settingValueMin < 0) ||
//         (settingValueMax < 0 && settingValueMin < 0) ||
//         (settingValueMax > 0 && settingValueMin < 0) ||
//         (settingValueMax > 0 && settingValueMin < 0)
//
//     const disableModSet = () => {
//         errorSet()
//         return (
//             (settingValueMax < 0) ||
//             (settingValueMin < 0) ||
//             (settingValueMin > settingValueMax) ||
//             (settingValueMin === settingValueMax) ||
//             (settingValueMax === 0 && settingValueMin < 0) ||
//             (settingValueMax < 0 && settingValueMin < 0) ||
//             (settingValueMax > 0 && settingValueMin < 0) ||
//             (settingValueMax > 0 && settingValueMin < 0)
//         )
//     }
//
//     let disableModReset: boolean = valueCounter === settingValueMin
//
//     let correctDisplayStyle = disableModInc ? `${styles.error_display}` : `${styles.correct_display}`
//
//     let errorStyleValueInput = disableModInc ? `${styles.input} ${styles.input_error}` : `${styles.input}`
//
//     let textDisplay = error ? error : valueCounter
//
//     return (
//         <div className="App">
//             <DisplaySetCounter
//                 callbackValueMin={setSettingValueMin}
//                 callbackValueMax={setSettingValueMax}
//                 setCounterValue={setCounterValue}
//                 disableModSet={disableModSet}
//                 setButtonFunc={setButtonFunc}
//                 settingValueMin={settingValueMin}
//                 settingValueMax={settingValueMax}
//                 errorSet={errorSet}
//                 className={errorStyleValueInput}
//             />
//             <DisplayCounter
//                 valueCounter={valueCounter}
//                 settingValueMax={settingValueMax}
//                 addNumber={addNumber}
//                 resetNumber={resetNumber}
//                 disableModInc={disableModInc}
//                 disableModReset={disableModReset}
//                 className={correctDisplayStyle}
//                 textDisplay={textDisplay}
//             />
//         </div>
//     );
// }