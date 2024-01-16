import { Header } from '../../componentes/Header';
import { ProfileImg } from '../../componentes/ProfileImg';
import './style.scss'

export function ProfilePage() {
  return (
    <div>
      <Header />

      <div className='content-profilePage'>
        <div className='div-profile'>
          <div className='banner'>
            <ProfileImg />
          </div>

          <div className='profile-content'>
            <h1>Nome</h1>
            <p>something else from the profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}