import React from 'react';
import {CounterDisplay} from './CounterDisplay';
import {Button} from './ButtonBlock';
import './Counter.css';


type CounterPropsType = {
    valueCounter: number
    setCounterValue: (value: number) => void
    ErrorMessage: string
    settingValueMin: number
    settingValueMax: number
}

export const Counter = (props: CounterPropsType) => {


    const MinValueNumber = props.settingValueMin;
    const MaxValueNumber = props.settingValueMax;


    let disableModInc: boolean = (props.valueCounter < 0 && props.valueCounter < MaxValueNumber) || (props.valueCounter < 0 && props.valueCounter < MaxValueNumber) || (props.valueCounter ===  MaxValueNumber) || (props.valueCounter > MaxValueNumber) ? true : false;

    //(props.valueCounter < MaxValueNumber)
    // (props.valueCounter < 0 && props.valueCounter < MaxValueNumber)
    // (props.valueCounter ===  MaxValueNumber)


    let disableModReset: boolean;
    props.valueCounter !== MinValueNumber ? disableModReset = false : disableModReset = true;

    const addNumber = () => props.setCounterValue(props.valueCounter + 1)

    const resetNumber = () => props.setCounterValue(MinValueNumber)


    return (
        <div className={'counter_box'}>
            <CounterDisplay ErrorMessage={props.ErrorMessage} valueCounter={props.valueCounter}
                            MaxValueNumber={MaxValueNumber}/>
            <div className={'button_box'}>
                <Button title={'Inc'} onClickFunction={addNumber} disableMod={disableModInc}/>
                <Button title={'Reset'} onClickFunction={resetNumber} disableMod={disableModReset}/>
            </div>

        </div>
    )
}

