import React from 'react';
/*import limitNumber from './Counter';*/


type PropsType = {
    valueCounter: number
    MaxValueNumber: number
    ErrorMessage?: string
}

export const CounterDisplay = (props:PropsType ) => {

    let ErrorMessage = props.ErrorMessage

    let correctDisplay = ErrorMessage ? ErrorMessage : props.valueCounter


    return (
        <div className= {props.valueCounter < props.MaxValueNumber ? `${'display_box'}` : `${'end_number'}`} >
            {correctDisplay}
        </div>
    )
}