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
import banner3 from '../../assets/banners/3.jpg'
import banner4 from '../../assets/banners/4.jpg'
export const dataMunay = [
  {
    id: "1",
    nombre: "Maracuya",
    descripcion: "Delicioso marciano de maracuya cremoso.",
    precio: 0.90,
    ingredientes: ["Maracuya", "Azucar Rubia", "Agua botella/hervida"],
    image: [maracuyaImage, 'https://i.ibb.co/svFzjHn/6.jpg'],
    estado: true,
    tipo: true
  },
  {
    id: "2",
    nombre: "Fresa",
    descripcion: "Delicioso marciano de fresa con trozos de fresas frescas.",
    precio: 0.90,
    ingredientes: ["Fresa", "Azucar Rubia", "Agua botella/hervida"],
    image: [fresaImage,'https://i.ibb.co/W0GqXHr/4.jpg'],
    estado: true,
    tipo: true
  },
  {
    id: "3",
    nombre: "Mango",
    descripcion: "Delicioso marciano de mango.",
    precio: 0.90,
    ingredientes: ["Mango", "Azucar Rubia", "Agua botella/hervida"],
    image: [mangoImage, 'https://i.ibb.co/HX1XNBS/8.jpg'],
    estado: true,
    tipo: true
  },
  {
    id: "4",
    nombre: "Coco",
    descripcion: "Delicioso marciano de coco con trozos de coco cremoso.",
    precio: 1.10,
    ingredientes: ["Coco", "Azucar refinada", "Leche evaporada", "Agua botella/hervida"],
    image: [cocoImage, 'https://i.ibb.co/p46vBgD/7.jpg'],
    estado: true,
    tipo: false
  },
  {
    id: "5",
    nombre: "Oreo",
    descripcion: "Delicioso marciano de oreo cremoso.",
    precio: 1.10,
    ingredientes: ["Oreo", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [oreoImage,'https://i.ibb.co/w0HmZC2/5.jpg'],
    estado: true,
    tipo: false
  },
  {
    id: "6",
    nombre: "Choco Menta",
    descripcion: "Delicioso marciano de chocolate con menta cremoso.",
    precio: 1.10,
    ingredientes: ["Menta (E)", "Chocolate", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [choMentaImage, 'https://i.ibb.co/3m7bnwT/1.jpg'],
    estado: true,
    tipo: false
  },
  {
    id: "7",
    nombre: "Lucuma",
    descripcion: "Delicioso marciano de lucuma cremoso.",
    precio: 1.10,
    ingredientes: ["Lucuma", "Azucar rubia", "Leche evaporada", "Agua botella/hervida"],
    image: [lucumaImage, 'https://i.ibb.co/FBn2B7k/3.jpg'],
    estado: true,
    tipo: false
  },
  {
    id: "8",
    nombre: "Fresa c/ Leche",
    descripcion: "Delicioso marciano de Fresa con leche y trozos de fresa.",
    precio: 1.10,
    ingredientes: ["Fresa", "Azucar refinada", "Leche evaporada", "Agua botella/hervida"],
    image: [fresaLecheImage, 'https://i.ibb.co/x1YmbKQ/2.jpg'],
    estado: true,
    tipo: false
  }
];


export const banners = [
    {
      image: banner1,
      name: 'banner1'
    },
    {
      image: banner2,
      name: 'banner2'
    },
    {
      image: banner3,
      name: 'banner3'
    },
    {
      image: banner4,
      name: 'banner4'
    }
  ]