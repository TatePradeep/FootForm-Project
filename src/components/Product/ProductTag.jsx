import React from 'react';

const ProductTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-[#FF2B2B] underline" : "text-[#000000]"
    return (
        <button className={`${buttonStyles} text-[Montserrat] text-sm cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
    );
}

export default ProductTag;