const apiUrl = 'https://reactorlabapi.onrender.com';

export const createUser = async (userData: { name: string, email: string, password: string }) => {
    try {
        const response = await fetch(`${apiUrl}/createUserEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const userID = await response.json();
            // PRECISA MUDAR A API, RETORNAR NOME E EMAIL TBM
            return userID;
        } else {
            throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`);
        }

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
    }
}

// QUANDO A API ESTIVER RETORNANDO NOME E EMAIL, PODE TIRAR ESSA PARTE DE BAIXO E FAZER O CONTEXT SOMENTE COM O NOME E EMAIL

type UserDataType = {
    name: string | null;
    email: string | null;
    avatar: string | null;
    following: any[];
    followers: any[];
}

export async function fetchUserDataFromDatabase(userId: string) {
    try {
        const response = await fetch(`${apiUrl}/getUser/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const userDataRef = await response.json();
            const userData :UserDataType= {
                name: userDataRef.name,
                email: userDataRef.email,
                avatar: userDataRef.avatar,
                followers: userDataRef.seguidores,
                following: userDataRef.seguindo
            }
            return userData;
        } else {
            throw new Error(`Erro ao buscar usuário: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        throw error;
    }
}
