import React from 'react';

const HomeComponent: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to AzDeskPro</h1>
                <p className="lead">Your one-stop solution for customer support and engagement.</p>
                <hr className="my-4" />
                <p>Sign up now to start improving your customer support experience.</p>
                <a className="btn btn-primary btn-lg" href="/register" role="button">Get Started</a>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <h2>Feature 1</h2>
                    <p>Describe the first feature of your SaaS product here. Explain how it can benefit the user.</p>
                </div>
                <div className="col-md-4">
                    <h2>Feature 2</h2>
                    <p>Describe the second feature of your SaaS product here. Explain how it can benefit the user.</p>
                </div>
                <div className="col-md-4">
                    <h2>Feature 3</h2>
                    <p>Describe the third feature of your SaaS product here. Explain how it can benefit the user.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;