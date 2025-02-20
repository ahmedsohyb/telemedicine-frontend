import React, { useState } from 'react';

function DiseaseForm({ onSetDisease }) {
  const [diseaseType, setDiseaseType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (diseaseType.trim()) {
      onSetDisease(diseaseType);
    } else {
      alert('يرجى إدخال نوع المرض.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          أدخل نوع المرض:
          <input
            type="text"
            value={diseaseType}
            onChange={(e) => setDiseaseType(e.target.value)}
            placeholder="مثال: صداع"
          />
        </label>
      </div>
      <button type="submit">تأكيد</button>
    </form>
  );
}

export default DiseaseForm;