import { Box, styled } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import '../../css/electronic.css'
import { joinCricket } from '../../data/data'
const cLength = joinCricket?.length
const response = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: cLength - 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: cLength - 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: cLength - 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: cLength - 3,
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
const Cricket = () => {
  return (
    <Box
      style={{
        display: 'flex',
        width: '96%',
        height: '300px',
        padding: '20px 2px 10px 0px',
        margin: '20px',
      }}
    >
      <ViewAll
        style={{
          paddingTop: '0px',
          paddingBottom: '0px',
        }}
      >
        <p className="zoomEffect">Join Cricket & Fun!</p>
        <Link to="/page/joinCricket">
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
            src="/cricket/cricketScenario.jpg"
            alt="empty"
            style={{ width: '90%', padding: '10px 0px', margin: '20px 0px' }}
          />
        </Box>
      </ViewAll>
      <Box
        style={{
          width: '85%',
          padding: '20px 5px 10px 5px',
          boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
        }}
      >
        <Carousel
          responsive={response}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 500ms"
          transitionDuration={800}
          containerClass="carousel-contain"
        >
          {joinCricket.map((data) => (
            <span key={data.id} style={{ height: '80%' }}>
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
                {data.name == 'No Cricket' ? null : (
                  <>
                    <Box sx={hoverEffect}>
                      <img
                        src={data.image}
                        alt="empty"
                        style={{
                          width: '100%',
                          height: '66%',
                          padding: '2px 0px 5px 0px',
                          margin: '5px 0px 0px 0px',
                        }}
                      />
                    </Box>
                    <p
                      style={{
                        padding: '0px',
                        margin: '0px',
                        fontSize: '13px',
                      }}
                    >
                      {data.name}
                    </p>

                    <p
                      style={{
                        padding: '0px',
                        margin: '0px',
                        fontSize: '13px',
                      }}
                    >
                      {data.offer}
                    </p>
                  </>
                )}
              </SlideItems>
            </span>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default Cricket
