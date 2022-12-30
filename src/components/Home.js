import { Box, styled } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../css/home.css'
import { banner, bestOfElectronic } from '../data/data'
import BeautyFoodToy from './Carousel/BeautyFoodToy'
import Cricket from './Carousel/Cricket'
import Electronic from './Carousel/Electronic'
import Winter from './Carousel/Winter'

import Layout from './layouts/Layout'
import Navbar from './Navbar'


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

const Images = styled('img')({
  width: '100%',
  height: 300,
})
const CarouselContainer = styled(Box)``
const ElectronicContainer = styled(Box)`
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
`
const Home = () => {
  return (
    <div className="home">
      <Layout>
        <Navbar />
        <CarouselContainer>
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
              {banner.map((info) => (
                <span className="bannerSpan" key={info.id}>
                  <Images src={info.banner} alt="empty" />
                </span>
              ))}
            </Carousel>
        </CarouselContainer>
        <Electronic />
        <BeautyFoodToy />
        <Winter />
        <Cricket />
      </Layout>
    </div>
  )
}

export default Home
