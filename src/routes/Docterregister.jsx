import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    nationalId: '',
    phone: '',
    birthDate: '',
    syndicateNumber: '',
    gender: '',
    address: '',
    specialization: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // الحصول على الملف المختار
    setFormData({
      ...formData,
      syndicateImage: file, // تخزين الصورة في الحالة
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    console.log('بيانات الطبيب:', formData);
    alert('تم إنشاء الحساب بنجاح!');
    navigate('/login/doctor'); // الانتقال إلى صفحة تسجيل الدخول للطبيب
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>إنشاء حساب طبيب</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>الاسم الكامل:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>اسم المستخدم:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>كلمة المرور:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>الرقم القومي:</label>
          <input
            type="text"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>رقم الهاتف:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div> 


        <div style={{ marginBottom: '15px' }}>
          <label>التخصص:</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

              
         

        
        <div style={{ marginBottom: '15px' }}>
          <label>العنوان:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>



        <div style={{ marginBottom: '15px' }}>
          <label>تاريخ الميلاد:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>





        <div style={{ marginBottom: '15px' }}>
          <label>الجنس:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">اختر الجنس</option>
            <option value="ذكر">ذكر</option>
            <option value="أنثى">أنثى</option>
          </select>
        </div>






        <div style={{ marginBottom: '15px' }}>
          <label>صورة كارنيه النقابة:</label>
          <input
            type="file"
            name="syndicateImage"
            onChange={handleImageChange}
            accept="image/*" // يقبل فقط ملفات الصور
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>




        

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          إنشاء حساب
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
      </p>
    </div>
  );
};

export default DoctorRegister;