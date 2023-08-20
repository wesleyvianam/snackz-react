import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('token'); // Obtém o token do local storage

  useEffect(() => {
    // Configura os cabeçalhos
    const headers = {
      Accept: 'application/json', // Define o cabeçalho Accept
      Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho Authorization
    };

    // Faz a solicitação GET
    axios.get('http://localhost:8000/api/teste', { headers })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  }, [token]);

  return (
    <div>
      <h1>Dados da API</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;