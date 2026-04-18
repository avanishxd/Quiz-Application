import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../constants';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('${API_BASE_URL}/auth/login', { username, password });

      const { role } = response.data;

      onLogin(role); 

      setError('');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{alignItems:'center', justifyContent:'center'}}>
      <nav style={styles.navbar} className='navbar'>
      <div style={styles.logo}>Techincal Quiz</div>
      </nav>
    <form onSubmit={handleSubmit} style={{ maxWidth: '350px', margin: 'auto', marginTop: '100px', alignItems:'center', }}>
      <h2 style={{textAlign:'center'}}>Login</h2><br/>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}<br/><br/>
      <button type="submit" style={{ width: '106%', padding: '10px', backgroundColor: '#842A3B', color: '#fff', border: 'none', textAlign: 'center', alignSelf:'center', alignItems:'center' }}>
        Login
      </button>
    </form>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#842A3B',
    padding: '30px 50px',
    color: 'white',
  },
  logo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2rem',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  link: {
    textColor: '#842A3B',
    alignItems: 'center',
    color: '#842A3B',
    textDecoration: 'none',
    fontSize: '1rem',
    border: '0.15rem solid black',
    padding: '14px',
    borderRadius: '50px',
    marginRight: '10px',
    backgroundColor: '#ffc096ff',
    fontWeight: 'bold',
  },
  button: {
    textColor: '#842A3B',
    color: '#842A3B',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
    border: '0.15rem solid black',
    padding: '14px',
    backgroundColor: '#ffc096ff',
    borderRadius: '50px',
    fontWeight: 'bold',
  },
};


export default Login;
