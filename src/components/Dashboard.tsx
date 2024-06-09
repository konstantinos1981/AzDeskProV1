import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login first!');
                navigate('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:8000/api/dashboard/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch dashboard data');
                }

                const data = await response.json();
                setDashboardData(data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setError('Failed to load dashboard data');
            }
        };

        fetchDashboardData();
    }, [navigate]);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!dashboardData) {
        return <div>Loading...</div>;
    }

    const userInfo = dashboardData.user;

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
                            {userInfo ? (
                                <>
                                    <h5 className="card-title">{userInfo.username}</h5>
                                    <p className="card-text">Email: {userInfo.email}</p>
                                    <a href="#" className="btn btn-primary">Edit Profile</a>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
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