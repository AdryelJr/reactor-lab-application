import { useNavigate } from "react-router-dom"
import { useUser } from "../../contexts/AuthContext";

import './style.scss';

export function SingOut() {
    const Navigate = useNavigate();
    const { setUserData } = useUser();

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUserData(undefined)
        Navigate('/login')
    }

    return (
        <button onClick={handleSignOut} className="btn-sair">Sair</button>
    )
}