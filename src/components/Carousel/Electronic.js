import { Box, styled } from '@mui/material'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import '../../css/electronic.css'
import { bestOfElectronic } from '../../data/data'
const eLength = bestOfElectronic?.length
const response = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: eLength - 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: eLength - 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: eLength - 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: eLength - 3,
    slidesToSlide: 1,
  },
}
const hoverEffect = {
  transition: 'transform .5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}
const SlideItems = styled(Box)``
const ViewAll = styled(Box)`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: auto;
  & > p {
    font-size: 20px;
    margin: 2px 0px;
    text-align: center;
    padding: 2px 0px;
  }
`
const clickHandler = (name) => {
  console.log(name)
}
const Electronic = () => {
  return (
    <Box
      style={{
        display: 'flex',
        width: '96%',
        padding: '20px 2px 10px 0px',
        margin: '20px',
      }}
    >
      <ViewAll>
        <p className="zoomEffect">Best Electronic Goods</p>
        <Link to="/page/bestOfElectronic">
          <button
            style={{
              padding: '10px 15px',
              margin: '4px 0px',
              backgroundColor: '#2874f0',
              border: 'none',
              fontSize: '15px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
            variant="contained"
          >
            View All
          </button>
        </Link>
        <Box sx={hoverEffect}>
          <img
            src="/electronics/electronic-tool-icon-removebg-preview.png"
            alt="empty"
            style={{ width: '90%', padding: '10px 0px', margin: '20px 0px' }}
          />
        </Box>
      </ViewAll>
      <Box
        style={{
          width: '85%',
          padding: '20px 5px 10px 5px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          // boxShadow: '0 0 1px #333',
        }}
      >
        <Carousel
          responsive={response}
          infinite={true}
          autoPlaySpeed={3000}
          // autoPlay={true}
          keyBoardControl={true}
          customTransition="all 500ms"
          transitionDuration={800}
          containerClass="carousel-contain"
        >
          {bestOfElectronic.map((electronic) => (
            <span key={electronic.id} style={{ height: '100%' }}>
              <SlideItems
                style={{
                  display: 'column',
                  textAlign: 'center',
                  width: '90%',
                  margin: '0px 5px',
                  padding: '0px 5px',
                  height: '100%',
                }}
              >
                <Box sx={hoverEffect}>
                  <img
                    src={electronic.image}
                    alt="empty"
                    style={{
                      width: '100%',
                      height: '66%',
                      padding: '2px 0px 5px 0px',
                      margin: '5px 0px 0px 0px',
                    }}
                  />
                </Box>
                <p style={{ padding: '0px', margin: '0px', fontSize: '13px' }}>
                  {electronic.name}
                </p>
                <p style={{ padding: '0px', margin: '0px' }}>
                  {electronic.price}
                </p>
                <p style={{ padding: '0px', margin: '0px', fontSize: '13px' }}>
                  {electronic.product}
                </p>
              </SlideItems>
            </span>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default Electronic
