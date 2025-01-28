
import Asset from './Asset'
import { assetList } from '../data/data'
import { useState, useEffect, useRef } from "react";


const Assets = ({ setScrollDirection , scrollDirection}) => {
  const containerRef = useRef(null);
  const [lastScroll, setLastScroll] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const currentScroll = {
        top: container.scrollTop,
        left: container.scrollLeft,
      };

      if (currentScroll.top > lastScroll.top) {
        setScrollDirection("down");
      } else if (currentScroll.top < lastScroll.top) {
        setScrollDirection("up");
      } else if (currentScroll.left > lastScroll.left) {
        setScrollDirection("right");
      } else if (currentScroll.left < lastScroll.left) {
        setScrollDirection("left");
      }

      setLastScroll(currentScroll);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  return (
    <div className={`w-full h-ful overflow-y-scroll no-scrollbar mt-6`} ref={containerRef}>
        <div className='vertical h-max px-6'>
            {assetList.map((asset , i) => <Asset key={i} asset={asset} />)}
        </div>
    </div>
  )
}

export default Assets