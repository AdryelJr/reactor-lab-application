import { ReactNode, createContext, useContext, useState } from 'react';

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

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}


export function useUser() {
    const context = useContext(AuthContext);
    return context;
}

