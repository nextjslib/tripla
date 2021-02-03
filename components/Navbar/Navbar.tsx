import { FC, useState } from 'react';
import { useSession } from 'next-auth/client';
import { Spin } from 'antd';

import NavbarContainer from './molecules/NavbarContainer';
import NavbarLogo from './molecules/NavbarLogo';
import NavbarItems from './molecules/NavbarItems';
import NavbarSignInButton from './molecules/NavbarSignInButton';
import NavbarHamburgerButton from './molecules/NavbarHamburgerButton';
import MobileNavbar from './molecules/MobileNavbar';
import NavbarProfile from './molecules/NavbarProfile';

const Navbar: FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [session, loading] = useSession();

  return (
    <>
      <NavbarContainer>
        {/* Navbar logo that shows on all screens */}
        <NavbarLogo />
        {/* Navbar items that show on medium and large screens */}
        <NavbarItems />
        {/* Sign in button or User icon that shows on medium and large screens */}
        {loading ? <Spin /> : session ? <NavbarProfile /> : <NavbarSignInButton />}
        {/* Hamburger button to open navbar on mobile screens */}
        <NavbarHamburgerButton onClick={() => setShowMobileNavbar(true)} />
      </NavbarContainer>
      {/* Navbar items that show on mobile screens */}
      {showMobileNavbar && <MobileNavbar closeNavbar={() => setShowMobileNavbar(false)} />}
    </>
  );
};

export default Navbar;
