import React, { useState } from 'react';
import LogoLink from './Logolink';
import DesktopNavLinks from './DesktopNavLinks';
import MobileDrawer from './Mobiledrawer';
import MobileMenuButton from './Mobilemenubutton';



export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

      return (
        <>
          <div className="hidden relative py-0 lg:flex flex-col justify-center bg-primary-500 px-10 border-b-60 border-blue-900" >
            <LogoLink />
            <DesktopNavLinks />
          </div>
          <div className="lg:hidden relative flex flex-row my-4 px-15 bg-primary mb-0 mt-0" >
            <LogoLink />
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );

}