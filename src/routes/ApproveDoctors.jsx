import React, { useState, useEffect } from 'react';

const ApproveDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // جلب الأطباء غير المعتمدين
  useEffect(() => {
    const fetchUnapprovedDoctors = async () => {
      try {
        const response = await fetch('/admin/doctors/unapproved', {
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
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        setError('حدث خطأ أثناء جلب البيانات');
        setLoading(false);
      }
    };

    fetchUnapprovedDoctors();
  }, []);

  // اعتماد طبيب
  const handleApprove = async (doctorId) => {
    try {
      const response = await fetch(`/admin/doctors/${doctorId}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('فشل في اعتماد الطبيب');
      }

      // تحديث القائمة بعد الاعتماد
      setDoctors(doctors.filter((doctor) => doctor.id !== doctorId));
    } catch (err) {
      setError('حدث خطأ أثناء الاعتماد');
    }
  };

  // رفض طبيب
  const handleReject = async (doctorId) => {
    try {
      const response = await fetch(`/admin/doctors/${doctorId}/reject`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('فشل في رفض الطبيب');
      }

      // تحديث القائمة بعد الرفض
      setDoctors(doctors.filter((doctor) => doctor.id !== doctorId));
    } catch (err) {
      setError('حدث خطأ أثناء الرفض');
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
      <h1 style={styles.title}>إدارة الأطباء غير المعتمدين</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>اسم الطبيب</th>
            <th style={styles.th}>التخصص</th>
            <th style={styles.th}>تفاصيل السيرة الذاتية</th>
            <th style={styles.th}>تفاصيل Syndicate ID</th>
            <th style={styles.th}>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} style={styles.tr}>
              <td style={styles.td}>{doctor.name}</td>
              <td style={styles.td}>{doctor.specialization}</td>
              <td style={styles.td}>
                <a href={doctor.cvUrl} target="_blank" rel="noopener noreferrer">
                  عرض السيرة الذاتية
                </a>
              </td>
              <td style={styles.td}>
                <a href={doctor.syndicateIdUrl} target="_blank" rel="noopener noreferrer">
                  عرض Syndicate ID
                </a>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.approveButton}
                  onClick={() => handleApprove(doctor.id)}
                >
                  اعتماد
                </button>
                <button
                  style={styles.rejectButton}
                  onClick={() => handleReject(doctor.id)}
                >
                  رفض
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto',
  },
  th: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
  },
  approveButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  rejectButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
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

export default ApproveDoctors