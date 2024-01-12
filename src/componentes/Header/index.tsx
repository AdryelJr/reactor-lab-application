import logoImg from '../../assets/image/Rl.png'
import './style.scss'
import { ProfileImg } from '../ProfileImg'
import { useState } from 'react'

type SearchFocus = {
    onSearchFocus: any
    onSearchBlur: any
}

export function Header({ onSearchFocus, onSearchBlur }: SearchFocus) {
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const handleInputFocus = () => {
        setTimeout(() => {
            setIsSearchVisible(true);
        }, 500)
        onSearchFocus();
    }

    const handleInputblur = () => {
        setIsSearchVisible(false)
        onSearchBlur();
    }

    return (
        <div className="global-nav-menu">
            <div className='content'>
                <img className='img' src={logoImg} alt="React Lab" />
                <div className={`search-nav ${isSearchVisible ? 'show' : ''}`}>
                    <input
                        type="text"
                        placeholder='Pesquisar'
                        onFocus={handleInputFocus}
                        onBlur={handleInputblur}
                    />
                    {isSearchVisible && (
                        <div className='div-input-search'>
                            div em branco perfil
                        </div>
                    )}
                </div>
                <div className='global-nav'>
                    <div className='icon home'>
                        <svg viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#f27127"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home</title> <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path> </g></svg>
                        <p>Home</p>
                    </div>

                    <div className='icon message'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f27127" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"></path> </g></svg>
                        <p>Mensagens</p>
                    </div>

                    <div className='icon notification'>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#f27127"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10,20h4a2,2,0,0,1-4,0Zm8-4V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v6L4,18H20Z"></path></g></svg>
                        <p>Notificação</p>
                    </div>
                </div>

                <div className='div-profile'>
                    <ProfileImg />
                    <p>Perfil</p>
                </div>
            </div>
        </div>
    )
}