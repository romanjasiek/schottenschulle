import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SideNavbarCategories from './SideNavbarCategories';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <>
        <header className='header' id='startanchor'>
          <SideNavbarCategories isOpen={isOpen} />
          <div className='header__container' id='home'>
            <nav className='nav'>
              <ul>
                <div>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#startanchor'
                    >
                      Start
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#auftritteanchor'
                    >
                      Auftritte
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#unterrichtanchor'
                    >
                      Unterricht
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#burnssupperanchor'
                    >
                      Burns Supper
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#burnsconnectionanchor'
                    >
                      Burns Connection
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#galleryanchor'
                    >
                      Impressionen
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#aboutmeanchor'
                    >
                      Über mich
                    </Link>
                  </li>
                  <li className='navigation__list-item navigation__list-item--mobile-hidden'>
                    <Link
                      className='navigation__list-item-link'
                      behavior='smooth'
                      to='#footeranchor'
                    >
                      Kontakt
                    </Link>
                  </li>
                </div>
                <li
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    position: 'fixed',
                    float: 'right',
                    zIndex: '5000',
                    right: '2rem',
                  }}
                  className='navigation__list-item navigation__list-item--menu BurgerMenu'
                >
                  <label
                    className='navigation__list-item-link'
                    htmlFor='sidenav__opened'
                  >
                    <svg className='another-icon' viewBox='0 0 512 512'>
                      <g>
                        <path
                          d='M358.06,193.61H153.94c-3.83,0-6.93-3.1-6.93-6.93s3.1-6.93,6.93-6.93h204.13c3.83,0,6.93,3.1,6.93,6.93
                                        S361.89,193.61,358.06,193.61z'
                        />
                        <path
                          d='M358.06,262.93H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                        c3.83,0,6.93,3.1,6.93,6.93C365,259.83,361.89,262.93,358.06,262.93z'
                        />
                        <path
                          d='M358.06,332.25H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                        c3.83,0,6.93,3.1,6.93,6.93C365,329.15,361.89,332.25,358.06,332.25z'
                        />
                        <path
                          d='M256,474.76c-120.62,0-218.76-98.14-218.76-218.76c0-120.63,98.14-218.76,218.76-218.76
                                        c120.63,0,218.76,98.14,218.76,218.76C474.76,376.62,376.62,474.76,256,474.76z M256,51.1C143.02,51.1,51.1,143.02,51.1,256
                                        S143.02,460.9,256,460.9S460.9,368.98,460.9,256S368.98,51.1,256,51.1z'
                        />
                      </g>
                    </svg>
                  </label>
                </li>
              </ul>
            </nav>
            <div className='header__heading-container'>
              <h1 className='header__heading-main'>
                Schotten
                <br />
                Schulle
              </h1>
              <p className='header__heading-sub-main'>
                Dudelsackmusik und Dudelsackunterricht
              </p>
            </div>
          </div>
          <div className='header__slope'></div>
        </header>
      </>
    </React.Fragment>
  );
};

export default Header;
