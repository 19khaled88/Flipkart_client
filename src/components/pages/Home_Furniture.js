import React from 'react'
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
// import '../../css/home_furniture.css'
import { home_funrniture } from '../../data/data.js'
import Home_furnishers from '../Home_furniture/Home_furnishings'
import Tools_furniture from '../Home_furniture/Tools_furniture'
import Topdeals from '../Home_furniture/Topdeals'

const Home_Furniture = () => {
  const [
    banner,
    topDeals,
    Tools_hardware,
    home_furnishings,
  ] = home_funrniture.map((e) => e)
  const hfLength = home_furnishings?.home_furnishings?.length

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: hfLength - 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: hfLength - 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: hfLength - 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: hfLength - 2,
  //   },
  // }

  // const topDeal = (deals) => {
  //   const arr = []
  //   deals.topDeals.map((e, index) =>
  //     arr.push(
  //       <div>
  //         <img src={e.image} alt="No Image" width="150px" height="150px" />
  //         <h4>{e.name}</h4>
  //         <p>{e.price}</p>
  //         <p>{e.offer}</p>
  //       </div>,
  //     ),
  //   )
  //   return arr
  // }
  // const tools_hardwares = (tools) => {
  //   const arr = []
  //   tools.Tools_hardware.map((e) =>
  //     arr.push(
  //       <div key={e.id}>
  //         <img src={e.image} alt="No Image" width="150px" height="150px" />
  //         <h4>{e.name}</h4>
  //         <p>{e.price}</p>
  //         <p>{e.offer}</p>
  //       </div>,
  //     ),
  //   )
  //   return arr
  // }
  // const home_furnishing = (furnishings) => {
  //   const arr = []
  //   furnishings.home_furnishings.map((e, index) =>
  //     arr.push(
  //       <div key={e.id}>
  //         <img src={e.image} alt="No Image" width="150px" height="150px" />
  //         <h4>{e.name}</h4>
  //         <p>{e.price}</p>
  //         <p>{e.offer}</p>
  //       </div>,
  //     ),
  //   )
  //   return arr
  // }
  return (
    <div>
      <div className="banner">
        <h2>{banner.banner.title}</h2>
        <img
          src={banner.banner.image}
          alt="No image"
          width="100%"
          height="300px"
        />
      </div>
      {/* <div className="topDealTitle">
        <span>Top Deals</span>
        <button>View All</button>
      </div>
      <div className="topDeals">{topDeal(topDeals)}</div>
      <div className="toolsHardwareTitle">
        <span>Tools and Hardware</span>
        <button>View All</button>
      </div>
  <div className="toolsHardware">{tools_hardwares(Tools_hardware)}</div> */}
      <Topdeals />
      <Tools_furniture />
      <Home_furnishers />
      {/*  <div className="homeFurnishingsTitle">
        <span>Home Furnishings</span>
        <button>View All</button>
      </div>
       <div className="homeFurnishings">{home_furnishing(home_furnishings)}</div> 
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
            <img src={e.image} alt="No Image" width="150px" height="150px" />
            <h4>{e.name}</h4>
            <p>{e.price}</p>
            <p>{e.offer}</p>
          </div>
        ))}
      </Carousel>
      ;*/}
    </div>
  )
}

export default Home_Furniture
