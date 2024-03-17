"use client"
import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard'
import blackShoe from '../../assets/blackshoe.jpg'
import brownshoe from '../../assets/brownshoe.jpg'
import redshoe from '../../assets/redshoe.png'
import ProductTag from './ProductTag'
import { motion, useInView } from 'framer-motion';

export const products = [
    {
        id: 1,
        upcomming: "",
        imgURL: blackShoe,
        title: "Luxury Pumps",
        subtitle: "Luxe Pumps : Exquisite Collection.20",
        tag: ["BEST SELLERS", "FEATURED"],
    },
    {
        id: 2,
        upcomming: "New",
        imgURL: redshoe,
        title: "High-End Sandal",
        subtitle: "Elegant Steps: Discover Our Luxury Sandals",
        tag: ["BEST SELLERS", "NEW ARRIVALS"],
    },
    {
        id: 3,
        upcomming: 'New',
        imgURL: brownshoe,
        title: "Ankle Boots",
        subtitle: "Explore Exclusive Ankle Boots",
        tag: ["BEST SELLERS", "NEW ARRIVALS"],
    },
];

const Product = () => {
    const [tag, setTag] = useState("BEST SELLERS");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProducts = products.filter((product) =>
        product.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }
    return (
        <section className='grid-rows-5 justify-center items-center p-16'>
            <div className='row-span-1 flex justify-center items-center'>
                <h1 className='text-[Montserrat] text-4xl' style={{ fontWeight: '500', lineHeight: '49px', letterSpacing: '0em', }}>Our Products </h1>
            </div>
            <div className=' row-span-1 flex flex-row justify-center items-center gap-2 py-6'>
                <ProductTag
                    onClick={handleTagChange}
                    name={"BEST SELLERS"}
                    isSelected={tag == "BEST SELLERS"}
                />
                <ProductTag
                    onClick={handleTagChange}
                    name={"NEW ARRIVALS"}
                    isSelected={tag == "NEW ARRIVALS"}
                />
                <ProductTag
                    onClick={handleTagChange}
                    name={"FEATURED"}
                    isSelected={tag == "FEATURED"}
                />
            </div>
            <ul ref={ref} className='row-span-3 grid md:grid-cols-3 md:gap-12 p-20 top-96'>
                {filteredProducts.map((product, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProductCard
                            key={product.id}
                            upcomming={product.upcomming}
                            imgURL={product.imgURL}
                            title={product.title}
                            subtitle={product.subtitle}
                            tags={product}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Product