import Image from 'next/image';
import React from 'react'

interface ViewProductProps {
    img:string,
    title: string;
    desc: string;
    price: string;
    onClose: () => void;
  }

const ViewProduct: React.FC<ViewProductProps> = ({img,title, desc, price, onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
    
        <Image className="w-full h-auto" src={img} width={200} height={300} alt={title}/>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{desc}</p>
      <p className="text-lg font-semibold mb-4">Price: ${price}</p>
      <button
        onClick={onClose}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
      >
        Close
      </button>
    </div>
  </div>
  )
}

export default ViewProduct