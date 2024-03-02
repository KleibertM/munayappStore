import Contact from "../contact/Contact"
import { PiPlanetFill } from "react-icons/pi";
import BannerText from '../bannerText/BannerText';

const Footer = () => {
    return (
        <>
        <Contact />
        <BannerText icon={<PiPlanetFill />} text={'Munay - Marcianos Artesanales'} />
        </>
    )
}

export default Footer