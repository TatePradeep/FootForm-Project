import React from 'react';
import Luxury from './Luxury/Luxury.jsx'
import Quality from './Quality/Quality.jsx'
import Style from './Style/Style.jsx'

const ShoeAnimation = () => {
    return (
        <section className="flex flex-col justify-between h-[3600px]">
            <div className='h-[1200px]'>
                <Luxury />
            </div>
            <div className='h-[1200px]'>
                <Quality />
            </div>
            <div className='h-[900px]'> 
                <Style />
            </div>
        </section>
    );
}

export default ShoeAnimation;
