import React, { useState } from 'react';
import './PatientRegistration.css'

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    address: '',
    nationalId: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // يمكنك هنا إضافة منطق لإرسال البيانات إلى الخادم أو قاعدة البيانات
  };

  return (
    <div>
      <h1>إنشاء حساب جديد للمريض</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>اسم المستخدم:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>الاسم رباعى:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>الجنس:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">اختر الجنس</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
        <div>
          <label>تاريخ الميلاد:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>العنوان:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>الرقم القومي:</label>
          <input
            type="text"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>رقم التليفون:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>كلمة السر:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">إنشاء حساب</button>
      </form>
    </div>
  );
};

export default PatientRegistration;