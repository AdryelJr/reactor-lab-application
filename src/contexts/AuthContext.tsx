import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
}

type AuthContextType = {
    user: User | undefined;
    setUserData: (data: User | undefined) => void;
}

type UserProviderProps = {
    children: ReactNode;
}

const UserContext = createContext({} as AuthContextType);

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

    return (
        <UserContext.Provider value={{ user: userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
}
