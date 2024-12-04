export interface Product {
    id: number;
    title: string;
    img: string;
    rating:number;
    price: string;
    desc: string;
  }

  export const productsData :Product[] =[
   {
    id:1,
    img:"/t-shart.jpeg",
    title:"Jacket",
    desc:"Men jacket full zip",
    rating:4,
    price:"45.00",
   },
   {
    id:2,
    img:"/t-shart.jpeg",
    title:"Jacket",
    desc:"Men jacket full zip",
    rating:4,
    price:"45.00",
   }
  ];

  export const fetchProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(productsData), 500));
  };