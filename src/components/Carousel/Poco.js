import { Box, styled } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { poco } from '../../data/data'
const pLength = poco?.length

const response = {
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

const SlideItems = styled(Box)`
    height:'260px',width:'100%'
`
const Poco = () => {
  return (
    <Carousel
      responsive={response}
      infinite={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      keyBoardControl={true}
      customTransition="all 500ms"
      transitionDuration={800}
      containerClass="carousel-contain"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass="carousel-item-padding-40-px"
    >
      {poco.map((brand, index) => (
        <span
          key={index}
          style={{
            height: '260px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <SlideItems
            style={{
              display: 'column',
              textAlign: 'center',
              margin: 'auto',

              width: '100%',
              height: '260px',
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img
                src={brand}
                alt="empty"
                style={{
                  width: '100%',
                  height: '260px',
                  padding: '0px',
                  margin: '0px',
                }}
              />
            </Box>
          </SlideItems>
        </span>
      ))}
    </Carousel>
  )
}

export default Poco
