
import './style.scss'

type TextoButton = {
    fraseButton: string
}

export function ButtonRegister(texto: TextoButton){
    return(
        <div className='button-register'>
            <button>{texto.fraseButton}</button>
        </div>
    )
}