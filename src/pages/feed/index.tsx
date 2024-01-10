import { useState } from "react";
import { Header } from "../../componentes/Header";

import './style.scss'

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
          feed-left
        </div>

        <div className="feed-center">
          <div className="input">
            input
          </div>

          <main className="feed-content">
            main-content
          </main>
        </div>

        <div className="feed-right">
          feed-right
        </div>
      </section>
    </div>
  );
}

export default Feed;
