import React from 'react'
import ProductCard from './ProductCard'
// import { fetchProducts, Product } from "../utils/mockApi";
// import { GetStaticProps } from 'next';

const productsData = [
    {
        img:"/t-shart.jpeg",
        title:"Jacket",
        desc:"Men jacket full zip",
        rating:4,
        price:"45.00"
    },
    {
        img:"/night.jpeg",
        title:"Night Paint",
        desc:"Men Night Paint",
        rating:5,
        price:"60.00"
    },
    {
        img:"/cargo.jpeg",
        title:"Cargo Paint",
        desc:"Men Cargo Paint",
        rating:3,
        price:"80.00"
    },

]

const Products = () => {
  return (   
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>
                New Product   
            </h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {
                    productsData.map((item,index) => (<ProductCard key={index} img={item.img} title={item.title} desc={item.desc} rating={item.rating} price={item.price} />))
                }
            </div>
        </div>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const products = await fetchProducts();
//     return { props: { products } };
//   };


export default Products