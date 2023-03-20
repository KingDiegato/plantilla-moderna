import {FC} from 'react';

export const SectionContact:FC = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

  return (
    <div className='section-contact'>
        <div className='section-contact-container-text'>
            <div className='section-contact-title'>Contactános</div>
            <div className='section-contact-description'>Escríbenos por whatsApp o llena el formulario de contactos y nos comunicaremos lo más pronto posible.</div>
            <button className='section-contact-button'>Contactar por whatsApp</button>
        </div>

        <div className='section-contact-container-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>Nombre:</label>
                <input type="text" id='Name' name='Name' placeholder='Coloca tu nombre' className='section-contact-input' />
                
                <label htmlFor='Email'>Email:</label>
                <input type="email" id='Email' name='Email' placeholder='correo@correo.com' className='section-contact-input' />
                
                <label htmlFor='Phone'>Teléfono:</label>
                <input type="tel" id='Phone' name='Phone' placeholder='Coloca tu # de teléfono' className='section-contact-input' />
                
                <label htmlFor='Message'>Mensaje:</label>
                <textarea id='Message' name='Message' placeholder='Coloca tu mensaje' className='section-contact-input section-contact-input-message' />

                <input type="submit" value="Enviar" className='section-contact-input-submit' />
            </form>
        </div>

        <div className='section-contact-container-map'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.574926088382!2d-79.88860897671384!3d-2.193916074413534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e64c00a5ebf%3A0xb983f0134e08ebb!2sMalec%C3%B3n%202000!5e0!3m2!1ses-419!2sec!4v1678897897375!5m2!1ses-419!2sec" 
                style={{border:"0" }}
                // allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                
            </iframe>
        </div>
    </div>
  )
}
