import { Header } from '../../componentes/Header';
import { useUser } from '../../contexts/AuthContext';
import { ProfileImg } from '../../componentes/ProfileImg';
import './style.scss'

export function ProfilePage() {
  const { user } = useUser();

  const followers = user?.followers.length;
  const following = user?.following.length;

  return (
    <div>
      <Header />

      <div className='content-profilePage'>
        <div className='img-profile'>
          {/* FOTO DE PERFIL */}
          <ProfileImg></ProfileImg>
        </div>
        <div className='cima-profile'>
          {/* CADA DO PERFIL */}
          <img src="https://i.pinimg.com/564x/63/4f/85/634f85c482ec7becbfea699b21a8100e.jpg" alt="capa do perfil" />
        </div>

        <div className='baixo-profile'>
          {/* INFORMAÇÕES DO PERFIL */}
          <div className='div-span-information'>
            <p>{user?.name}</p>
            <span><strong>{followers}</strong><br /> Seguidores</span>
            <span><strong>{following}</strong> <br /> Seguindo</span>
          </div>
          <div className='edit-profile'>
            <button>Editar conta</button>
          </div>
        </div>
      </div>
    </div>
  );
}