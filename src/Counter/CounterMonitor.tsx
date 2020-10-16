import React from 'react';


type PropsType = {
    // valueCounter: number
    // MaxValueNumber: number
    textDisplay?: string | number
    className: string
}

export const CounterMonitor = (props:PropsType ) => {
    return (
        <div  className={props.className}>
            {props.textDisplay}
        </div>
    )
}