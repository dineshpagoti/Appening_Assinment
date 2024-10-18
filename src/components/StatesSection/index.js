import React from 'react';
import './index.css';

const StatesSection = () => {
  return (
    <div className="states-section">
      <h2>Now Accepting Patients In The Following States</h2>
      <div className="states-list">
        <span>Arkansas</span>
        <span>Washington</span>
        <span>Oregon</span>
      </div>
    </div>
  );
};

export default StatesSection;
