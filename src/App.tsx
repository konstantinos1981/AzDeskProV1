import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Pricing from './components/Pricing.tsx';
import Login from './components/Login';
import Register from './components/Register';
import FAQs from './components/FAQs';
import RequestDemo from './components/RequestDemo';
import Newsletter from './components/Newsletter';
import SendEmail from './components/SendEmail';
import Careers from './components/Careers.tsx';
import Dashboard from './components/Dashboard,.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <NavbarComponent />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/about" element={<AboutComponent />} />
                    <Route path="/contact" element={<ContactComponent />} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/request-demo" element={<RequestDemo />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/careers" element={<Careers />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
