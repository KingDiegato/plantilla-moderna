import { NextPage } from 'next';
import { PlantillaLayout } from '../../components/layout';
import { Main, SectionService } from '../../components/serviceOne';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const ServiceThree: NextPage = () => {
  return (
    <PlantillaLayout
        title='Service Three'
        contentPage='No hay contenido real aún'
    >
        <Main 
          backgroundImage='/image/comunidad-personas-positivas-que-toman-selfie-juntas.webp'
          title='Título del servicio'
          textBotton='Contactar'
        />

        <SectionService 
          subtitle='Subtítulo'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus amet facilis, animi quos inventore accusamus, non perspiciatis dolorum reiciendis corrupti qui. Ad reiciendis voluptatem perferendis! Assumenda laudantium nam itaque.'
          image={[
            "/image/odontologia-preventiva-restauradora.webp",
            "/image/hermosa-chica-sentada-oficina-dentista.webp",
            "/image/dentista-binoculares-lupa-dental-que-tratan-paciente-femenino.webp"
          ]}
        />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}


export default ServiceThree;