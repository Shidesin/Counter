import React, {ChangeEvent} from 'react';
import styles from './CounterStyle.module.css'

export type ValueInputPropsType = {
    title: string
    onCange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    errorStyle: boolean
}
export const ValueInput = (props: ValueInputPropsType) => {

let errorMode = props.errorStyle ? `${styles.input} ${styles.input_error}` : `${styles.input}`

    return (
        <div>
            <span className={styles.titleValue}>{props.title}</span>
            <input value={props.value}  onChange={props.onCange} className={errorMode} type={'number'}/>
        </div>
    )
}