import { useState } from "react";
import { Header } from "./componentes/Header";

function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div>
      <section>
        <Header
          onSearchFocus={handleSearchFocus}
          onSearchBlur={handleSearchBlur}
        />
      </section>
      <section className={`body ${isSearchFocused ? 'dark-background' : ''}`}>
        <h1>Hello world!!!!</h1>
      </section>
    </div>
  );
}

export default App;
