import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { useLocation } from "react-router";
import { NAV_LINKS } from "../constants";
import Button from "../components/Button";
import { getActiveNavLink } from '../utils/helper';
function DashboardLayout({children}) {
    const { pathname } = useLocation();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleMenu = () => {
        setShowMobileMenu((showMobileMenu) => !showMobileMenu);
    };
    useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);


    return (
        <div className="lg:flex w-screen min-h-screen h-full bg-gray-100">
           <div id="desktop-menu" className="hidden lg:flex bg-white px-4 2xl:px-12 py-20 flex-col items-center justify-between">
                <div className="space-y-20 flex flex-col items-center">
                 <Logo />
                 <Navbar links={getActiveNavLink(NAV_LINKS, pathname)}/>
                </div>
                <div className="text-primary cursor-pointer">
                    Sign Out
                </div>
           </div>
           {showMobileMenu && (
               <div id="mobile-menu lg:hidden" className="  fixed bg-white z-10 w-screen h-screen flex-col items-center p-20 justify-center text-center space-y-20">
                    <Navbar links={getActiveNavLink(NAV_LINKS, pathname)}/>
                    <div className="text-primary cursor-pointer">
                        Sign Out
                    </div>
                </div>
           )}
           
           <div className="lg:hidden z-20 fixed w-full px-5 py-2 bg-white flex items-center justify-between">
                <Logo />
                <div>
                    <Button
                        value="Menu"
                        variant="secondary"
                        icon="menu"
                        action={handleMenu}
                    />
                </div>
           </div>
            <section className="bg-gray-100 w-full px-5 lg:px-20 py-10 pt-24 lg:pt-10 flex items-start justify-start">
            
                {children}
            </section>
        </div>
    )
}

export default DashboardLayout
