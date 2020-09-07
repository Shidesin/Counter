import React, {ChangeEvent, useState} from 'react';
import styles from './SettingsBox.module.css'
import {Button} from '../ButtonBlock';
import {ValueInput} from './ValueInput';
import {restoreState, saveState} from '../../App';


type SettingCounterPropsType = {
    callback: (value: Array<number>) => void
    setCounterValue: (value: number) => void
    callBackError: (value: string) => void
}

export function SettingCounter(props: SettingCounterPropsType) {

    const disableModSet = () => {
        return settingValueMin < 0 || settingValueMin > settingValueMax || settingValueMin === settingValueMax || settingValueMax < 0;
    }

    const initialState = restoreState<Array<number>>('save setting', [])
    console.log(initialState)

    let [settingValueMin, setSettingValueMin] = useState(initialState[0])
    let [settingValueMax, setSettingValueMax] = useState(initialState[1])

    const setValue = () => {
        let array = [settingValueMin, settingValueMax]
        props.callback(array)
        props.setCounterValue(settingValueMin)
        saveState<Array<number>>('save setting',array )
        props.callBackError('')
    }

    const onCangeValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        let min = Number(event.currentTarget.value)
        if (min < 0){
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError("Value can't be less 0")
        } else if (min > settingValueMax){
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError("Value can't be greater max value")
        }else if (min === settingValueMax){
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError('Value can\'t be greater than equal max value')
        } else if (min === null){
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError('Value must be set')
        }else {
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError('')
        }
    }

    const onCangeValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        let max = Number(event.currentTarget.value)
        if (max < 0){
            setSettingValueMax(Number(event.currentTarget.value))
            props.callBackError('Value can\'t be less than zero')
        }else if (max === null){
            setSettingValueMin(Number(event.currentTarget.value))
            props.callBackError('Value must be set')
        } else if (max < settingValueMin){
            setSettingValueMax(Number(event.currentTarget.value))
            props.callBackError('The value can\'t be less than min value')
        } else if (max === settingValueMin){
            setSettingValueMax(Number(event.currentTarget.value))
            props.callBackError('Value can\'t be greater than equal mix value')
        } else if (max > settingValueMin){
            setSettingValueMax(Number(event.currentTarget.value))
            props.callBackError('')
        }
    }

    return (

        <div className={styles.settingDisplay_box}>
            <div className={styles.settingDisplay}>
                <ValueInput errorStyle={disableModSet()} value={settingValueMin} onCange={onCangeValueMin} title={'min value'}/>
                <ValueInput errorStyle={disableModSet()} value={settingValueMax} onCange={onCangeValueMax} title={'max value'}/>
            </div>
            <div className={styles.button_box}>
                <Button title={'Set'} onClickFunction={setValue} disableMod={disableModSet()}/>
            </div>
        </div>
    )
}

