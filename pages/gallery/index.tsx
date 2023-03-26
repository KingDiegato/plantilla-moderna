import { NextPage } from "next";
import { PlantillaLayout } from "../../components/layout";
import { GalleryHeader, GalleryComponent } from '../../components/gallery';
import { SatisfiedCustomers } from "../../components/satisfiedCustomers";
import { SectionContact } from "../../components/sectionContact";

const Gallery: NextPage = () => {
  return (
    <PlantillaLayout
        title="Galería"
        contentPage="Esta página contiene la galería de imagenes"
    >
        <GalleryHeader />

        <GalleryComponent />

        <SatisfiedCustomers />

        <SectionContact />
    </PlantillaLayout>
  )
}

export default Gallery;