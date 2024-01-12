
import { FormEvent } from 'react';
import './style.scss'

type TextoButton = {
    fraseButton: string
    onClick?: (event: FormEvent) => void;
    className?: string
}

export function Button(label: TextoButton){
    return(
        <div className='button'>
            <button className={label.className} onClick={label.onClick}>{label.fraseButton}</button>
        </div>
    )
}