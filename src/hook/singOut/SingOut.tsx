import { useUser } from '../../contexts/AuthContext';
import './style.scss';

export function SingOut() {
    const { logout } = useUser();

    return (
        <button className="btn-sair" onClick={logout}>Sair</button>
    )
}