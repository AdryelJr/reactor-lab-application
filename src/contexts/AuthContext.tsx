import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { fetchUserDataFromDatabase } from '../services/connAPI';

type User = {
    name: string | null;
    email: string | null;
    avatar: string | null;
    following: any[];
    followers: any[];
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
        const authenticateUser = async () => {
            const storedUserId = localStorage.getItem('userId')
            if (storedUserId) {
                try {
                    const userData = await fetchUserDataFromDatabase(storedUserId);
                    setUser(userData);
                } catch (error) {
                    console.error('Erro ao obter dados do usuário', error)
                }
            }
        };
        authenticateUser();
    }, [setUser]);


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
