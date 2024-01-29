import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { fetchUserDataFromDatabase } from '../services/connAPI';

type UserProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as any);

export function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState<any>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const updateUser = (newUser: any) => {
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    };


    useEffect(() => {
        const fetchData = async () => {
            const id_user: any = localStorage.getItem('userId')
            if (user) {
                try {
                    const userData: any = await fetchUserDataFromDatabase(id_user);
                    setUser(userData,);
                } catch (error) {
                    console.error('Erro ao buscar dados do usuário:', error);
                }
            }
        };
        fetchData();
    }, []);


    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, updateUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}


export function useUser() {
    const context = useContext(AuthContext);
    return context;
}

