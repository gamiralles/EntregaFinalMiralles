const productos = [
  {
    id: "1",
    name: "Nike Dunk ",
    price: 1000,
    category: "Dunk",
    img: "./Productos/dunk2.webp",
    stock: 25,
    description: "Nike Dunk",
  },
  {
    id: "2",
    name: "Nike Arimax ",
    price: 1000,
    category: "Airmax",
    img: "./Productos/Airmax.webp",
    stock: 25,
    description: "Nike Airmax",
  },
  {
    id: "3",
    name: "Nike Huarache",
    price: 1000,
    category: "Huarache",
    img: "./Productos/Huarache2.webp",
    stock: 25,
    description: "Nike Huarache",
  },
  {
    id: "4",
    name: "Nike Arimax ",
    price: 1000,
    category: "Airmax",
    img: "./Productos/Airmax3.webp",
    stock: 25,
    description: "Nike Airmax",
  }
];

export const getProducts = () => {
  return new Promise((respuesta) => {
    setTimeout(() => {
      respuesta(productos);
    }, 1000);
  });
};
