import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {ValueInput} from './ValueInput';
import styles from './CounterStyle.module.css'
import {Button} from './Button';


type DisplaySetCounterPropsType = {
    callbackValueMin: (value: number) => void
    callbackValueMax: (value: number) => void
    setCounterValue: (value: number) => void
    disableModSet: () => boolean
    setButtonFunc: () => void
    settingValueMax: number
    settingValueMin: number
    errorSet?: () => void
}

export function DisplaySetCounter(props: DisplaySetCounterPropsType) {
    const onCangeValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMin(Number(event.currentTarget.value))
        props.setCounterValue(Number(event.currentTarget.value))


    }

    const onCangeValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMax(Number(event.currentTarget.value))

    }

    let disableMod = props.disableModSet()

    return (

        <div className={styles.settingDisplay_box}>
            <div className={styles.settingDisplay}>
                <ValueInput errorStyle={props.disableModSet()} value={props.settingValueMin} onCange={onCangeValueMin}
                            title={'min value'}/>
                <ValueInput errorStyle={props.disableModSet()} value={props.settingValueMax} onCange={onCangeValueMax}
                            title={'max value'}/>
            </div>
            <div className={styles.button_box_setting}>
                <div>
                    <NavLink
                        to={'/Counter_2/displayCounter'} >
                        <Button title={'Set'} onClickFunction={props.setButtonFunc} disableMod={disableMod}/>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}


// aria-disabled={'true'}