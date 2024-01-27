import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { fetchUserDataFromDatabase } from '../services/connAPI';

type User = {
    name?: string | null;
    email?: string | null;
    avatar?: string | null;
    following?: any[];
    followers?: any[];
}

type AuthContextType = {
    user: User | undefined | null;
    setUser: any | undefined;
}

type UserProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState<User | undefined>(() => {
        const storedUser = localStorage.getItem('userDados');
        return storedUser ? JSON.parse(storedUser) : undefined;
    });

    // QUANDO A API ESTIVER RETORNANDO NOME E EMAIL, TIRAR ESSES LOCALSTORAGE 
    // DE UMA PAGINA PRA OUTRA E FAZER A VALIDAÇÃO SO NESSA PAGINA

    useEffect(() => {
        const authenticate = async () => {
            const storedUserId = localStorage.getItem('userId');
            if (storedUserId) {
                try {
                    const userData = await fetchUserDataFromDatabase(storedUserId);
                    setUser(userData)
                    console.log("SEGUNDO USEEFFECT", userData)
                } catch (error) {
                    console.error('Erro ao obter dados do usuário', error)
                }
            }
        }
        authenticate();
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useUser() {
    const context = useContext(AuthContext);
    return context;
}

