import React from 'react';
import { Link } from 'react-router';

const AdminDashboard = () => {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '30px' }}>
        لوحة تحكم الأدمن
      </h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Link to="/admin/approve-doctors" style={{
          textDecoration: 'none',
          fontSize: '1.5rem',
          padding: '12px 24px',
          borderRadius: '8px',
          transition: '0.3s',
          width: '250px',
          textAlign: 'center',
          backgroundColor: '#007bff',
          color: 'white'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
          قبول طلبات الأطباء
        </Link>
        <Link to="/admin/approve-appointments" style={{
          textDecoration: 'none',
          fontSize: '1.5rem',
          padding: '12px 24px',
          borderRadius: '8px',
          transition: '0.3s',
          width: '250px',
          textAlign: 'center',
          backgroundColor: '#28a745',
          color: 'white'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}>
          إدارة حجوزات المرضى
        </Link>
      </nav>
    </div>
  );
};

export default AdminDashboard;

