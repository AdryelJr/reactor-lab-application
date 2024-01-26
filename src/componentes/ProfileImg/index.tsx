import { useUser } from '../../contexts/AuthContext';
import './style.scss';

export function ProfileImg() {
    const { user } = useUser();
    
    const avatar = user?.avatar ?? 'https://pics.craiyon.com/2023-06-27/287f2a60c2e74386b5a89c517eb527dc.webp';
    const name = user?.name ?? 'n/a';

    return (
        <div className="div-profile-img">
            <img src={avatar} alt={name} />
        </div>
    );
}
