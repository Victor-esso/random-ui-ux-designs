
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
const HotLinks = () => {
    const [activeBtn , setActiveButton] = useState(0);
    const btns = ['top' , 'news' , 'invest' , 'market' , 'social'];
    
  return (
    <>
        <div className='hot-links shrink-0'>
            <Swiper
            spaceBetween={10}
            slidesPerView={`auto`}
            className='!overflow-visible'
            a11y={{enabled:true}}
            >
                {btns.map((text , i) => (
                    <SwiperSlide key={i}>
                        <div onClick={() => setActiveButton(i)} className={`${i === activeBtn ? 'active' : ''} capitalize`}>{text}</div>
                    </SwiperSlide> 

                ))}
            </Swiper>
        </div>
    </>
  )
}

export default HotLinks