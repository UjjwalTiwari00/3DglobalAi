import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="text-white mx-2">Facebook</a>
                    <a href="#" className="text-white mx-2">Twitter</a>
                    <a href="#" className="text-white mx-2">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;