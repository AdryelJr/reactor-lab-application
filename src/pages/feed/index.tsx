import { useState } from "react";
import { Header } from "../../componentes/Header";

import './style.scss'
import { ButtonEnter } from "../../componentes/ButtonEnter";
import { ProfileImg } from "../../componentes/ProfileImg";

export function Feed() {
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
            <ProfileImg />
          </div>
        </div>

        <div className="feed-center">
          <div className="div-publication">
            <div>
              <ProfileImg />
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
