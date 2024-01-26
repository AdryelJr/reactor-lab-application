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
            const responseData = await response.json();
            return responseData.user;
        } else {
            throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`);
        }
        
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
    }
}
