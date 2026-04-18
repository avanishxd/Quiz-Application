import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ userRole, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav style={styles.navbar} className='navbar'>
      <div style={styles.logo}>Techincal Quiz</div>
      <ul style={styles.navItems}>
        {userRole === 'USER' && (
          <>
            <li><Link to="/learning" className='nav-btn' style={styles.link}>Learning</Link></li>
            <li><Link to="/quiz" className='nav-btn' style={styles.link}>Take Quiz</Link></li>
          </>
        )}
        {/* {userRole === 'ADMIN' && (
          <>
            <li><Link to="/admin" style={styles.link}>Admin Dashboard</Link></li>
          </>
        )} */}
        <li><button onClick={handleLogout} className='nav-btn' style={styles.button}>Logout</button></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
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

export default Navbar;
