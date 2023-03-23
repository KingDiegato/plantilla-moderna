import { NextPage } from 'next';
import { PlantillaLayout } from '../../components/layout';
import { Main, SectionService } from '../../components/serviceOne';
import { SatisfiedCustomers } from '../../components/satisfiedCustomers';
import { SectionContact } from '../../components/sectionContact';

const ServiceOne: NextPage = () => {
  return (
    <PlantillaLayout
        title='Service Two'
        contentPage='No hay contenido real aún'
    >
        <Main 
          backgroundImage='/image/amigos-felices-tiro-medio-ciudad.webp'
          title='Título del servicio'
          textBotton='Contactar'
        />

        <SectionService 
          subtitle='Subtítulo'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus amet facilis, animi quos inventore accusamus, non perspiciatis dolorum reiciendis corrupti qui. Ad reiciendis voluptatem perferendis! Assumenda laudantium nam itaque.'
          image={[
            "/image/endodoncia.webp",
            "/image/chequeo-dentist-herramienta-instrumento-joven.webp",
            "/image/dentistas-tratan-dientes-pacientes.webp"
          ]}
        />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}


export default ServiceOne;