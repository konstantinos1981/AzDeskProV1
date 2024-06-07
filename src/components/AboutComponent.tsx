import React from 'react';

const AboutComponent: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1>About AzDeskPro</h1>
                    <p className="lead">AzDeskPro is a powerful SaaS platform designed to help you manage your customer support and engagement efficiently.</p>
                    <p>Our mission is to provide businesses with the tools they need to deliver exceptional customer service and improve their overall customer experience. We believe that good customer support is the cornerstone of any successful business, and we strive to make it easier for you to achieve that.</p>
                    <h3>Our Story</h3>
                    <p>Founded in [Year], AzDeskPro was born out of a need for better customer support solutions. Our founders, [Founders' Names], saw a gap in the market for a comprehensive, user-friendly platform that could help businesses manage their customer interactions more effectively. Since then, we have grown into a trusted partner for businesses of all sizes, providing them with the tools they need to succeed.</p>
                    <h3>Our Team</h3>
                    <p>Our team is made up of passionate professionals dedicated to helping you succeed. From our customer support agents to our developers, everyone at AzDeskPro is committed to delivering the best possible experience for our users.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;