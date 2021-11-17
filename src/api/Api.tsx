import React from 'react';
import {ProductListProps} from '../components/ProductList/ProductList';
import {Product} from '../types/types';

const Products: Product[] = [
  {
    image:
      'https://http2.mlstatic.com/D_Q_NP_2X_689990-MLA47130412920_082021-G.webp',
    price: 4500,
    title: 'Vino (combo Alta Gama Caja 10 Botellas X 750). Quirino',
    discount: 50,
    envio: {label: 'Envio Gratis', full: false},
    id: 1,
  },
  {
    image:
      'https://http2.mlstatic.com/D_Q_NP_2X_660342-MLA46009561942_052021-G.webp',
    price: 47499,
    title: 'Notebook Exo Smart L33 Intel N4020 Ram4gb Ssd64gb 14hd Win10',
    cuotas: '18x $ 2.638 sin interes',
    envio: {label: 'Envio Gratis', full: true},
    id: 2,
  },
  {
    image:
      'https://http2.mlstatic.com/D_Q_NP_2X_970023-MLA43167710046_082020-G.webp',
    price: 7884,
    title: 'Hidrolavadora Alta Presión Kroner 1400w 105/b Autostop + Acc',
    discount: 12,
    envio: {
      full: true,
      label: 'Envio Gratis',
    },
    id: 3,
  },
  {
    image:
      'https://http2.mlstatic.com/D_Q_NP_2X_893006-MLA46430431526_062021-G.webp',
    price: 59999,
    title: 'Smart Tv Bgh 50 4k  Uhd Android',
    cuotas: '12x $ 4.999 sin interes',
    envio: {
      label: 'Envio Gratis',
      full: true,
    },
    id: 4,
  },
];

const sectionList: ProductListProps[] = [
  {
    items: Products,
    title: 'Ofertas',
    moreBtn: true,
    moreScreen: '',
    moreBtnText: 'Ver Todas',
    display: 'Grid',
  },
  {
    items: Products,
    title: 'Relacionado con tus visitas en Computacion',
    moreBtn: true,
    moreScreen: '',
    moreBtnText: 'Ver Mas',
    display: 'Column',
  },
];

const SliderBarHome = [
  'image.jpg',
  'image.jpg',
  'image.jpg',
  'image.jpg',
  'image.jpg',
  'image.jpg',
];

export function GetAllProducts() {
  return Products;
}

export function GetAllSections() {
  return sectionList;
}
