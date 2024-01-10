import logoCompletImg from '../../assets/image/ReactorLogo.png';
import { ButtonEnter } from '../../componentes/ButtonEnter';
import { ButtonRegister } from '../../componentes/ButtonRegister';

import './style.scss';

export function Home() {
    return (
        <>
            <div className='container-home'>
                <nav className='nav-home'>
                    <div className='div-logo'>
                        <img src={logoCompletImg} alt="Logo Reactor Lab" />
                    </div>
                    <div className='icon article'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17" focusable="false" aria-busy="false">
                            <path d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z"></path>
                        </svg>
                        <p>Artigos</p>
                    </div>
                    <ButtonRegister fraseButton="Cadastre-se agora"></ButtonRegister>
                    <ButtonEnter fraseButton="Entrar"></ButtonEnter>
                </nav>
            </div>
        </>
    )
}