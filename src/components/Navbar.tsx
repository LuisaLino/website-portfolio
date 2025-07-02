import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <section id='Nav' className='navigation relative'>
      <article className='nav-bar z-50'>
        <div
          className='container-nav'
          style={{
            backgroundColor: scrolled ? '#f6f6f6' : 'transparent',
            transition: 'all 300ms ease-in-out',
          }}
        >
          <div className='flex items-center justify-between w-full'>
            <a href='/' className='logo-link w-inline-block w--current'>
              <h2 className='display-xl'>Luísa Lino</h2>
            </a>

            {/* Burger Icon: visible only on mobile */}
            <button
              onClick={toggleMenu}
              className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 z-50'
              aria-label='Toggle Menu'
            >
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 rounded-xl bg-white z-40 px-12 py-8 transform transition-transform duration-500 ease-in-out ${
              menuOpen ? '-translate-y-0' : '-translate-y-80'
            } lg:hidden`}
          >
            <nav className='flex flex-col gap-4 py-4 text-right'>
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/about-me', label: 'About Me' },
                { path: '/contacts', label: 'Contacts' },
              ].map(({ path, label }) => (
                <a
                  key={path}
                  href={path}
                  className='text-2xl'
                  onClick={() => setMenuOpen(false)}
                >
                  <div className='border-b-gray-500 w-[120px] border-b-1 border-dashed pb-0.5'>
                    {label}
                  </div>
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Nav (hidden on mobile) */}
          <div className='hidden lg:flex gap-8 items-center'>
            <a
              key='Home'
              href='/'
              className='nav-link w-max'
              style={{
                fontWeight: pathname === '/' ? 500 : 400,
              }}
            >
              Home
            </a>
            {[
              { path: '/projects', label: 'Projects' },
              { path: '/about-me', label: 'About Me' },
              { path: '/contacts', label: 'Contacts' },
            ].map(({ path, label }) => (
              <a
                key={path}
                href={path}
                className='nav-link w-max'
                style={{
                  fontWeight:
                    pathname === path || pathname.includes(path) ? 500 : 400,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </article>
      <div
        className={`bg-[#00000096] z-40 h-screen w-screen absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          menuOpen ? '-translate-y-0' : '-translate-y-80'
        }`}
        style={{ opacity: menuOpen ? '1' : '0' }}
      ></div>
    </section>
  );
}
