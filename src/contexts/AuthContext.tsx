import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { doc, setDoc } from 'firebase/firestore';

type User = {
    id: string | null;
    name: string | null;
    email: string | null;
    avatar: string | null
}

type AuthContextType = {
    user: User | undefined;
    setUserData: (data: User | undefined) => void;
    signInWithGoogle: () => Promise<void>
}

type UserProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function UserProvider(props: UserProviderProps) {
    const [userData, setUserData] = useState<User | undefined>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : undefined;
    });

    useEffect(() => {
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
        }
    }, [userData]);

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);

        if (result.user) {
            const { displayName, email, uid, photoURL } = result.user;

            setUserData({
                id: uid || null,
                name: displayName || null,
                email: email || null,
                avatar: photoURL || null,
            });
            await setDoc(doc(db, "Collection users", uid), {
                id: uid,
                name: displayName,
                email: email,
                avatar: photoURL,
            });
        }
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, user: userData, setUserData }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useUser() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
}
