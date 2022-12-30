import React from 'react'
import '../../css/electronic.css'
import { electronics } from '../../data/data.js'
const Electronics = () => {
  const [banner, topDeals, explore] = electronics.map((e) => e)

  return (
    <div className="Electron">
      <div className="banner">
        <h2>{banner.banner.title}</h2>
        <img
          src={banner.banner.image}
          alt="No image"
          width="100%"
          height="300px"
        />
      </div>
      <span>
        <p>Top Deals</p>
        <p>Best Offers of the Sale</p>
      </span>
      <div className="topDeals">
        {topDeals.topDeals.map((e) => (
          <div key={e.id}>
            <div>
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
            <img src={e.image} alt="No image" />
          </div>
        ))}
      </div>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '25px', margin: '30px 0px 2px 0px' }}>
          Explore Our Range
        </p>
        <p
          style={{
            fontSize: '20px',
            color: 'GrayText',
            marginTop: '15px',
            marginBottom: '10px',
          }}
        >
          Of Gadget Must-haves
        </p>
      </span>
      <div>
        {explore.explore.map((e) => (
          <div key={e.id}>
            <img style={{borderRadius:'50%'}} src={e.image} alt="No Image" width="70px" height="70px"/>
            <div>
              <p>{e.offer}</p>
              <p>{e.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Electronics
 