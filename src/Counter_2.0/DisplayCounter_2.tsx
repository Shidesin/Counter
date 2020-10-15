import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from './Button';
import {CounterMonitor_2} from './CounterMonitor_2';
import styles from '../CounterStyle.module.css'

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


const DisplayCounter_2: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={styles.settingDisplay_box}>
            <CounterMonitor_2
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
                <NavLink to={'/Counter_2/displaySetCounter'}>
                    <Button title={'Set'}/>
                </NavLink>
            </div>
        </div>
    )
}

export default DisplayCounter_2;