import React from 'react';


type PropsType = {
    valueCounter: number
    MaxValueNumber: number
    textDisplay?: string | number
    className: string
}

export const CounterMonitor_2 = (props:PropsType ) => {
    return (
        <div  className={props.className}>
            {props.textDisplay}
        </div>
    )
}