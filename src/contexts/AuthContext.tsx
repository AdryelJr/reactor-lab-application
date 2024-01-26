import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type User = {
    id: string | null;
    name: string | null;
    email: string | null;
    avatar: string | null
}

type AuthContextType = {
    user: User | undefined;
    setUser: any | undefined;
}

type UserProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
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
