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
            const userResponse = {
                userId: await response.json(),
                userDados: {
                    name: userData.name,
                    email: userData.email,
                }
            };
            return userResponse;
        } else {
            throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`);
        }

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
    }
}


// ----------------------------------------------------------------------



export async function validateUserEmail(userDados: { email: string, password: string }) {
    const { email, password } = userDados;

    if (email && password) {
        try {
            const response = await fetch(`${apiUrl}/validateUserEmail`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userDataRef = await response.json();
                console.log(userDataRef)
                return userDataRef;
            } else {
                throw new Error(`Erro ao buscar usuário: ${response.statusText}`);
            }

        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    } else {
        throw new Error('Dados de usuário inválidos.');
    }
}




// ----------------------------------------------------------------------


export async function fetchUserDataFromDatabase(userId: string) {
    if (userId) {
        try {
            const response = await fetch(`${apiUrl}/getUser/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userDataRef = await response.json();
                const userData = {
                    name: userDataRef.name,
                    email: userDataRef.email,
                    avatar: userDataRef.avatar,
                    followers: userDataRef.seguidores,
                    following: userDataRef.seguindo,
                }
                return userData;
            } else {
                throw new Error(`Erro ao buscar user: ${response.statusText}`);
            }

        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    }
}



