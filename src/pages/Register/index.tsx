import { FormEvent, useState } from 'react';
import { Button } from '../../componentes/Button';
import { Link, useNavigate } from 'react-router-dom';
import iconGoogle from '../../assets/image/iconGoogle.png';;
import logoCompletImg from '../../assets/image/ReactorLogo.png';
import { createUser } from '../../services/connAPI';
import { useUser } from '../../contexts/AuthContext';

import './style.scss';

export function Register() {
    const { updateUser } = useUser();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [erroPass, setErroPass] = useState(false);

    async function handleCreateAccount(event: FormEvent) {
        event.preventDefault()

        if (password !== confirmPassword || password.length < 6) {
            setErroPass(true)
            return;
        }
        setErroPass(false);
        try {
            const user: any = await createUser({ name, email, password });
            if (user && user.userId) {
                updateUser(user.userDados);
                localStorage.setItem('userId', user.userId.id);
                navigate('/feed');
            } else {
                console.error('Erro ao criar usuário: usuário não foi retornado.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);

            if (error instanceof SyntaxError) {
                console.error('Erro de análise JSON');
            } else if (error instanceof Response) {
                console.error('Erro no servidor:', error.status, error.statusText);
            } else {
                console.error('Erro desconhecido ao cadastrar usuário', error);
            }
            throw new Error('Erro desconhecido ao cadastrar usuário');
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
                        <Link to='/login'>
                            <Button className="enter" fraseButton='Entrar' />
                        </Link>
                    </div>
                </nav>

                <main className='main-container'>
                    <div className='div-centro'>
                        <h1>Cadastre-se na plataforma!</h1>

                        <form>
                            <label>Nome</label>
                            <input
                                required
                                type="text"
                                placeholder='Nome completo'
                                onChange={(e) => (setName(e.target.value))}
                                value={name}
                            />
                            <label>E-mail</label>
                            <input
                                required
                                type="text"
                                placeholder='E-mail'
                                onChange={(e) => (setEmail(e.target.value))}
                                value={email}
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Senha'
                                onChange={(e) => (setPassword(e.target.value))}
                                value={password}
                            />
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Confirmar senha'
                                onChange={(e) => (setConfirmPassword(e.target.value))}
                                value={confirmPassword}
                            />
                            <p className={`${erroPass ? 'visible' : ''}`}>Senhas não conferem</p>

                            <span>Já tem uma conta? <a href="/login">Entrar agora</a></span>
                            <Button fraseButton='Cadastrar' onClick={handleCreateAccount} />
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