import { Header } from '../../componentes/Header';
import { ProfileImg } from '../../componentes/ProfileImg';
import { useUser } from '../../contexts/AuthContext';

import './style.scss'

export function ProfilePage() {

  const { user } = useUser();

  return (
    <div>
      <Header />

      <div className='content-profilePage'>
        <div className='div-profile'>
          <div className='banner'>
            <ProfileImg />
          </div>

          <div className='profile-content'>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>something else from the profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}