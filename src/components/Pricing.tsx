import React from 'react';

const Pricing: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Pricing Plans</h1>
            <p className="lead text-center">Choose the plan that fits your needs</p>
            <div className="row">
                {/* Free Plan */}
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">Free Plan</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Monitor 1 email address</li>
                                <li>1 user access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                </div>
                {/* Basic Plan */}
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">Basic</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$10 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Monitor 1 email address</li>
                                <li>10 users access</li>
                                <li>1 admin account</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
                {/* Enterprise-Simple Plan */}
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">Enterprise-Simple</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Monitor up to 3 email addresses</li>
                                <li>20 users access</li>
                                <li>3 admin accounts</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
                {/* Enterprise-Gold Plan */}
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">Enterprise-Gold</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$100 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Monitor up to 10 email addresses</li>
                                <li>50 users access</li>
                                <li>6 admin accounts</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline-secondary me-2">Request a Quote</button>
                <button className="btn btn-outline-secondary">Request a Demo</button>
            </div>
        </div>
    );
};

export default Pricing;