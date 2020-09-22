import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {ValueInput} from './ValueInput';
import styles from '../CounterStyle.module.css'
import {Button} from './Button';


type DisplaySetCounterPropsType = {
    callbackValueMin: (value: number) => void
    callbackValueMax: (value: number) => void
    setCounterValue: (value: number) => void
    disableModSet:() => boolean
    setButtonFunc: () => void
    settingValueMax: number
    settingValueMin: number
    errorSet?: () => void
    className: string
}

export function DisplaySetCounter(props: DisplaySetCounterPropsType) {

    const onCangeValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMin(Number(event.currentTarget.value))
        props.setCounterValue(Number(event.currentTarget.value))
        props.errorSet && props.errorSet()
    }

    const onCangeValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMax(Number(event.currentTarget.value))
        props.errorSet && props.errorSet()
    }

    return (

        <div className={styles.settingDisplay_box}>
            <div className={styles.settingDisplay}>
                <ValueInput className={props.className} value={props.settingValueMin} onCange={onCangeValueMin}
                            title={'Min value'}/>
                <ValueInput className={props.className} value={props.settingValueMax} onCange={onCangeValueMax}
                            title={'Max value'}/>
            </div>
            <div className={styles.button_box_setting}>
                <div>
                    <NavLink
                        to={'/Counter_2/displayCounter'} >
                        <Button title={'Set'} onClickFunction={props.setButtonFunc} disableMod={props.disableModSet()}/>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}


// aria-disabled={'true'}