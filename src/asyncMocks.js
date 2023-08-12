const productos = [
  {
    id: "1",
    name: "Nike Dunk Low SE",
    price: 27000,
    category: "Dunk",
    img: "./Productos/Dunk Low SE b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "2",
    name: "Nike Air Dunk Jumbo",
    price: 31000,
    category: "Dunk",
    img: "./Productos/Air Dunk Jumbo b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "3",
    name: "Nike Air Max 90 SE",
    price: 33000,
    category: "Air Max",
    img: "./Productos/Air Max 90 SE b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "4",
    name: "Nike Air Max 97",
    price: 42000,
    category: "Air Max",
    img: "./Productos/Air Max 97 b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "5",
    name: "Nike Air Force 1 07 AN23",
    price: 27000,
    category: "Air Force",
    img: "./Productos/Air Force 1 07 AN23 b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "6",
    name: "Nike Air Force 1 React",
    price: 31000,
    category: "Air Force",
    img: "./Productos/Air Force 1 React b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "7",
    name: "Nike Jordan Air 1 Mid",
    price: 33000,
    category: "Jordan",
    img: "./Productos/Jordan Air 1 mid b.webp",
    stock: 25,
    description: "",
  },
  {
    id: "8",
    name: "Nike Jordan Air 200",
    price: 42000,
    category: "Jordan",
    img: "./Productos/Jordan Air 200 b.webp",
    stock: 25,
    description: "",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === productId))
    }, 1000)
  })
}
