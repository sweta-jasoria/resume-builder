import React from 'react';
import { Menubar } from 'primereact/menubar';
import navbarLinks from './navbarLinks';

const Navbar: React.FC = () => {
    const items = navbarLinks;

    const start = <div className='ml-4 logo'>
                    <span className='logo-text'>CR</span>
                  </div>;

    return (
        <div className='shadow-4 pt-0 pb-0'>
            <Menubar model={items} start={start} className='border-none bg-white mr-4' />
        </div>
    );
}

export default Navbar;