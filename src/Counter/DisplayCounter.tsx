import React from 'react';
import styles from '../CounterStyle.module.css'
import {CounterMonitor} from './CounterMonitor';
import {Button} from '../Counter_2.0/Button';

type CounterPropsType = {
    valueCounter: number
    textDisplay?: string | number
    settingValueMax: number
    addNumber: () => void
    resetNumber: () => void
    disableModInc: boolean
    disableModReset: boolean
    className: string
}


export const DisplayCounter: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={styles.settingDisplay_box}>

            <CounterMonitor
                className={props.className}
                textDisplay={props.textDisplay}
                valueCounter={props.valueCounter}
                MaxValueNumber={props.settingValueMax}
            />

            <div className={styles.button_box}>
                <Button
                    title={'Inc'}
                    onClickFunction={props.addNumber}
                    disableMod={props.disableModInc}
                />

                <Button
                    title={'Reset'}
                    onClickFunction={props.resetNumber}
                    disableMod={props.disableModReset}
                />
            </div>
        </div>
    )
}