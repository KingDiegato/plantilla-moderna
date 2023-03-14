import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../header';
import { Sidebar } from '../header';
import { ButtonUp } from '../buttonUp';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
    keywords?: string,
    scrollAnimation: number,
}

export const PlantillaLayout: FC<MetaProps> = ({ children, title, contentPage, keywords= 'dentista', scrollAnimation }) => {

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
            <meta name='keywords' content={ keywords } />
            <link rel="shortcut icon" href="/image/LOGO1.png" />
        </Head>

        <Navbar scrollAnimation={scrollAnimation} />

        <Sidebar />

        <ButtonUp scrollAnimation={scrollAnimation} />

        {children}
    </>
  )
}