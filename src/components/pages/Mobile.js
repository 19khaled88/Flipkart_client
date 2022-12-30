import { ExpandCircleDown } from '@mui/icons-material'
import '../../css/mobile.css'
import { ArrowBackIosNew } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import { brand, brandLogo, mobilePhoneLink, ram, rating } from '../../data/data'
import Poco from '../Carousel/Poco'
import Samsung from '../Carousel/Samsung'
const bLength = brandLogo?.length

const response = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: bLength - 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: bLength - 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: bLength - 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: bLength - 3,
    slidesToSlide: 1,
  },
}

const hoverEffect = {
  transition: 'transform .5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}

const SlideItems = styled(Box)`
    height:'80px',width:'80px'
`


const Mobile = () => {
  const [checked, setChecked] = useState(false)

 

  return (
    <div className="root">
      <div className="top">
        <h3>Mobile Phones</h3>
        <p>
          Mobile phones are no more merely a part of our lives. Whether it's to
          stay connected with friends and family or to keep abreast of important
          developments around the world, mobiles are no longer for sending a
          text or making a call. From budget to state-of-the-art smartphones;
          indigenous names to global big-wigs - a whole universe of mobiles
          await you on Flipkart. Whether you’re looking for waterdrop notch
          screens, a high screen to body ratio, AI-powered sensational cameras,
          high storage capacity, blazing quick processing engines or reflective
          glass designs, rest assured you won’t have to venture anywhere else
          for your smartphone needs. The information you are reading has been
          last updated on 17-Nov-22
        </p>
        <div>
          {mobilePhoneLink.map((data,index) => {
            return (
              <Link style={{ textDecoration: 'none' }}>
                <ul  key={index}>
                  {' '}
                  <li style={{ listStyle: 'none' }}>{data}</li>{' '}
                </ul>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="down">
        <div 
          className="downLeft">
          <p>Filters</p>
          <Divider />
          <div>
            <p>Categories</p>
            <Link
              to="accessories"
            >
              <Button>
                Mobile & Accessories
              </Button>
              <img
                src="/next.png"
                alt="/next.png"
              />
            </Link>
            <Link
              to="mobile"
            >
              <Button>
                Mobile
              </Button>
              <img
                src="/next.png"
                alt="/next.png"
              />
            </Link>
          </div>
          <Divider />
          <div>
            <p>Price</p>
          </div>
          <Divider />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandCircleDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Brand</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
              />
              <div>
                {brand.map((data, index) => {
                  return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                      <input type="checkbox" label={data} />
                      <legend>{data}</legend>
                    </div>
                  )
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          <Divider />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandCircleDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Customer Rating</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              {rating.map((data, index) => {
                return (
                  <div 
                   key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <input type="checkbox" label={data} />
                    <legend>{data}</legend>
                    <img
                      src="/star.png"
                      alt="empty"
                      style={{ width: '10px', height: '10px' }}
                    />
                    <p style={{ margin: '0px' }}>& above</p>
                  </div>
                )
              })}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandCircleDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>RAM</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              {ram.map((data, index) => {
                return (
                  <div 
                  key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <input type="checkbox" label={data} />
                    <legend>{data}</legend>
                  </div>
                )
              })}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="downRight" >
          <div>
            <Carousel
              responsive={response}
              infinite={true}
              autoPlaySpeed={3000}
              arrows={false}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="all 500ms"
              focusOnSelect={true}
              transitionDuration={800}
              containerClass="carousel-contain"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              itemClass="carousel-item-padding-40-px"
            >
              {brandLogo.map((brand, index) => (
                <span 
                key={index}
                  key={index} >
                  <SlideItems
                    style={{
                      display: 'column',
                      textAlign: 'center',
                      margin: '5px 5px',
                      padding: '0px 5px',
                      width: '170px',
                      height: '110px',
                      border: '1px solid gray',
                      borderRadius: '5px',
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
                      sx={hoverEffect}
                    >
                      <img
                        src={brand}
                        alt="empty"
                        
                      />
                    </Box>
                  </SlideItems>
                  <Link to="/shopnow" style={{ textDecoration: 'none' }}>
                    <Button style={{ textAlign: 'center', width: '90%' }}>
                      Shop now
                    </Button>
                  </Link>
                </span>
              ))}
            </Carousel>
          </div>

          <div>
            <Poco />
          </div>

          <div>
            <div
      
            >
              New Launches
            </div>
            <Samsung />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile
