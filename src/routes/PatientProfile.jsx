import React, { useState, useEffect } from 'react';

const PatientProfile = () => {
  const [appointment, setAppointment] = useState(null);

  // بيانات وهمية لموعد الجلسة
  useEffect(() => {
    const fakeAppointment = {
      id: 1,
      doctorName: 'دكتور أحمد',
      date: '2023-10-15',
      time: '10:00',
      specialty: 'أمراض القلب',
    };
    setAppointment(fakeAppointment);
  }, []);

  // بدء مكالمة فيديو
  const startVideoMeeting = () => {
    if (appointment) {
      const meetingLink = `https://meet.google.com/new`; // يمكنك تغيير الرابط إلى Zoom أو أي خدمة أخرى
      window.open(meetingLink, '_blank'); // فتح الرابط في نافذة جديدة
      alert(`بدء مكالمة فيديو مع الدكتور: ${appointment.doctorName}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>لوحة تحكم المريض</h1>
      {appointment ? (
        <div style={styles.appointmentCard}>
          <h2 style={styles.subHeader}>موعد الجلسة</h2>
          <p style={styles.details}>الدكتور: {appointment.doctorName}</p>
          <p style={styles.details}>التخصص: {appointment.specialty}</p>
          <p style={styles.details}>التاريخ: {appointment.date}</p>
          <p style={styles.details}>الوقت: {appointment.time}</p>
          <button onClick={startVideoMeeting} style={styles.meetingButton}>
            بدء مكالمة فيديو
          </button>
        </div>
      ) : (
        <p style={styles.noAppointment}>لا يوجد موعد محدد حاليًا.</p>
      )}
    </div>
  );
};

// التنسيقات
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  subHeader: {
    color: '#555',
    marginBottom: '20px',
  },
  appointmentCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  details: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '10px',
  },
  meetingButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  noAppointment: {
    textAlign: 'center',
    color: '#777',
  },
};

export default PatientProfile