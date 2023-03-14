import {FC} from 'react'
import Image from 'next/image'

import facebookImage from '../../public/image/Diseno-sin-titulo-2023-01-05T164239.683.webp';
import tiktokImage from '../../public/image/Diseno-sin-titulo-2023-01-05T164431.183.webp';
import instagramImage from '../../public/image/Diseno-sin-titulo-2023-01-05T164451.396.webp';
import youtubeImage from '../../public/image/Diseno-sin-titulo-2023-01-05T164524.690.webp';
import spotifyImage from '../../public/image/Diseno-sin-titulo-2023-01-05T164101.007.webp';

export const SocialMedia: FC = () => {


  return (
    <div className='social-media'>
        <div className='container-social-media-image'>
            <Image src={facebookImage} alt="facebook" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <Image src={tiktokImage} alt="tiktok" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <Image src={instagramImage} alt="instagram" className='social-media-image' />
        </div>
        <div className='container-social-media-image'>
            <Image src={youtubeImage} alt="youtube" className='social-media-image' />
        </div>
        <div className='container-social-media-image hidden'>
            <Image src={spotifyImage} alt="youtube" className='social-media-image' />
        </div>
    </div>
  )
}
