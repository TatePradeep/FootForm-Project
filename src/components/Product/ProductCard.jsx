import React from 'react';


const ProductCard = ({ upcomming, imgURL, title, subtitle }) => {
    return (
        <div className='w-96 h-96 bg-white rounded-3xl shadow-xl shadow-[#6D6B7B] p-9 justify-center items-center transform transition-transform hover:scale-105 border-2'>
            <p className='text-lg text-[Montserrat] top-96 left-9 text-[#FF2B2B]'>{upcomming}</p>
            <div className='flex justify-center items-center'>
                <img src={imgURL} className='w-64 h-44 mt-4 mb-2' alt={title} />
            </div>
            <h3 className='text-2xl text-[Montagu Slab]'>{title}</h3>
            <p className='text-gray-800'>{subtitle}</p>
        </div>
    );
}

export default ProductCard;