import { useEffect, useState } from 'react';
import api from '../api';
import { removeToken } from '../auth';

export default function Dashboard({ onLogout }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setDados(res.data))
      .catch(() => onLogout());
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {dados ? <pre>{JSON.stringify(dados, null, 2)}</pre> : <p>Carregando...</p>}
      <button onClick={() => { removeToken(); onLogout(); }}>Logout</button>
    </div>
  );
}
