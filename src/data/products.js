import canon from "../assets/images/products/canon-r6.jpg";
import sony from "../assets/images/products/sony-a7iv.jpg";
import drone from "../assets/images/products/dji-air3.jpg";
import guitar from "../assets/images/products/yamaha-f310.jpg";
import gopro from "../assets/images/products/gopro.jpg";
import tent from "../assets/images/products/camping-tent.jpg";

const products = [
  {
    id: 1,
    name: "Canon EOS R6",
    category: "Photography",
    price: 2500,
    rating: 4.9,
    image: canon,
  },
  {
    id: 2,
    name: "Sony A7 IV",
    category: "Photography",
    price: 3000,
    rating: 4.8,
    image: sony,
  },
  {
    id: 3,
    name: "DJI Air 3",
    category: "Drone",
    price: 4000,
    rating: 4.9,
    image: drone,
  },
  {
    id: 4,
    name: "Yamaha F310",
    category: "Music",
    price: 800,
    rating: 4.6,
    image: guitar,
  },
  {
    id: 5,
    name: "GoPro Hero",
    category: "Photography",
    price: 1200,
    rating: 4.8,
    image: gopro,
  },
  {
    id: 6,
    name: "Camping Tent",
    category: "Camping",
    price: 700,
    rating: 4.5,
    image: tent,
  },
];

export default products;