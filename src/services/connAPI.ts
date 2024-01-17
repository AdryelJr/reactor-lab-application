// const apiUrl = 'https://api-reactor-lab-off.vercel.app';
const apiUrl = 'http://localhost:3000';

export const createUser = async (userData: { name: string, email: string, password: string }) => {
    try {
        const response = await fetch(`${apiUrl}/auth/signup`, {
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