
import { Product } from './product';  // assigns data types

export const PRODUCTS: Product[] = [ // this is our mock database
  {
    id: 2,
    productName: 'oranges',
    cost: 1.05,
    price: 2.67,
    description: '4lb bag of oranges',
    img: './assets/icons/bagoranges.png',
    stock: 2,
    quantity: 1
  },
  {
    id: 3,
    productName: 'bulk jam',
    cost: 8.95,
    price: 16.99,
    description: '20 oz jar of jam',
    img: './assets/icons/bulkjam.png',
    stock: 2,
    quantity: 1
  },
  {
    id: 4,
    productName: 'esp mach',
    cost: 185,
    price: 297,
    description: 'commercial-grade espresso machine',
    img: './assets/icons/espressomachine.png',
    stock: 3,
    quantity: 1
  },
  {
    id: 5,
    productName: 'milk',
    cost: 1.37,
    price: 2.99,
    description: 'gallon of 2% milk',
    img: './assets/icons/gallonmilk.png',
    stock: 3,
    quantity: 1
  },
  {
    id: 6,
    productName: 'donut',
    cost: 0,
    price: 0.1,
    description: 'half eaten donut rescued from the trash outside of VooDoo Donuts',
    img: './assets/icons/halfeatendonut.png',
    stock: 8,
    quantity: 1
  },
  {
    id: 7,
    productName: 'sm mixer',
    cost: 20.99,
    price: 29.95,
    description: 'five speed hand mixer whisk with chrome beater and dough hook',
    img: './assets/icons/handmixer.png',
    stock: 2,
    quantity: 1
  },
  {
    id: 8,
    productName: 'knife set',
    cost: 65,
    price: 99.95,
    description: 'two piece Wusthof knife set with chef and paring knife.',
    img: './assets/icons/knifeset.png',
    stock: 2,
    quantity: 1
  },
  {
    id: 9,
    productName: 'bread',
    cost: 1.15,
    price: 1.98,
    description: 'medium slice white bread',
    img: './assets/icons/loafbread.png',
    stock: 11,
    quantity: 1
  },
  {
    id: 10,
    productName: 'meat grndr',
    cost: 67.5,
    price: 85.99,
    description: 'commercial grade meat grinder',
    img: './assets/icons/meatgrinder.png',
    stock: 5,
    quantity: 1
  },
  {
    id: 11,
    productName: 'shrooms',
    cost: 11.99,
    price: 15.99,
    description: '1lb of Shittake mushrooms',
    img: './assets/icons/mushrooms.png',
    stock: 3,
    quantity: 1
  },
  {
    id: 12,
    productName: 'olive oil',
    cost: 27,
    price: 35,
    description: '1 liter of EVOO',
    img: './assets/icons/oliveoil.png',
    stock: 4,
    quantity: 1
  },
  {
    id: 13,
    productName: 'oven mit',
    cost: 12.99,
    price: 19.99,
    description: 'Heat resistant silicone oven mits',
    img: './assets/icons/ovenmit.png',
    stock: 6,
    quantity: 1
  },
  {
    id: 14,
    productName: 'pears',
    cost: 1.15,
    price: 1.46,
    description: 'pound of Anjou pears',
    img: './assets/icons/pear.png',
    stock: 3,
    quantity: 1
  },
  {
    id: 15,
    productName: 'pitcher',
    cost: 18.99,
    price: 23.99,
    description: 'two in one glass measuring cup/pitcher',
    img: './assets/icons/pitcher.png',
    stock: 4,
    quantity: 1
  },
  {
    id: 16,
    productName: 'pan set',
    cost: 115.5,
    price: 139.99,
    description: '8 piece set of pots and pans',
    img: './assets/icons/potpan.png',
    stock: 6,
    quantity: 1
  },
  {
    id: 17,
    productName: 'honey',
    cost: 13.99,
    price: 19.97,
    description: '40oz of raw unfiltered honey from the depths of hell (NOT local)',
    img: './assets/icons/rawhoney.png',
    stock: 15,
    quantity: 1
  },
  {
    id: 18,
    productName: 'scale ',
    cost: 34.99,
    price: 49.95,
    description: 'commercial grade scale',
    img: './assets/icons/scale.png',
    stock: 8,
    quantity: 1
  },
  {
    id: 19,
    productName: 'mixer',
    cost: 21.95,
    price: 29.95,
    description: 'stand mixer with chrome whisks',
    img: './assets/icons/standmixer.png',
    stock: 9,
    quantity: 1
  },
  {
    id: 20,
    productName: 'steak',
    cost: 36.99,
    price: 44.99,
    description: '12 oz American Wagyu ABF boneless Strip Steak',
    img: './assets/icons/steak.png',
    stock: 10,
    quantity: 1
  },
  {
    id: 1,
    productName: 'apron',
    cost: 12,
    price: 28,
    description: 'grey apron with brown leather pocket',
    img: './assets/icons/apron.png',
    stock: 0,
    quantity: 1
  },
  {
    id: 21,
    productName: 'sugar',
    cost: 0.75,
    price: 2.25,
    description: 'large bag of sugar',
    img: './assets/icons/sugar.png',
    stock: 0,
    quantity: 1
  }];
