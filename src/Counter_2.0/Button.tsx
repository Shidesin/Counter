import React from 'react';
import styles from './CounterStyle.module.css'


type PropsType = {
    title: string
    onClickFunction: () => void
    disableMod: boolean
}


export function Button(props: PropsType) {
    return (
            <button className={styles.button}  onClick={props.onClickFunction} disabled={props.disableMod} >{props.title}</button>
    )
}