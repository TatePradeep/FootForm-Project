import React, { useEffect, useRef } from "react";
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
  const text = useRef(null);

  useEffect(() => {
    const el = text.current;

    gsap.from(el, {
      rotateX: 360,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: "top 10%",
        end: "bottom 20%",
        scrub: true
      }
    });

    let lines = new SplitType('#text', { types: 'lines' });

    lines.lines.forEach((line, index) => {
      gsap.from(line, {
        rotateX: 360,
        opacity: 0,
        delay: index * 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: line
        }
      });
    });
  }, []);

  return (
    <section id='about' className='grid grid-cols-2 mt-28 min-h-screen gap-10'>
      <div className="col-span-1 grid grid-cols-4">
        <div className='col-span-1 flex items-center -rotate-90'>
          <p className="text-9xl top- font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>QUALITY</p>
        </div>
      </div>
      <div className="col-span-1">
        {/* <div className='bg-[] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[]'>
        
        </div> */}
        <div className='flex flex-col py-40 mt-[-150px]'>
          <p className="text-[45px] font-[Montserrat]">Craftsmanship Beyond<br />Compare</p>
          <p id='text' ref={text} className="mt-5">
            Experience the epitome of perfection with our<br />
            impeccable craftsmanship. Each pair of FootForm heels is<br />
            a testament to our dedication to quality and detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;