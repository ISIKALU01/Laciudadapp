import React, { useState } from 'react';
import LogoLink from './LogoLink';
import DesktopNavLinks from './DesktopNavLinks';
import MobileDrawer from './MobileDrawer';
import MobileMenuButton from './MobileMenuButton';



export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

 

      return (
        <>
          <div className="hidden relative py-0 lg:flex flex-col justify-center bg-secondary border-b-60 border-blue-900" >
            <LogoLink />
            <DesktopNavLinks />
          </div>
          <div className="lg:hidden relative flex flex-row my-4 px-15 bg-secondary mb-0 mt-0" >
            <LogoLink />
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );

}