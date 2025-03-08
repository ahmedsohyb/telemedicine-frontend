import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalDoctors: 0,
    pendingApprovals: 0,
    upcomingAppointments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // التحقق من أن المستخدم مسجل دخوله كـ Admin
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // إذا لم يكن هناك token، يتم توجيه المستخدم إلى صفحة تسجيل الدخول
    } else {
      fetchStats(); // جلب الإحصائيات
    }
  }, [navigate]);

  // جلب الإحصائيات من الخادم
  const fetchStats = async () => {
    try {
      const response = await fetch('/admin/stats', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('فشل في جلب البيانات');
      }

      const data = await response.json();
      setStats({
        totalDoctors: data.totalDoctors,
        pendingApprovals: data.pendingApprovals,
        upcomingAppointments: data.upcomingAppointments,
      });
      setLoading(false);
    } catch (err) {
      setError('حدث خطأ أثناء جلب البيانات');
      setLoading(false);
    }
  };

  // إذا كان التحميل قيد التحميل
  if (loading) {
    return <div style={styles.loading}>جاري التحميل...</div>;
  }

  // إذا كان هناك خطأ
  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>لوحة تحكم الإدارة</h1>
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h2 style={styles.statTitle}>إجمالي الأطباء</h2>
          <p style={styles.statValue}>{stats.totalDoctors}</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statTitle}>الطلبات المعلقة</h2>
          <p style={styles.statValue}>{stats.pendingApprovals}</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statTitle}>المواعيد القادمة</h2>
          <p style={styles.statValue}>{stats.upcomingAppointments}</p>
        </div>
      </div>
      <div style={styles.navigation}>
        <button
          style={styles.navButton}
          onClick={() => navigate('/admin/doctors')}
        >
          إدارة الأطباء
        </button>
        <button
          style={styles.navButton}
          onClick={() => navigate('/admin/approvals')}
        >
          الطلبات المعلقة
        </button>
        <button
          style={styles.navButton}
          onClick={() => navigate('/admin/appointments')}
        >
          المواعيد
        </button>
      </div>
    </div>
  );
};

// تصميم الصفحة
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  statCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '30%',
  },
  statTitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  statValue: {
    fontSize: '24px',
    color: '#007bff',
    fontWeight: 'bold',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  },
  error: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'red',
    marginTop: '20px',
  },
};

export default AdminDashboard

