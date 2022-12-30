import React from 'react'
import Carousel from 'react-multi-carousel'
import { travel } from '../../data/data.js'
import 'react-multi-carousel/lib/styles.css'
const SpecialOffer = () => {
    const [banner,traveller,classType,flight_dicount,do_not_miss_offer] = travel.map((e) => e)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      }
  return (
    <>
      <h2>Special Flight Offers</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all 500ms"
            transitionDuration={800}
            containerClass="carousel-container"
          >
            {flight_dicount.flight_dicount.map((e)=>(
              <img src={e} alt="No Image" width="100%" height="280px"/>
            ))}
          </Carousel>
    </>
  )
}

export default SpecialOffer
