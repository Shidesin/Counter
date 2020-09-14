import React from 'react';
import styles from './CounterStyle.module.css'


type PropsType = {
    valueCounter: number
    MaxValueNumber: number
    ErrorMessage?: string
}

export const CounterMonitor = (props:PropsType ) => {

    let ErrorMessage = props.ErrorMessage

    let correctDisplay = ErrorMessage ? ErrorMessage : props.valueCounter

     let correctDisplayStyle = (props.valueCounter < 0 && props.valueCounter < props.MaxValueNumber) || (props.valueCounter < 0 && props.valueCounter < props.MaxValueNumber) || (props.valueCounter ===  props.MaxValueNumber) || (props.valueCounter > props.MaxValueNumber) ?  `${styles.error_display}`: `${styles.correct_display}`

    return (
        <div  className={correctDisplayStyle}>
            {correctDisplay}
        </div>
    )
}