import React, { useState, useEffect } from 'react';

const ApproveAppointments = () => {
  const [pendingBookings, setPendingBookings] = useState([]);
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'دكتور أحمد', specialty: 'أمراض القلب' },
    { id: 2, name: 'دكتور محمد', specialty: 'جراحة العظام' },
  ]);

  // قائمة التخصصات
  const specialties = [
    'أمراض القلب',
    'جراحة العظام',
    'طب الأطفال',
    'الأمراض الجلدية',
    'طب الأعصاب',
  ];

  // بيانات وهمية لطلبات الحجز المعلقة
  useEffect(() => {
    const fakePendingBookings = [
      {
        id: 1,
        diagnosis: 'أعاني من آلام في الصدر',
        specialty: '',
        date: '',
        time: '',
        doctor: null,
        status: 'pending',
      },
      {
        id: 2,
        diagnosis: 'أعاني من آلام في الظهر',
        specialty: '',
        date: '',
        time: '',
        doctor: null,
        status: 'pending',
      },
    ];
    setPendingBookings(fakePendingBookings);
  }, []);

  // تحديث تفاصيل الحجز
  const updateBooking = (bookingId, field, value) => {
    setPendingBookings((prev) =>
      prev.map((booking) =>
        booking.id === bookingId ? { ...booking, [field]: value } : booking
      )
    );
  };

  // تأكيد الحجز
  const confirmBooking = (bookingId) => {
    setPendingBookings((prev) =>
      prev.map((booking) =>
        booking.id === bookingId ? { ...booking, status: 'confirmed' } : booking
      )
    );
    alert('تم تأكيد الحجز بنجاح!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>طلبات الحجز المعلقة</h1>
      <div style={styles.bookingList}>
        {pendingBookings.map((booking) => (
          <div key={booking.id} style={styles.bookingCard}>
            <h3 style={styles.diagnosisTitle}>تشخيص المريض:</h3>
            <p style={styles.diagnosisText}>{booking.diagnosis}</p>

            <div style={styles.formGroup}>
              <label style={styles.label}>التخصص:</label>
              <select
                value={booking.specialty}
                onChange={(e) =>
                  updateBooking(booking.id, 'specialty', e.target.value)
                }
                style={styles.select}
              >
                <option value="">اختر التخصص</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>تاريخ الجلسة:</label>
              <input
                type="date"
                value={booking.date}
                onChange={(e) =>
                  updateBooking(booking.id, 'date', e.target.value)
                }
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>وقت الجلسة:</label>
              <input
                type="time"
                value={booking.time}
                onChange={(e) =>
                  updateBooking(booking.id, 'time', e.target.value)
                }
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>اختر الدكتور:</label>
              <select
                value={booking.doctor || ''}
                onChange={(e) =>
                  updateBooking(booking.id, 'doctor', e.target.value)
                }
                style={styles.select}
              >
                <option value="">اختر الدكتور</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            {booking.status === 'pending' && (
              <button
                onClick={() => confirmBooking(booking.id)}
                style={styles.confirmButton}
              >
                تأكيد الحجز
              </button>
            )}

            {booking.status === 'confirmed' && (
              <p style={styles.confirmedText}>تم تأكيد الحجز</p>
            )}
          </div>
        ))}
      </div>
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
  bookingList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  bookingCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  diagnosisTitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  diagnosisText: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  confirmButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  confirmedText: {
    color: 'green',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default ApproveAppointments