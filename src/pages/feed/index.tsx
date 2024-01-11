import { useState } from "react";
import { Header } from "../../componentes/Header";

import './style.scss'
import { ButtonEnter } from "../../componentes/ButtonEnter";


type UserGitHubType = {
  name: string,
  avatar_url: string
}

export function Feed() {
  const nameGitHub = "Adryeljr";
  const [user, setUser] = useState<UserGitHubType | null>(null);

  const fetchGitHubUser = async () => {
    const response = await fetch(`https://api.github.com/users/${nameGitHub}`);
    const userData = await response.json();
    setUser(userData);
  };
  fetchGitHubUser();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="feed">
      <section>
        <Header
          onSearchFocus={handleSearchFocus}
          onSearchBlur={handleSearchBlur}
        />
      </section>

      <section className={`body ${isSearchFocused ? 'dark-background' : ''}`}>
        <div className="feed-left">
          <div className="tamplate">
            <img src={user?.avatar_url} alt={user?.name} />
          </div>
        </div>

        <div className="feed-center">
          <div className="div-publication">
            <div>
              <img src={user?.avatar_url} alt={user?.name} />
            </div>
            <form>
              <textarea
                placeholder="No que você está pensando?"
              />
              <ButtonEnter fraseButton="Enviar"></ButtonEnter>
            </form>
          </div>

          <main className="feed-content">
            Por hoje é só...
          </main>
        </div>

        <div className="feed-right">
          Notícias do app
        </div>
      </section>
    </div>
  );
}

export default Feed;
