import React, { useEffect, useRef } from "react";
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Style = () => {
  const text = useRef(null);

  useEffect(() => {
    const el = text.current;

    gsap.from(el, {
      rotateX: 360,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
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
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: line
        }
      });
    });
  }, []);

  return (
    <section id='home' className='grid grid-cols-2 mt-[200px] min-h-screen gap-10'>
      <div className="col-span-1 grid grid-cols-4">
        <div className='col-span-1 flex items-center -rotate-90 -mt-20'>
          <p className="text-9xl font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>STYLE</p>
        </div>
        <div className='col-span-3 flex flex-col py-72 mt-[-200px]'>
          <p className="text-5xl font-[Montserrat]">Discover Your<br />Signature Style</p>
          <div className="mt-4">
          <p id='text' ref={text}>
              Whether you're strutting into the boardroom or<br />
              dancing the night away, FootForm has the perfect<br />
              pair of heels to complement your unique<br />
              personality and flair.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="col-span-1">
        <div className='bg-[] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[]'>
        </div>
      </div> */}
    </section>
  );
};

export default Style;