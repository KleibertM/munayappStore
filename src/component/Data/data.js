import maracuyaImage from '../../assets/img/maracuya-2.jpg';
import fresaImage from '../../assets/img/fresa-2.jpg';
import mangoImage from '../../assets/img/mango.jpg';
import cocoImage from '../../assets/img/coco-1.jpg';
import oreoImage from '../../assets/img/oreo.jpg';
import lucumaImage from '../../assets/img/lucuma.jpg';
import choMentaImage from '../../assets/img/choMenta.jpg';
import fresaLecheImage from '../../assets/img/fresaLeche.jpg';
import banner1 from '../../assets/banners/1.jpg'
import banner2 from '../../assets/banners/2.jpg'
export const dataMunay = [
  {
    id: "1",
    nombre: "Maracuya",
    descripcion: "Delicioso marciano de maracuya cremoso.",
    precio: 0.90,
    ingredientes: ["Maracuya", "Azucar Rubia", "Agua botella/hervida"],
    image: [maracuyaImage],
    estado: true,
    tipo: true
  },
  {
    id: "2",
    nombre: "Fresa",
    descripcion: "Delicioso marciano de fresa con trozos de fresas frescas.",
    precio: 0.90,
    ingredientes: ["Fresa", "Azucar Rubia", "Agua botella/hervida"],
    image: [fresaImage],
    estado: true,
    tipo: true
  },
  {
    id: "3",
    nombre: "Mango",
    descripcion: "Delicioso marciano de mango.",
    precio: 0.90,
    ingredientes: ["Mango", "Azucar Rubia", "Agua botella/hervida"],
    image: [mangoImage],
    estado: true,
    tipo: true
  },
  {
    id: "4",
    nombre: "Coco",
    descripcion: "Delicioso marciano de coco con trozos de coco cremoso.",
    precio: 1.10,
    ingredientes: ["Coco", "Azucar refinada", "Leche evaporada", "Agua botella/hervida"],
    image: [cocoImage],
    estado: true,
    tipo: false
  },
  {
    id: "5",
    nombre: "Oreo",
    descripcion: "Delicioso marciano de oreo cremoso.",
    precio: 1.10,
    ingredientes: ["Oreo", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [oreoImage],
    estado: true,
    tipo: false
  },
  {
    id: "6",
    nombre: "Choco Menta",
    descripcion: "Delicioso marciano de chocolate con menta cremoso.",
    precio: 1.10,
    ingredientes: ["Menta (E)", "Chocolate", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [choMentaImage],
    estado: true,
    tipo: false
  },
  {
    id: "7",
    nombre: "Lucuma",
    descripcion: "Delicioso marciano de lucuma cremoso.",
    precio: 1.10,
    ingredientes: ["Lucuma", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [lucumaImage],
    estado: true,
    tipo: false
  },
  {
    id: "8",
    nombre: "Fresa c/ Leche",
    descripcion: "Delicioso marciano de Fresa con leche y trozos de fresa.",
    precio: 1.10,
    ingredientes: ["Fresa", "Azucar refinada", "Leche evaporada", "Agua botella/hervida"],
    image: [fresaLecheImage],
    estado: true,
    tipo: false
  }
];


export const banners = [
    // {
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316014/samples/5_xkg5s8.jpg",
    //   name: "maracuya"
    // },
    // {
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316013/samples/3_ocgcpr.jpg",
    //   name: "fresa"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316013/samples/4_ln46yx.jpg",
    //   name: "mango"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316014/samples/6_o1fmce.jpg",
    //   name: "fresa con leche"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316012/samples/10_vlhq7e.jpg",
    //   name: "lucuma"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316012/samples/9_bc90c3.jpg",
    //   name: "coco"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316012/samples/8_fizibj.jpg",
    //   name: "oreo"
    // },{
    //   image: "https://res.cloudinary.com/dzd6hfguw/image/upload/v1709316012/samples/7_rwwqji.jpg",
    //   name: "choco menta"
    // },
    {
      image: banner1,
      name: 'banner1'
    },
    {
      image: banner2,
      name: 'banner2'
    }
  ]