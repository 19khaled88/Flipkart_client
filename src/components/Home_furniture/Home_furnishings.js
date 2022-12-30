import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../css/home_furniture.css'
import { home_funrniture } from '../../data/data.js'

const Home_furnishers = () => {
  const [
    banner,
    topDeals,
    Tools_hardware,
    home_furnishings,
  ] = home_funrniture.map((e) => e)
  const hfLength = home_furnishings?.home_furnishings?.length
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: hfLength - 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: hfLength - 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: hfLength - 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: hfLength - 2,
    },
  }
  return (
    <div>
      <div className="homeFurnishingsTitle">
        <span>Home Furnishings</span>
        <button>View All</button>
      </div>
      <Carousel
        infinite={true}
        autoPlaySpeed={3000}
        arrows={false}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all 500ms"
        focusOnSelect={true}
        transitionDuration={900}
        responsive={responsive}
        className="homeFurnishings"
      >
        {home_furnishings.home_furnishings.map((e) => (
          <div>
            <div className="img-hover-zoom">
              <img src={e.image} alt="No Image" width="150px" height="150px" />
            </div>
            <h4>{e.name}</h4>
            <p>{e.price}</p>
            <p>{e.offer}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Home_furnishers
