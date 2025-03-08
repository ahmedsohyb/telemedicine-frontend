import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Docterregister = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    nationalId: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    specialization: '',
    level: '',
    syndicateIdFile: null,
    cvFile: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // تحديث حالة النموذج عند تغيير الحقول
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // تحديث حالة الملفات عند اختيارها
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // يتم تخزين الملف الأول فقط
    });
  };

  // إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    // إنشاء FormData لإرسال البيانات والملفات
    const data = new FormData();
    data.append('username', formData.username);
    data.append('password', formData.password);
    data.append('name', formData.name);
    data.append('nationalId', formData.nationalId);
    data.append('phone', formData.phone);
    data.append('dateOfBirth', formData.dateOfBirth);
    data.append('gender', formData.gender);
    data.append('address', formData.address);
    data.append('specialization', formData.specialization);
    data.append('level', formData.level);
    data.append('syndicateIdFile', formData.syndicateIdFile);
    data.append('cvFile', formData.cvFile);

    try {
      const response = await fetch('/signup/doctor', {
        method: 'POST',
        body: data, // يتم إرسال FormData مباشرة
      });

      if (!response.ok) {
        throw new Error('فشل في التسجيل');
      }

      const result = await response.json();
      setMessage('تم التسجيل بنجاح، في انتظار الموافقة.');
      setTimeout(() => {
        navigate('/login'); // إعادة التوجيه إلى صفحة تسجيل الدخول بعد 3 ثواني
      }, 3000);
    } catch (err) {
      setError('حدث خطأ أثناء التسجيل: ' + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>تسجيل طبيب جديد</h1>
      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>اسم المستخدم</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>كلمة المرور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>الاسم الكامل</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="nationalId" style={styles.label}>الهوية الوطنية</label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>رقم الهاتف</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="dateOfBirth" style={styles.label}>تاريخ الميلاد</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="gender" style={styles.label}>الجنس</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            style={styles.input}
          >
            <option value="">اختر الجنس</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="address" style={styles.label}>العنوان</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="specialization" style={styles.label}>التخصص</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="level" style={styles.label}>المستوى</label>
          <input
            type="text"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="syndicateIdFile" style={styles.label}>رفع Syndicate ID</label>
          <input
            type="file"
            id="syndicateIdFile"
            name="syndicateIdFile"
            onChange={handleFileChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="cvFile" style={styles.label}>رفع السيرة الذاتية (CV)</label>
          <input
            type="file"
            id="cvFile"
            name="cvFile"
            onChange={handleFileChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>تسجيل</button>
      </form>
    </div>
  );
};

// تصميم الصفحة
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '14px',
    color: '#555',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
};

export default Docterregister