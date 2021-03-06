import React, {ChangeEvent} from 'react';
import styles from '../CounterStyle.module.css'
import {ValueInput} from '../Counter_2.0/ValueInput';
import {Button} from '../Counter_2.0/Button';
import {useDispatch} from 'react-redux';
import {setError} from '../redux/counterReducer';


type DisplaySetCounterPropsType = {
    callbackValueMin: (value: number) => void
    callbackValueMax: (value: number) => void
    disableModSet: () => boolean
    setButtonFunc: () => void
    settingValueMax: number
    settingValueMin: number
    className: string
}

export function DisplaySetCounter(props: DisplaySetCounterPropsType) {

    let dispatch = useDispatch()

    const onCangeValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMin(Number(event.currentTarget.value))
        if (Number(event.currentTarget.value) < 0 ||
            Number(event.currentTarget.value) > props.settingValueMax ||
            props.settingValueMax < 0 ||
            (Number(event.currentTarget.value) === props.settingValueMax && Number(event.currentTarget.value) !== 0)) {
            dispatch(setError('Incorrect value'))
        } else if (Number(event.currentTarget.value) === 0 && props.settingValueMax === 0) {
            dispatch(setError('Input values and click "Set"'))
        } else {
            dispatch(setError(''))
        }

    }

    const onCangeValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackValueMax(Number(event.currentTarget.value))
        if (props.settingValueMin < 0 ||
            props.settingValueMin > Number(event.currentTarget.value) ||
            Number(event.currentTarget.value) < 0 ||
            (props.settingValueMin === Number(event.currentTarget.value) && props.settingValueMin !== 0)) {
            dispatch(setError('Incorrect value'))
        } else if (props.settingValueMin === 0 && Number(event.currentTarget.value) === 0) {
            dispatch(setError('Input values and click "Set"'))
        } else {
            dispatch(setError(''))
        }
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
                    <Button title={'Set'} onClickFunction={props.setButtonFunc} disableMod={props.disableModSet()}/>
                </div>

            </div>
        </div>
    )
}


