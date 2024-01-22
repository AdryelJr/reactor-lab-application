import { FormEvent, useEffect, useState } from "react";

import { Header } from "../../componentes/Header";
import { Button } from "../../componentes/Button";
import { ProfileImg } from "../../componentes/ProfileImg";

import './style.scss'
import { useUser } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { database, push, ref, set } from "../../services/firebase";
import { get, onValue } from "firebase/database";
import { Publi } from "../../componentes/Publication";

type PubliType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
}

export function Feed() {
  const [newPubli, setNewPubli] = useState('');
  const [publi, setPubli] = useState<PubliType[]>([]);
  const [showReloadMessage, setShowReloadMessage] = useState(false);
  const [hasMorePostings, setHasMorePostings] = useState(false);
  const Navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      Navigate('/login');
    }
  }, [user, Navigate]);

  console.log(hasMorePostings)


  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  async function handleNewPubli(event: FormEvent) {
    event.preventDefault();
    if (newPubli.trim() == '') {
      return;
    }

    if (!user) {
      throw new Error('Erro ao enviar publicação');
    }

    const publi = {
      content: newPubli,
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      isHighLighted: false,
      isAnswer: false
    }

    const publiRef = ref(database, 'feed');
    const newPubliRef = push(publiRef);

    await set(newPubliRef, {
      ...publi
    });

    setNewPubli('');
  }

  useEffect(() => {
    const loadInitialPostings = async () => {
      const newPubliRef = ref(database, 'feed');
      const snapshot = await get(newPubliRef);

      if (snapshot.exists()) {
        const databasePubli = snapshot.val();

        const parsedPubli = Object.keys(databasePubli ?? {}).map(key => ({
          id: key,
          content: databasePubli[key].content,
          author: databasePubli[key].author,
          isHighLighted: databasePubli[key].isHighLighted,
          isAnswered: databasePubli[key].isAnswered,
        }));

        setHasMorePostings(parsedPubli.length > 25);
        setPubli(parsedPubli.reverse().slice(0, 25));
      }
    };

    const lastLoadedPostTime = new Date().getTime();
    loadInitialPostings();

    const intervalId = setInterval(async () => {
      const newPubliRef = ref(database, 'feed');
      const snapshot = await get(newPubliRef);

      if (snapshot.exists()) {
        const databasePubli = snapshot.val();
        const parsedPubli = Object.keys(databasePubli ?? {}).map(key => ({
          id: key,
          content: databasePubli[key].content,
          author: databasePubli[key].author,
          isHighLighted: databasePubli[key].isHighLighted,
          isAnswered: databasePubli[key].isAnswered,
          timestamp: databasePubli[key].timestamp,
        }));

        const hasNewPostings = parsedPubli.some(post => post.timestamp > lastLoadedPostTime);

        if (hasNewPostings) {
          setShowReloadMessage(true);
        }

        setPubli(parsedPubli.reverse().slice(0, 25));
      }
    }, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [user]);

  const handleReloadClick = () => {
    setShowReloadMessage(false);

    const newPubliRef = ref(database, 'feed');
    onValue(newPubliRef, (snapshot) => {
      if (snapshot.exists()) {
        const databasePubli = snapshot.val();
        const parsedPubli = Object.keys(databasePubli ?? {}).map(key => ({
          id: key,
          content: databasePubli[key].content,
          author: databasePubli[key].author,
          isHighLighted: databasePubli[key].isHighLighted,
          isAnswered: databasePubli[key].isAnswered,
        }));
        const reversedPubli = parsedPubli.reverse().slice(0, 25);
        setPubli(reversedPubli);
      }
    }, (error) => {
      console.error("Error getting document: ", error);
    });
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

            {showReloadMessage && (
              <div className="reload-message">
                <p>Clique para recarregar e ver as mais recentes.</p>
                <Button onClick={handleReloadClick} fraseButton="Recarregar" />
              </div>
            )}

            <div className="div-publication">
              <div>
                <ProfileImg />
              </div>
              <form onSubmit={handleNewPubli}>
                <textarea
                  placeholder="No que você está pensando?"
                  onChange={event => setNewPubli(event.target.value)}
                  value={newPubli}
                />
                <Button fraseButton="Enviar" />
              </form>
            </div>

            <div className="linha-meio-feed">
              <p>feed</p>
            </div>
            <main className="feed-content">
              {publi.map(publi => {
                return (
                  <Publi
                    key={publi.id}
                    content={publi.content}
                    author={publi.author}
                  />
                )
              })}
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
