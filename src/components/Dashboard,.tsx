import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            User Info
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Email: johndoe@example.com</p>
                            <p className="card-text">Plan: Basic</p>
                            <a href="#" className="btn btn-primary">Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-header">
                            Notifications
                        </div>
                        <div className="card-body">
                            <p className="card-text">You have no new notifications.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Recent Activity
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Logged in at 10:00 AM</li>
                                <li className="list-group-item">Checked emails</li>
                                <li className="list-group-item">Updated profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;