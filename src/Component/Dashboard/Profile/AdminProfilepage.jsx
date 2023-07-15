import React from 'react';
import AdminRoles from './AdminRoles';
import AdminOngoingProjects from './AdminOngoingProject';

const AdminProfilePage = () => {
  const adminProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Admin',
    joinedDate: 'January 1, 2023',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150',
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2 className="card-title">Admin Profile</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="img-fluid rounded-circle" src={adminProfile.avatar} alt="Admin Avatar" />
            </div>
            <div className="col-md-9">
              <h3>{adminProfile.name}</h3>
              <p>Email: {adminProfile.email}</p>
              <p>Role: {adminProfile.role}</p>
              <p>Joined: {adminProfile.joinedDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AdminRoles/>
        <AdminOngoingProjects/>
      </div>
    </div>
  );
};

export default AdminProfilePage;
