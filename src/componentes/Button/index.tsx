
import { FormEvent } from 'react';
import './style.scss'

type TextoButton = {
    fraseButton: string
    onClick?: (event: FormEvent) => void;
}

export function Button(label: TextoButton){
    return(
        <div className='button'>
            <button onClick={label.onClick}>{label.fraseButton}</button>
        </div>
    )
}