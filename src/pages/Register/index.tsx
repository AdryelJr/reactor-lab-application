import logoCompletImg from '../../assets/image/ReactorLogo.png';
import { ButtonEnter } from '../../componentes/ButtonEnter';

import iconGoogle from '../../assets/image/iconGoogle.png';;

import './style.scss';
import { ButtonRegister } from '../../componentes/ButtonRegister';
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <>
            <div className='container-SignIn'>
                <nav className='nav-SignIn'>
                    <div className='div-logo'>
                        <img src={logoCompletImg} alt="Logo Reactor Lab" />
                    </div>
                    <div className='div-content'>
                        <div className='icon article'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17" focusable="false" aria-busy="false">
                                <path d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z"></path>
                            </svg>
                            <p>Artigos</p>
                        </div>
                        <Link to='/login'>
                            <ButtonEnter fraseButton='Entrar' />
                        </Link>
                    </div>
                </nav>


                <main className='main-container'>
                    <div className='div-centro'>
                        <h1>Cadastre-se na plataforma!</h1>

                        <form>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder='Nome completo'
                            />
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder='E-mail'
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Senha'
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Confirmar senha'
                            />
                            <span>Já tem uma conta? <a href="#">Entrar agora</a></span>
                            <ButtonRegister fraseButton='Cadastrar'></ButtonRegister>
                        </form>
                        <div className='bottom-form'>
                            <div className='linha-meio'>ou</div>
                            <button className='button-google'>
                                <img width={50} src={iconGoogle} alt="icon google" />
                                <span>Entrar com o google</span>
                            </button>
                        </div>
                    </div>
                </main>


            </div>
        </>
    )
}