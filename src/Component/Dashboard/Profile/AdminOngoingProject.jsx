import React from 'react';

const AdminOngoingProjects = () => {
  const adminProjects = [
    { title: 'Project A', status: 'In Progress' },
    { title: 'Project B', status: 'In Progress' },
    { title: 'Project C', status: 'In Progress' },
    { title: 'Project D', status: 'Completed' },
    { title: 'Project E', status: 'In Progress' },
  ];

  return (
    <div className="container">
      <h2 className="text-center mt-4">Ongoing Projects</h2>
      <div className="row mt-4">
        {adminProjects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div
              className={`card mb-4 ${
                project.status === 'In Progress' ? 'bg-primary' : 'bg-success'
              } text-white`}
            >
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">Status: {project.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOngoingProjects;
