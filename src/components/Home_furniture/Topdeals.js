import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../css/home_furniture.css'
import { home_funrniture } from '../../data/data.js'
const Topdeals = () => {
  const [
    banner,
    topDeals,
    Tools_hardware,
    home_furnishings,
  ] = home_funrniture.map((e) => e)
  console.log(topDeals)
  const tdLength = topDeals?.topDeals?.length
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: tdLength - 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: tdLength - 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: tdLength - 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: tdLength - 2,
    },
  }
  return (
    <div>
      <div className="topDealTitle">
        <span>Top Deals</span>
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
        transitionDuration={1000}
        responsive={responsive}
        className="topDeals"
      >
        {topDeals.topDeals.map((e) => (
          <div>
            <div className="img-hover-zoom img-hover-zoom--zoom-n-rotate">
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

export default Topdeals
