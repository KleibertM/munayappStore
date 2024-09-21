import Banner from "../Banner/Banner";
// import Items from "../Items/Items";
// import BannerText from "../bannerText/BannerText";
// import TabsNav from "../Tabs/TabsNav";
import { PiAlienFill, PiFlyingSaucerDuotone } from "react-icons/pi";
import { lazy } from 'react';

const Items = lazy(()=> import("../Items/Items"))
const BannerText = lazy(()=> import("../bannerText/BannerText"))
const TabsNav = lazy(()=> import("../Tabs/TabsNav"))

const Home = () => {
    return (
        <> 
            <BannerText  icon={<PiFlyingSaucerDuotone />} text={'¡REALIZA TU PEDIDO AHORA!'} />
            <Banner />
            <TabsNav />
            <BannerText  icon={<PiAlienFill />} text={'Sobre Nosotros'} />
            <Items 
                idTema={'#mision'}
                image={'https://cdn-icons-png.flaticon.com/512/1239/1239710.png'}
                title={'Misión'}
                text={'Nuestra misión es ofrecer una experiencia refrescante y saludable a través de nuestros marcianos de frutas, elaborados con ingredientes naturales y frescos. Nos comprometemos a proporcionar productos de calidad que satisfagan los paladares más exigentes, manteniendo siempre un enfoque en la salud y el bienestar de nuestros clientes. Queremos ser reconocidos como líderes en la industria de los marcianos de frutas, destacando por nuestro compromiso con la calidad, la innovación y la excelencia en el servicio al cliente.'}
                resaltarText={['refrescante y saludable', 'naturales y frescos', 'calidad, la innovación y la excelencia']}
                diretionY={'column'}
                diretionX={'row'}
            />

            <Items
                idTema={'#vision'}
                image={'https://cdn-icons-png.flaticon.com/512/1644/1644005.png'}
                title={'Visión'}
                text={'Nuestra visión es convertirnos en el principal distribuidor de marcianos de frutas y helados, tanto a nivel local como nacional, estableciendo estándares de calidad superiores en la industria. Nos esforzamos por ser reconocidos por nuestro sabor natural y fresco, así como por la transparencia y la integridad en todos nuestros procesos. Buscamos expandir nuestro alcance, brindando a más personas la oportunidad de disfrutar de nuestros deliciosos productos, mientras mantenemos nuestro compromiso con la salud y la calidad.'}
                resaltarText={['sabor natural y fresco', 'deliciosos productos', 'salud y la calidad.']}
                diretionY={'column'}
                diretionX={'row-reverse'}
            />
        </>
    )
}

export default Home;