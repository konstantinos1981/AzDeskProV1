import React from 'react';

const Careers: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Careers</h1>
            <p className="lead text-center">Join our team and make an impact!</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Software Engineer</h5>
                            <p className="card-text">We are looking for passionate software engineers to join our development team. If you have experience with React, Node.js, and Django, apply now!</p>
                            <a href="#" className="btn btn-primary">Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">UI/UX Designer</h5>
                            <p className="card-text">Are you creative and detail-oriented? Join our design team and help create beautiful user interfaces. Experience with Adobe Creative Suite is a plus!</p>
                            <a href="#" className="btn btn-primary">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;