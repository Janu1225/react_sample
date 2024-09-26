import React from 'react';


function Header() {
  return (
    <header className="header h-16 md:h-24">
    <img src="logo.png" alt="Bimini Vision" className="logo" />
    <nav>
        <ul className='flex pl-20'>
            <li className='pl-5'><a href="/">Home</a></li>
            <li className='pl-5'><a href="/about">About</a></li>
            <li className='pl-5'><a href="/services">Services</a></li>
            <li className='pl-5'><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
  );
}

export default Header;