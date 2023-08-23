import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavBar';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav">
      {isMobile ? <MobileMenu /> : <DesktopNavbar />}
    </nav>
  );
}

export default Navigation;
