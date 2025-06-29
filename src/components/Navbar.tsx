import { useEffect, useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='Nav' className='navigation'>
      <article className='nav-bar'>
        <div
          className='container-nav'
          style={{
            backgroundColor: scrolled ? '#f6f6f6' : 'transparent',
            transition: 'all 300ms ease-in-out',
          }}
        >
          <a
            href='/'
            aria-current='page'
            className='logo-link w-inline-block w--current'
          >
            <h2 className='display-xl'>Luísa Lino</h2>
          </a>
          <div className='nav-content'>
            <div className='nav-link-item'>
              <div className='nav-link-wrapper _1'>
                <a href='/' aria-current='page' className='nav-link w--current'>
                  Home
                </a>
              </div>
            </div>
            <div className='nav-link-item'>
              <div className='nav-link-wrapper _2'>
                <a href='/projects' className='nav-link'>
                  Projects
                </a>
              </div>
            </div>
            <div className='nav-link-item'>
              <div className='nav-link-wrapper _3'>
                <a href='/about-me' className='nav-link'>
                  About Me
                </a>
              </div>
            </div>
            <div className='nav-link-item'>
              <div className='nav-link-wrapper _4'>
                <a href='/contacts' className='nav-link'>
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
