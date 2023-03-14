import { useState } from 'react';
import { NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import { PlantillaLayout } from '../components/layout';
import { Main } from '../components/main';
import { SocialMedia } from '../components/socialMedia';
import { Experience } from '../components/experience';
import { ServiceSection } from '../components/serviceSection';
import { SectionAbout } from '../components/sectionAbout';

const Home: NextPage = () => {

  const [scrollAnimation, setScrollAnimation] = useState(0);

  return (
  <PlantillaLayout
    title='Home | Dentista'
    contentPage='Consultorio dentista en guayaquil'
    keywords='dentista, dientes'
    scrollAnimation={scrollAnimation}
  >
    <Main setScrollAnimation={setScrollAnimation} />

    <SocialMedia />

    <Experience />

    <ServiceSection />

    <SectionAbout />

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati magnam sunt pariatur voluptatibus, sit quaerat repellendus nulla aperiam similique rerum impedit repudiandae optio minima saepe amet placeat aliquam labore!</p>
  </PlantillaLayout>
  )
}


export default Home;