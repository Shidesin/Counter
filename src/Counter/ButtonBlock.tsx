import React from 'react';

type PropsType = {
    title: string
    onClickFunction: () => void
    disableMod: boolean
    disableModSet?: () => boolean
}


export function Button(props: PropsType) {
    return (
            <button className={'button'} onClick={props.onClickFunction} disabled={props.disableMod} >{props.title}</button>
    )
}