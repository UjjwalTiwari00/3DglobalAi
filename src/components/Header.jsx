import React from 'react';

const Header = ({ className }) => {
  return (
    <header className={`bg-white bg-opacity-10 text-black py-4 px-6 shadow-lg rounded-3xl ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="https://3dglobalit.com/wp-content/uploads/2021/12/Untitled.png"
            alt="3DGlobal Logo"
            className="h-12 inline-block"
          />
        </div>

        {/* Navigation CENTERED */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/" className="hover:text-blue-500 transition-colors duration-200 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-blue-500 transition-colors duration-200 font-medium">
                News
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-blue-500 transition-colors duration-200 font-medium">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition-colors duration-200 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-black ml-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
