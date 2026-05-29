
import type { Product } from "@/models/Product"
import imagen from "@/assets/imagen2.jpg"

import imagen3 from "@/assets/imagen3.jpg"
import imagen5 from "@/assets/imagen5.jpg"
import imagen4 from "@/assets/imagen4.jpg"
import imagen6 from "@/assets/imagen6.jpg"
import imagen7 from "@/assets/imagen7.jpg"
export const products: Product[] = [
  //Array of products, it will be used to display the products in the store,
  //  and to add them to the cart. Each product has an id, name, description, price, discount, stock and image.

  {
    id: 1,
    name: "Campera de mujer",
    description: "Campera de invierno, ideal para el frio",
    price: 2000,
    image: imagen,
    discount: 0,
    stock: 3

  },
  {
    id: 2,
    name: "Campera 2026",
    description: "Campera de primavera, ligera y cómoda",
    price: 5000,
    image: imagen5,
    discount: 0,
    stock: 10
  },

  {
    id: 3,
    name: "Campera de hombre",
    description: "Campera de cuero, ideal para el invierno",
    price: 3500,
    image: imagen3,
    discount: 0,
    stock: 10
  },
   {
    id: 4,
    name: "Campera de hombre en talle grande",
    description: "Campera cómoda para hombres",
    price: 3500,
    image: imagen4,
    discount: 0,
    stock: 10
  },
     {
    id: 5,
    name: "Pantalon de mujer",
    description: "Pantalon cómodo para mujeres de invierno",
    price: 9000,
    image: imagen6,
    discount: 0,
    stock: 7
  } ,

     {
    id: 6,
    name: "Saco de vestir mujer",
    description: "Saco cómodo para mujeres de invierno",
    price: 1200,
    image: imagen7,
    discount: 0,
    stock: 4
  }


]