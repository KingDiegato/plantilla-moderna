import { FC, useState } from 'react'
import Image from 'next/image'

export const Sidebar: FC = () => {

  const [btnMenu, setBtnMenu] = useState(false);
  const [btnSubMenu, setBtnSubMenu] = useState(false);


  // Logo
  const logo = '/image/LOGO1.png';

  return (
    <div
      className='menu-mobile'
    >

      <div>
        <Image src={logo} alt='logo' width={200} height={50} />
      </div>

      {
        btnMenu 
        ? 
        <div
          className='sub-menu-mobile animate__animated animate__fadeIn animate__faster'
        >
          <div className='container-header-submenu'>
            <div
              className='logo'
            >
              <Image src={logo} alt='logo' width={200} height={50} />
            </div>

            <div
              className='btn-menu-close'
              onClick={ () => setBtnMenu(false) }
            >
              <svg 
                style={{
                  fill:'white',
                  cursor: 'pointer'
                }} 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                width="48">
                  <path 
                    d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                  />
              </svg>
            </div>
          </div>

          <div className='container-list-submenu'>

            <ul className='list-submenu'>
              <li>Inicio</li>
              <li 
                className='list-expand-submenu'
                onClick={ () => setBtnSubMenu(!btnSubMenu) }
              >
                Especialidades 
                
                <div>
                  {
                    btnSubMenu ?
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fill: 'white',
                        transform: 'scale(0.5)',
                        width: '40px',
                        height:'40px',
                        position: 'absolute',
                        top: '-6',
                        left: '110px'
                      }}  
                    >
                      <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
                    </svg>
                    :
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fill: 'white',
                        transform: 'scale(0.5)',
                        width: '40px',
                        height:'40px',
                        position: 'absolute',
                        top: '-6',
                        left: '110px'
                      }}  
                    >
                      <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                    </svg>
                  }
                </div>              
              </li>
              {
                btnSubMenu &&
                <div
                  className='sub-submenu animate__animated animate__backInDown'
                >
                  <div>Cirugía oral</div>
                  <div>Diseño de sonrisa</div>
                  <div>Endodoncista</div>
                  <div>Implantología dental</div>
                  <div>Ortodoncista</div>
                  <div>Rehabilitaciín oral</div>
                  <div>Odontología general</div>
                  <div>Periodoncia</div>
                </div>
              }
              <li>Galeria</li>
              <li>Nosotros</li>
              <li>Contactos</li>
              <div className='container-button-cita'>
                <button>Reservar una cita</button>
              </div>
            </ul>
          </div>
        </div> 
        
        : <div
            onClick={ () => setBtnMenu(true) }
          >
            <svg 
              style={{
                fill:'white',
                cursor: 'pointer'
              }} 
              xmlns="http://www.w3.org/2000/svg" 
              height="48" width="48">
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/>
            </svg>
          </div>
        
      }
    </div>
  )
}
