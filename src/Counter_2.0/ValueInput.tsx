import React, {ChangeEvent} from 'react';
import styles from '../CounterStyle.module.css'

export type ValueInputPropsType = {
    title: string
    onCange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    className: string
}
export const ValueInput = (props: ValueInputPropsType) => {



    return (
        <div>
            <span className={styles.titleValue}>{props.title}</span>
            <input value={props.value}  onChange={props.onCange} className={props.className} type={'number'}/>
        </div>
    )
}