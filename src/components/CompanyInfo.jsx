import React from 'react';
import './CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <div className="container">
      <div className="heading">
      <img src="https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-2p7fz86w.png" alt="Atlassian" />

        <h1>Atlassian</h1>
      </div>
      <div className="info-row">
        <div className="info-column">
          <div className="info-item">
            <div className="info-label">Company size</div>
            <div className="info-label">Type</div>
          </div>
          <div className="info-item">
            <div className="info-value">1k - 2k Employees</div>
            <div className="info-value">Private</div>
          </div>
        </div>
      </div>

      <div className="info-row">
        <div className="info-column">
          <div className="info-item">
            <div className="info-label">Sector</div>
            <div className="info-label">Funding</div>
          </div>
          <div className="info-item">
            <div className="info-value">Information Technology, Infrastructure</div>
            <div className="info-value">Bootstrapped</div>
          </div>
        </div>
      </div>

      <div className="info-row">
        <div className="info-column">
          <div className="info-item">
            <div className="info-label">Founded In</div>
            <div className="info-label">Founded By</div>
          </div>
          <div className="info-item">
            <div className="info-value">2019</div>
            <div className="info-value">Scott Farquhar, Mike Cannon-Brookes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
