import './stryle.scss'

type TextoButton = {
    fraseButton: string
}

export function ButtonEnter(texto: TextoButton){
    return(
        <div className='button-enter'>
            <button>{texto.fraseButton}</button>
        </div>
    )
}