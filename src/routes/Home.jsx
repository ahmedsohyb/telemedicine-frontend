import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8', 
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>
        Welcome to Telemedicine
      </h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/login" style={linkStyle}>تسجيل الدخول</Link>
        <Link to="/register/doctor" style={linkStyle}>انشاء حساب كطبيب</Link>
      </nav>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '1.2rem',
  transition: '0.3s',
  width: '200px',
  textAlign: 'center'
};

export default Home;

