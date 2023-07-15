import React from 'react';
import 'animate.css';

const AdminRoles = () => {
  const adminRoles = [
    { role: 'Fundraising Management', achievements: 250 },
    { role: 'Donor Relations', achievements: 150 },
    { role: 'Volunteer Coordination', achievements: 300 },
    { role: 'Event Planning', achievements: 50 },
    { role: 'Financial Management', achievements: 100 },
    { role: 'Program Development', achievements: 200 },
  ];

  return (
    <div className="container">
      <h2 className="text-center mt-4">Admin Roles in NGO</h2>
      <div className="row mt-4">
        {adminRoles.map((adminRole, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card pb-5 pr-5 h-100 animate__animated animate__fadeIn">
              <div className="card-body">
                <h5 className="card-title">{adminRole.role}</h5>
                <p className="card-text">Achievements: {adminRole.achievements}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRoles;
