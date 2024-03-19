import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Data from "./../Data";
import Productcard from "./Productcard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "", background: "#C7C7C7", borderRadius:"50%"}}
      onClick={onClick}
    />
  );
}

const CarouselProduct = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    
  };

  return(
   
 
    <Slider {...settings}>
        {
          Data.map((item)=> <Productcard product={item}/>)
        }
  </Slider>
   



  )
  //  const [activeIndex, setActiveIndex] = useState(0);

  // const responsive = {
  //   0: { items: 1 },
  //   720: { items: 3 },
  //   1024: { items: 5.5 },
  // };
  //   var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   onSlideChanged:{syncActiveIndex},
  //   activeIndex:{activeIndex}

  // };

  // const slidePrev = () => setActiveIndex(activeIndex - 1);
  // const slideNext = () => setActiveIndex(activeIndex + 1);
  // const syncActiveIndex = ({ item }) => setActiveIndex(item);
  // const items = Data.map((item) => <Productcard  product={item} />);
  // return (
  //   <div className="relative px-4 lg:px-8 ">
  //     <div className="relative p-5">
  //       <AliceCarousel
          
  //         items={items}
  //         responsive={responsive}
  //         disableDotsControls
         
  //          disableButtonsControls
  //         onSlideChanged={syncActiveIndex}
  //         activeIndex={activeIndex}
  //       />
  //       {activeIndex!==items.length-5 && 
  //       (<Button
  //       variant="contained"
  //       onClick={slideNext}
  //       sx={{
  //         position: "absolute",
  //         top: "8rem",
  //         right: "0rem",
  //         color: "white",
  //         transform: "translateX(50%) rotate(90deg)",
  //         bgcolor: "white",
  //       }}
  //       aria-label="next"
  //     >
           
  //       <ArrowBackIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
  //     </Button>)
  //       }
  //       {
  //           activeIndex!==0 &&
  //          ( <Button
  //         variant="contained"
  //         onClick={slidePrev}
  //         sx={{
  //           position: "absolute",
  //           top: "8rem",
  //           left: "1rem",
  //           color: "white",
  //           transform: "translateX(-50%) rotate(-90deg)",
  //           bgcolor: "white",
  //         }}
  //         aria-label="next"
  //       >
  //         <ArrowBackIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
  //       </Button>)
  //       }
  //     </div>
  //   </div>
  // );
};
export default CarouselProduct;
