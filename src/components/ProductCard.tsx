"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ViewProduct from './ViewProduct';
 

interface  propsType{
    img:string;
    title:string;
    desc:string;
    rating:number;
    price:string;
}

const ProductCard:React.FC<propsType> = ({img,title,desc,rating,price}) => {

    const [showDetails, setShowDetails] = useState(false);
    const generateRating = (rating: number) => {
        const stars = Array.from({ length: 5 }, (_, i) => (
          i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
        ));
        return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
      };

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
        <div>
            <Image className="w-full h-auto" src={img} width={200} height={300} alt={title}/>
        </div>

        <div className='space-y-2 py-2'>
            <h2 className='text-accent font-medium uppercase'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{desc}</p>
            <div>{generateRating(rating)}</div>
            <div className='font-bold flex gap-4'>
                ${price}
                <del className='text-gray-500 font-normal'>${parseInt(price) +50}.00</del>
            </div>
             <button
          onClick={() => setShowDetails(true)}
          className="bg-blue-500 w-auto text-white py-1 px-2 cursor-pointer rounded"
        >
          View Details
        </button>
        </div>

        {showDetails && (
        <ViewProduct
        img={img}
          title={title}
          desc={desc}
          price={price}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  )
}

export default ProductCard