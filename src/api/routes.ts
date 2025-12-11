interface userData {
  nome: string
  email: string
  senha: string
}

export const postData = async (userData: userData) => {
    try {
        const response = await fetch('http://localhost:8081/api/usuarios', {
            method: 'POST', // Método HTTP
            headers: {
                // Informa o backend que estamos enviando dados JSON
                'Content-Type': 'application/json',
            },
            // Converte o objeto JavaScript em uma string JSON para envio
            body: JSON.stringify(userData), 
        });

        if (!response.ok) {
            throw new Error(`Erro ao salvar dados: ${response.status}`);
        }

        const result = await response.json(); // Se o backend retornar um objeto JSON
        console.log("Usuário criado:", result);
    } catch (error) {
        console.error("Erro no POST:", error);
    }
};