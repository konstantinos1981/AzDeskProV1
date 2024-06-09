import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface LoginProps {
    csrfToken: string; // Define the CSRF token prop
}



const Login: React.FC<LoginProps> = ({ csrfToken }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken , // Pass CSRF token in the headers
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
