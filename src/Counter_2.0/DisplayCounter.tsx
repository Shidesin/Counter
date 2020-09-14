import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from './Button';
import {CounterMonitor} from './CounterMonitor';
import styles from './CounterStyle.module.css'

type CounterPropsType = {
    valueCounter: number
    setCounterValue: (value: number) => void
    ErrorMessage?: string
    settingValueMin: number
    settingValueMax: number
    setButtonFunc: () => void
}


const DisplayCounter: React.FC<CounterPropsType> = (props) => {

    const MinValueNumber = props.settingValueMin;
    const MaxValueNumber = props.settingValueMax;

    let disableModInc: boolean = (props.valueCounter < 0 && props.valueCounter < MaxValueNumber) || (props.valueCounter < 0 && props.valueCounter < MaxValueNumber) || (props.valueCounter === MaxValueNumber) || (props.valueCounter > MaxValueNumber) ? true : false;


    let disableModReset: boolean;
    props.valueCounter !== MinValueNumber ? disableModReset = false : disableModReset = true;

    const addNumber = () => props.setCounterValue(props.valueCounter + 1)

    const resetNumber = () => props.setCounterValue(MinValueNumber)





    return (
        <div className={styles.settingDisplay_box} >

            <CounterMonitor
                ErrorMessage={props.ErrorMessage}
                valueCounter={props.valueCounter}
                MaxValueNumber={MaxValueNumber}
            />

            <div className={styles.button_box}>
                <Button
                    title={'Inc'}
                    onClickFunction={addNumber}
                    disableMod={disableModInc}
                />
                <Button
                    title={'Reset'}
                    onClickFunction={resetNumber}
                    disableMod={disableModReset}
                />
                <NavLink to={'/Counter_2/displaySetCounter'} className={styles.button_link} >Set</NavLink>
            </div>
        </div>
    )
}

export default DisplayCounter;