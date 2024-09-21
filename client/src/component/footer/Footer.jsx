// import Contact from "../contact/Contact"
// import BannerText from '../bannerText/BannerText';
import { PiPlanetFill } from "react-icons/pi";
import { lazy, Suspense } from 'react';


const Contact = lazy(()=> import('../contact/Contact'))
const BannerText = lazy(()=> import('../bannerText/BannerText'))

const Footer = () => {
    return (
        <>
        <Contact />
        <BannerText icon={<PiPlanetFill />} text={'Munay - Marcianos Artesanales'} />
        </>
    )
}

export default Footer