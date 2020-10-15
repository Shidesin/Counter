type initialStateType = {
    settingValueMin: number
    settingValueMax: number
    valueCounter: number
    error: string
}

let initialState: initialStateType = {settingValueMin: 0, settingValueMax: 0, valueCounter: 0, error: ''}


export const counterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case'INCREASING_MIN_VALUE':
            return {...state, settingValueMin: +1}
        case 'DECREASING_MIN_VALUE':
            return {...state, settingValueMin: -1}
        case 'INCREASING_MAX_VALUE':
            return {...state, settingValueMax: +1}
        case 'DECREASING_MAX_VALUE':
            return {...state, settingValueMax: -1}
        case 'ERROR_SET':
            return {...state, error: action.payload}
        case 'INCREASING_VALUE_COUNTER':
            return {...state, valueCounter: +1}
        default: return state
    }
}

type ActionType = increasingMinValueType | decreasingMinValueType | increasingMaxValueType| decreasingMaxValueType| increasingValueCounterType| errorSetType

type increasingMinValueType = {
    type: 'INCREASING_MIN_VALUE'
}

type decreasingMinValueType = {
    type: 'DECREASING_MIN_VALUE'
}

type increasingMaxValueType = {
    type: 'INCREASING_MAX_VALUE'
}

type decreasingMaxValueType = {
    type: 'DECREASING_MAX_VALUE'
}

type increasingValueCounterType = {
    type: 'INCREASING_VALUE_COUNTER'
}
type errorSetType = {
    type: 'ERROR_SET'
    payload: string
}

export const increasingMinValue = (): increasingMinValueType => {
    return {type: 'INCREASING_MIN_VALUE'}
}

export const decreasingMinValue = (): decreasingMinValueType => {
    return {type: 'DECREASING_MIN_VALUE'}
}

export const increasingMaxValue = (): increasingMaxValueType => {
    return {type: 'INCREASING_MAX_VALUE'}
}

export const decreasingMaxValue = (): decreasingMaxValueType => {
    return {type: 'DECREASING_MAX_VALUE'}
}

export const increasingValueCounter = (): increasingValueCounterType => {
    return {type: 'INCREASING_VALUE_COUNTER'}
}

export const errorSet = (payload: string): errorSetType => {
    return {type: 'ERROR_SET', payload}
}