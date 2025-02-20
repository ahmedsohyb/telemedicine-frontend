import React, { useState, useEffect } from 'react';

const ApproveDoctors = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  // بيانات وهمية لطلبات الأطباء المعلقة
  useEffect(() => {
    const fakePendingDoctors = [
      {
        id: 1,
        name: 'دكتور أحمد',
        specialty: 'أمراض القلب',
        status: 'pending',
      },
      {
        id: 2,
        name: 'دكتور محمد',
        specialty: 'جراحة العظام',
        status: 'pending',
      },
    ];
    setPendingDoctors(fakePendingDoctors);
  }, []);

  // قبول أو رفض طلب الدكتور
  const handleRequest = (id, action) => {
    setPendingDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === id ? { ...doctor, status: action } : doctor
      )
    );
    alert(`تم ${action === 'approved' ? 'قبول' : 'رفض'} الطلب بنجاح!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>طلبات الأطباء المعلقة</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {pendingDoctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              width: '300px',
            }}
          >
            <h3>{doctor.name}</h3>
            <p>التخصص: {doctor.specialty}</p>
            {doctor.status === 'pending' && (
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() => handleRequest(doctor.id, 'approved')}
                  style={{
                    backgroundColor: 'green',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                >
                  قبول
                </button>
                <button
                  onClick={() => handleRequest(doctor.id, 'rejected')}
                  style={{
                    backgroundColor: 'red',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                >
                  رفض
                </button>
              </div>
            )}
            {doctor.status !== 'pending' && (
              <p
                style={{
                  color: doctor.status === 'approved' ? 'green' : 'red',
                }}
              >
                {doctor.status === 'approved' ? 'تم القبول' : 'تم الرفض'}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveDoctors