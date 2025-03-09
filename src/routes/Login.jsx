import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // تحديث حالة النموذج عند تغيير الحقول
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // التحقق من الصحة
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'اسم المستخدم مطلوب';
    }
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // إذا لم تكن هناك أخطاء، يتم إرجاع true
  };

  // إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // إذا كانت هناك أخطاء، لا يتم إرسال النموذج
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('فشل تسجيل الدخول');
      }

      const data = await response.json();
      const { token, role } = data;

      // تخزين الـ JWT في localStorage
      localStorage.setItem('token', token);

      // التوجيه بناءً على دور المستخدم
      if (role === 'Admin') {
        navigate('/admin/dashboard');
      } else if (role === 'Doctor') {
        navigate('/doctor/dashboard');
      }
    } catch (err) {
      setLoginError('بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>تسجيل الدخول</h2>
        {loginError && <p style={styles.error}>{loginError}</p>}
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>اسم المستخدم</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>كلمة المرور</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit" style={styles.button}>تسجيل الدخول</button>
        <a href="/forgot-password" style={styles.link}>نسيت كلمة المرور؟</a>
      </form>
    </div>
  );
};

// تصميم الصفحة
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '10px',
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default Login
