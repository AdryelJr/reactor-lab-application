import { FormEvent, useState } from 'react';
import logoCompletImg from '../../assets/image/ReactorLogo.png';
import iconGoogle from '../../assets/image/iconGoogle.png';
import { Button } from '../../componentes/Button';
import { Link, useNavigate } from 'react-router-dom';
import { validateUserEmail } from '../../services/connAPI';

import './style.scss';

export function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        if (email && password) {
            try {
                const user: any = await validateUserEmail({ email, password });
                if (user && user.email) {
                    console.log('console login', user);
                    navigate('/feed')
                }
            } catch (error) {
                console.error('Erro ao entrar na conta', error);
            }
        }
    }

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
                        <Link to="/cadastro">
                            <Button fraseButton='Cadastre-se agora' />
                        </Link>
                    </div>
                </nav>

                <main className='main-container'>
                    <div className='div-esquerda'>
                        <h1>Compatilhe seus projetos <br /> com a
                            comunidade!</h1>

                        <form>
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder='E-mail'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Senha'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <a href="#">Esqueceu a senha?</a>
                            <Button fraseButton='Entrar' onClick={handleSignIn} />
                        </form>
                        <div className='bottom-form'>
                            <div className='linha-meio'>ou</div>
                            <button className='button-google'>
                                <img width={50} src={iconGoogle} alt="icon google" />
                                <span>Entrar com o google</span>
                            </button>
                        </div>
                    </div>

                    <div className='div-direita'>
                        <img src="https://certificacaoiso.com.br/wp-content/uploads/2019/11/lancamento-do-projeto-de-desenvolvimento-em-desenvolvimento_82574-7825.jpg" alt="imagem section main" />
                    </div>
                </main>
            </div>
        </>
    )
}