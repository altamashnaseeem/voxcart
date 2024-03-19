import React from 'react'

import {Carousel} from "./../component/Carousel"
import CarouselProduct from '../component/CarouselProduct'
import "../App.css"

const Home = () => {
  return (
    <div className='ml-8 mr-7'>
       
      <Carousel/>
       <CarouselProduct/>
       <CarouselProduct/>
       <CarouselProduct/>
       <CarouselProduct/>
     

        
    </div>
  )
}

export default Home
