import {restoreState} from '../App';

const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const INC_COUNTER_VALUE = 'INC_COUNTER_VALUE'
const RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE'
const SET_ERROR = 'SET_ERROR'


export  type initialStateType = {
    settingValueMin: number
    settingValueMax: number
    valueCounter: number
    error: string
}

// let initialState: initialStateType = restoreState<initialStateType> ('Counter',{settingValueMin: 0, settingValueMax: 0, valueCounter: 0, error: 'Input values and click "Set"'})
let initialState: initialStateType = {settingValueMin: 0, settingValueMax: 0, valueCounter: 0, error: 'Input values and click "Set"'}


export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET_MIN_VALUE':
            return {...state, settingValueMin: action.payload, valueCounter: action.payload}
        case 'SET_MAX_VALUE':
            return {...state, settingValueMax: action.payload}
        case 'INC_COUNTER_VALUE':
            return {...state, valueCounter: state.valueCounter + 1}
        case 'RESET_COUNTER_VALUE':
            return {...state, valueCounter: state.settingValueMin}
        case 'SET_ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}

type ActionType =
    setMinValueType
    | setMaxValueType
    | incrementCounterValueType
    | resetCounterValueType
    | setErrorType

type setMinValueType = {
    type: 'SET_MIN_VALUE'
    payload: number
}

type setMaxValueType = {
    type: 'SET_MAX_VALUE'
    payload: number
}

type incrementCounterValueType = {
    type: 'INC_COUNTER_VALUE'
}

type resetCounterValueType = {
    type: 'RESET_COUNTER_VALUE'
}

type setErrorType = {
    type: 'SET_ERROR'
    payload: string
}


export const setMinValue = (minValue: number): setMinValueType => {
    return {type: SET_MIN_VALUE, payload: minValue}
}

export const setMaxValue = (maxValue: number): setMaxValueType => {
    return {type: SET_MAX_VALUE, payload: maxValue}
}

export const incrementCounterValue = (): incrementCounterValueType => {
    return {type: INC_COUNTER_VALUE}
}

export const resetCounterValue = (): resetCounterValueType => {
    return {type: RESET_COUNTER_VALUE}
}

export const setError = (textError:string): setErrorType => {
    return {type: SET_ERROR, payload: textError}
}