const productos = [
  {
    id: "1",
    name: "Nike Dunk Low SE",
    price: 27000,
    category: "Dunk",
    img: "/Productos/Dunk Low SE b.webp",
    imga: "/Productos/Dunk Low SE a.webp",
    stock: 13,
    description: "Zapatillas Nike Dunk Low SE, urbanas unisex Código: Dv0821-422",
  },
  {
    id: "2",
    name: "Nike Air Dunk Jumbo",
    price: 31000,
    category: "Dunk",
    img: "/Productos/Air Dunk Jumbo b.webp",
    imga: "/Productos/Air Dunk Jumbo a.webp",
    stock: 4,
    description: "Zapatillas Nike Air Dunk Jumbo, urbanas unisex Código: Dv0821-400",
  },
  {
    id: "3",
    name: "Nike Air Max 90 SE",
    price: 33000,
    category: "Air-Max",
    img: "/Productos/Air Max 90 SE b.webp",
    imga: "/Productos/Air Max 90 SE a.webp",
    stock: 2,
    description: "Zapatillas Nike Air Max 90 Se, urbanas unisex Código: Dv2614-100",
  },
  {
    id: "4",
    name: "Nike Air Max 97",
    price: 42000,
    category: "Air-Max",
    img: "/Productos/Air Max 97 b.webp",
    imga: "/Productos/Air Max 97 a.webp",
    stock: 4,
    description: "Zapatillas Nike Air Max 97 Se , urbanas unisex Código: Fd0344-397",
  },
  {
    id: "5",
    name: "Nike Air Force 1 07 AN23",
    price: 27000,
    category: "Air-Force",
    img: "/Productos/Air Force 1 07 AN23 b.webp",
    imga: "/Productos/Air Force 1 07 AN23 a.webp",
    stock: 11,
    description: "Zapatillas Nike Air Force 1 07 An23, urbanas unisex Código: Dv0804-200",
  },
  {
    id: "6",
    name: "Nike Air Force 1 React",
    price: 31000,
    category: "Air-Force",
    img: "/Productos/Air Force 1 React b.webp",
    imga: "/Productos/Air Force 1 React a.webp",
    stock: 16,
    description: "Zapatillas Nike Air Force 1 React,urbanas unisex Código: Dm0573-101",
  },
  {
    id: "7",
    name: "Nike Jordan Air 1 Mid",
    price: 33000,
    category: "Jordan",
    img: "/Productos/Jordan Air 1 mid b.webp",
    imga: "/Productos/Jordan Air 1 mid a.webp",
    stock: 3,
    description: "Zapatillas Jordan Air 1 Mid, urbanas unisex Código: Dq8426-615",
  },
  {
    id: "8",
    name: "Nike Jordan Air 200",
    price: 42000,
    category: "Jordan",
    img: "/Productos/Jordan Air 200 b.webp",
    imga: "/Productos/Jordan Air 200 a.webp",
    stock: 7,
    description: "Zapatillas Jordan Air 200, urbanas unisex Código: Dc9836-261",
  },
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
      resolve(productos.find((prod) => prod.id === productId));
    }, 1000);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};
