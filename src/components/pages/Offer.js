import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import '../../css/singlePage.css'
import { offers } from '../../data/data'
const Offer = () => {
  return (
    <Box
      style={{
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        margin: 'auto',
        width: '98%',
        paddingBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          width: '98%',
          padding: '15px',
          margin: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '3px',
          }}
        >
          <p
            style={{
              margin: '0px',
              padding: '0px 0px 5px 0px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Deals of the Day
          </p>
          <Button variant="contained">View All</Button>
        </div>

        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '10px',
          }}
        >
          {Object.values(offers).map((val, index) => {
            if (val.target == 'DealsOfTheDay') {
              return (
                <div key={index}>
                  <div className="img-hover-zoom">
                    <img
                      src={val.image}
                      alt="empty"
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  <span>
                    <p
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '150px',
                        height: '1.2em',
                        overflow: 'hidden',
                      }}
                    >
                      {val.name}
                    </p>
                    <p style={{ fontSize: '12px' }}>{val.offer}</p>
                  </span>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          width: '98%',
          padding: '15px',
          margin: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '3px',
          }}
        >
          <p
            style={{
              margin: '0px',
              padding: '0px 0px 5px 0px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Fashion Top Deals
          </p>
          <Button variant="contained">View All</Button>
        </div>

        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '10px',
          }}
        >
          {Object.values(offers).map((val, index) => {
            if (val.target == 'FashionTopDeals') {
              return (
                <div key={index}>
                  <div className="img-hover-zoom">
                    <img
                      src={val.image}
                      alt="empty"
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  <span>
                    <p
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '150px',
                        height: '1.2em',
                        overflow: 'hidden',
                      }}
                    >
                      {val.name}
                    </p>
                    <p style={{ fontSize: '12px' }}>{val.offer}</p>
                  </span>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          width: '98%',
          padding: '15px',
          margin: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '3px',
          }}
        >
          <p
            style={{
              margin: '0px',
              padding: '0px 0px 5px 0px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Top Of Offers
          </p>
          <Button variant="contained">View All</Button>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '10px',
          }}
        >
          {Object.values(offers).map((val, index) => {
            if (val.target == 'TopOfOffers') {
              return (
                <div key={index}>
                  <div className="img-hover-zoom">
                    <img
                      src={val.image}
                      alt="empty"
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  <span>
                    <p
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '150px',
                        height: '1.2em',
                        overflow: 'hidden',
                      }}
                    >
                      {val.name}
                    </p>
                    <p style={{ fontSize: '12px' }}>{val.offer}</p>
                  </span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </Box>
  )
}

export default Offer
