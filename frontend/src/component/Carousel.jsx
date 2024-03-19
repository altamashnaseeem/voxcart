import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const CarouselData=[1,2,3,4,5];
let i=1;

export const Carousel = () => {
    const items =CarouselData.map((item,index)=> 
        <img className='cursor-pointer' role='presentation' src={`/images/banner/banner ${index+1}.png`} alt="" />
    );


  return (
  
      <AliceCarousel
   
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
/>

  

  )

}