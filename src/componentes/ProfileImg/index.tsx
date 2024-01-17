import { useUser } from '../../contexts/AuthContext';
import './style.scss';

export function ProfileImg() {
    const { user } = useUser();
    
    const avatar = user?.avatar ?? 'https://w7.pngwing.com/pngs/21/228/png-transparent-computer-icons-user-profile-others-miscellaneous-face-monochrome.png';
    const name = user?.name ?? 'n/a';

    return (
        <div className="div-profile-img">
            <img src={avatar} alt={name} />
        </div>
    );
}
