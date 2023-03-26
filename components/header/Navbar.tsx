import React, { FC, useState } from 'react';
import Image from 'next/image';
import { navigationForm } from '../../helpers';
import Link from 'next/link';

interface Props{
  scrollAnimation: number;
}

export const Navbar: FC<Props> = ({scrollAnimation}) => {

  const [btnSubMenu, setBtnSubMenu] = useState(false);

  const logo = "/image/logo-ejemplo.webp";

  const handleClickScrollForm = (e: any) => {
    e.preventDefault();
    navigationForm();
  }

  return (
    <div
      id='menu-top'
      className={`menu-desktop ${ scrollAnimation !== 0 ? 'animation-scroll' : 'remove-animation-scroll' }`}
    >
      <div className='container-logo-desktop hover-icon-logo'>
        <Link href="/">
          <Image src={logo} alt="logo" width={230} height={90} />
        </Link>
      </div>

      <div className='container-list-menu-desktop'>
        <Link href="/">
          <div className='hover-menu-list'>Inicio</div>
        </Link>
        <div className='submenu-desktop hover-menu-list'>
          <div
            onClick={ () => setBtnSubMenu(!btnSubMenu) }
          >
            Servicios
          </div>
          
          <div
            className='navbar-icon-item-menu'
            onClick={ () => setBtnSubMenu(!btnSubMenu) }
          >
              {
                btnSubMenu ?
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    // fill: 'white',
                    transform: 'scale(0.5)',
                    width: '40px',
                    height:'40px',
                  }}  
                >
                  <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
                </svg>
                :
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    // fill: 'white',
                    transform: 'scale(0.5)',
                    width: '40px',
                    height:'40px',
                  }}  
                >
                  <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                </svg>
              }
            </div>  

            {
              btnSubMenu &&
              <div
                className='container-submenu-desktop animate__animated animate__backInDown'
              >
                <Link href="/services/service-one">
                  <div className='hover-submenu-list'>
                    Service One
                  </div>
                </Link>
                <Link href="/services/service-two">
                  <div className='hover-submenu-list'>
                    Service Two
                  </div>
                </Link>
                <Link href="/services/service-three">
                  <div className='hover-submenu-list'>
                    Service Three
                  </div>
                </Link>
                <Link href="/services/service-four">
                  <div className='hover-submenu-list'>
                    Service Four
                  </div>
                </Link>
              </div>
            }

        </div>

        <Link href="/gallery">
          <div className='hover-menu-list'>Galería</div>
        </Link>
        <div className='hover-menu-list'>Nosotros</div>
        <div className='hover-menu-list'>Contactos</div>
      </div>

      <a
        onClick={handleClickScrollForm}
        href='#formulario' 
        className='container-calendar-desktop hover-icon-logo'
      >
        <svg 
          style={{
            fill: "white"
          }}
          xmlns="http://www.w3.org/2000/svg" 
          height="48" 
          width="48">
            <path 
              d="M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5ZM24 28q-.85 0-1.425-.575Q22 26.85 22 26q0-.85.575-1.425Q23.15 24 24 24q.85 0 1.425.575Q26 25.15 26 26q0 .85-.575 1.425Q24.85 28 24 28Zm-8 0q-.85 0-1.425-.575Q14 26.85 14 26q0-.85.575-1.425Q15.15 24 16 24q.85 0 1.425.575Q18 25.15 18 26q0 .85-.575 1.425Q16.85 28 16 28Zm16 0q-.85 0-1.425-.575Q30 26.85 30 26q0-.85.575-1.425Q31.15 24 32 24q.85 0 1.425.575Q34 25.15 34 26q0 .85-.575 1.425Q32.85 28 32 28Zm-8 8q-.85 0-1.425-.575Q22 34.85 22 34q0-.85.575-1.425Q23.15 32 24 32q.85 0 1.425.575Q26 33.15 26 34q0 .85-.575 1.425Q24.85 36 24 36Zm-8 0q-.85 0-1.425-.575Q14 34.85 14 34q0-.85.575-1.425Q15.15 32 16 32q.85 0 1.425.575Q18 33.15 18 34q0 .85-.575 1.425Q16.85 36 16 36Zm16 0q-.85 0-1.425-.575Q30 34.85 30 34q0-.85.575-1.425Q31.15 32 32 32q.85 0 1.425.575Q34 33.15 34 34q0 .85-.575 1.425Q32.85 36 32 36Z"/>
        </svg>
      </a>
    </div>
  )
}
