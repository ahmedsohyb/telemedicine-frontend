import React from 'react';

function DiseaseDetails({ diseaseType }) {
  return (
    <div>
      <h2>نوع المرض الذي تم إدخاله:</h2>
      <p><strong>{diseaseType}</strong></p>
    </div>
  );
}

export default DiseaseDetails;