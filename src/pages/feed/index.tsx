import { useState } from "react";

import { Header } from "../../componentes/Header";
import { Button } from "../../componentes/Button";
import { ProfileImg } from "../../componentes/ProfileImg";

import './style.scss'
// import { useUser } from "../../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

export function Feed() {
  // const Navigate = useNavigate();
  // const { user } = useUser();

  // if (!user) {
  //   Navigate('/login');
  //   return
  // }

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

        <div className={`body ${isSearchFocused ? 'dark-background' : ''}`}>
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
                <Button fraseButton="Enviar" />
              </form>
            </div>

            <main className="feed-content">
              Por hoje é só...
            </main>
          </div>

          <div className="feed-right">
            Notícias do app
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feed;
