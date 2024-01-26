import { useNavigate } from 'react-router-dom';
import './style.scss';

export function SingOut() {
    const navigate = useNavigate();
    const handleSingOut = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userDados')

        navigate('/login')
    }

    return (
        <button className="btn-sair" onClick={handleSingOut}>Sair</button>
    )
}