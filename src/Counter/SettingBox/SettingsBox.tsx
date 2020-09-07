import React, {ChangeEvent} from 'react';
import styles from './SettingsBox.module.css'
import {Button} from '../ButtonBlock';
import {ValueInput} from './ValueInput';


type SettingCounterPropsType = {
    callbackValueMin: (value: number) => void
    callbackValueMax: (value: number) => void
    setCounterValue: (value: number) => void
    disableModSet: () => boolean
    setButtonFunc: () => void
    settingValueMax: number
    settingValueMin: number
    errorSet: () => void
}

export function SettingCounter(props: SettingCounterPropsType) {

    const onCangeValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMin(Number(event.currentTarget.value))
        props.setCounterValue(Number(event.currentTarget.value))
        props.errorSet()

    }

    const onCangeValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMax(Number(event.currentTarget.value))
        props.errorSet()
    }

    return (

        <div className={styles.settingDisplay_box}>
            <div className={styles.settingDisplay}>
                <ValueInput errorStyle={props.disableModSet()} value={props.settingValueMin} onCange={onCangeValueMin}
                            title={'min value'}/>
                <ValueInput errorStyle={props.disableModSet()} value={props.settingValueMax} onCange={onCangeValueMax}
                            title={'max value'}/>
            </div>
            <div className={styles.button_box}>
                <Button title={'Set'} onClickFunction={props.setButtonFunc} disableMod={props.disableModSet()}/>
            </div>
        </div>
    )
}

