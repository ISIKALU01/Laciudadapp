import React, { useState } from 'react';
import LogoLink from '../home/LogoLink';
import DesktopNavLinks from '../home/DesktopNavLinks';
import MobileDrawer from '../home/MobileDrawer';
import MobileMenuButton from '../home/MobileMenuButton';



export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

 

      return (
        <>
          <div className="hidden absolute top-0 left-0 w-full bg-secondary bg-opacity-50 py-0 lg:flex flex-col 
          justify-center">
            <LogoLink />
            <DesktopNavLinks />
          </div>
          <div className="lg:hidden absolute top-0 left-0 w-full bg-opacity-50 flex flex-row my-4 px-15 
          bg-secondary mb-0 mt-0 z-20">
            <LogoLink />
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );

}