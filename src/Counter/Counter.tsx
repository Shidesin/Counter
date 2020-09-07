import React from 'react';
import {CounterDisplay} from './CounterDisplay';
import {Button} from './ButtonBlock';
import './Counter.css';

type CounterPropsType = {
    minMaxValue: Array<number>
    valueCounter: number
    setCounterValue: (value: number) => void
    ErrorMessage: string
}

export const Counter = (props: CounterPropsType) => {


    const MinValueNumber = props.minMaxValue[0];
    const MaxValueNumber = props.minMaxValue[1];




    let disableModInc: boolean;
    props.valueCounter < MaxValueNumber ? disableModInc = false : disableModInc = true;

    let disableModReset: boolean;
    props.valueCounter !== MinValueNumber ? disableModReset = false : disableModReset = true;

    const addNumber = () => props.setCounterValue(props.valueCounter + 1)

    const resetNumber = () => props.setCounterValue(MinValueNumber)


    return (
        <div className={'counter_box'}>
            <CounterDisplay ErrorMessage={props.ErrorMessage} valueCounter={props.valueCounter} MaxValueNumber={MaxValueNumber}/>
            <div className={'button_box'}>
                <Button title={'Inc'} onClickFunction={addNumber} disableMod={disableModInc}/>
                <Button title={'Reset'} onClickFunction={resetNumber} disableMod={disableModReset}/>
            </div>

        </div>
    )
}

