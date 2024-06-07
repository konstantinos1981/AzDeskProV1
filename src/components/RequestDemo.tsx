import React, { useState } from 'react';

const RequestDemo: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Request a Demo</h1>
            <p className="lead text-center">Fill out the form below to request a demo of AzDeskPro</p>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;