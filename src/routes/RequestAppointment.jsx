import React, { useState } from 'react';
import DiseaseForm from './DiseaseForm';
import DiseaseDetails from './DiseaseDetails';
import './RequestAppointment.css';

function RequestAppointment() {
  const [diseaseType, setDiseaseType] = useState(null);

  const handleSetDisease = (disease) => {
    setDiseaseType(disease);
  };

  return (
    <div className="App">
      <h1>حاجز جلسة</h1>
      {!diseaseType ? (
        <DiseaseForm onSetDisease={handleSetDisease} />
      ) : (
        <DiseaseDetails diseaseType={diseaseType} />
      )}
    </div>
  );
}

export default RequestAppointment;