import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Subscribe to Our Newsletter</h1>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                aria-label="Your Email"
                                aria-describedby="button-addon2"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                            <button className="btn btn-primary" type="submit" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;
