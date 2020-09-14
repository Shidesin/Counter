import React from 'react';
import './Counter.css';

type PropsType = {
    title: string
    onClickFunction: () => void
    disableMod: boolean
}


export function Button(props: PropsType) {
    return (
            <button className={'button'} onClick={props.onClickFunction} disabled={props.disableMod} >{props.title}</button>
    )
}