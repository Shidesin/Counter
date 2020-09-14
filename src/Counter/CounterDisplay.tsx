import React from 'react';
import './Counter.css';


type PropsType = {
    valueCounter: number
    MaxValueNumber: number
    ErrorMessage?: string
}

export const CounterDisplay = (props:PropsType ) => {

    let ErrorMessage = props.ErrorMessage

    let correctDisplay = ErrorMessage ? ErrorMessage : props.valueCounter

     let correctDisplayStyle = (props.valueCounter < 0 && props.valueCounter < props.MaxValueNumber) || (props.valueCounter < 0 && props.valueCounter < props.MaxValueNumber) || (props.valueCounter ===  props.MaxValueNumber) || (props.valueCounter > props.MaxValueNumber) ?  `${'end_number'}`: `${'display_box'}`

    return (
        <div className = {correctDisplayStyle} >
            {correctDisplay}
        </div>
    )
}