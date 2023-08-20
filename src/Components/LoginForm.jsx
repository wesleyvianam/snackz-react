import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/teste', {
        'Accept': 'application/json',
        'Authorization': "Bearer 10|GOkrtPXBxvrZ2F3akERC8qqbnRKFQrBcxYmXLy63"
      });

      console.log(response);

      if (response.status === 200) {
        // Login bem-sucedido, armazenar o token no local storage
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      // Lidar com erros de login aqui
      console.error('Erro no login:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
