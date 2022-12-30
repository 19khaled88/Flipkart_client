import React from 'react'
import { fasion } from '../../data/data.js'
import '../../css/fashion.css'
const Fashion = () => {
    const [banner,supper_start_fashion_brands,Fashion_Clothing,Fashion_Extra_offers] = fasion.map((e) => e)
    console.log(Fashion_Extra_offers)
  return (
    <div className="Fashion">
      <div className="">
        <h2>{banner.banner.title}</h2>
        <img
            src={banner.banner.image}
            alt="No image"
            width="100%"
            height="300px"
        />
      </div>
      <div>
        <span style={{display:'flex',flexDirection:'row',alignItems:'center'}}><img src="/fashion/exchange.png" alt="No image" width="50px" height="50px"/>Easy Returns & Refund</span>
        <span style={{display:'flex',flexDirection:'row',alignItems:'center'}}><img src="/fashion/authentic.png" alt="No image" width="50px" height="50px"/>100% Authentic Brands</span>
        <span style={{display:'flex',flexDirection:'row',alignItems:'center'}}><img src="/fashion/adding.png" alt="No image" width="50px" height="50px"/>10 Lakh+ Brands</span>
      </div>
      <div>
        <p>Super Star Fashion Brands</p>
        <button>See all</button>
      </div>
      <div>
        {
            supper_start_fashion_brands.supper_start_fashion_brands.map((e,index)=>(
               
                  <div key={index}>
                    <img src={e.image} alt="No Image" width="150px" height="150px"/>
                    <h4>{e.name}</h4>
                    <p>{e.offer}</p>
                    <p>{e.type}</p>
                  </div>
                 
                
            ))
        }
      </div>
      <div>
        <p>Fashion Clothing</p>
        <button>See all</button>
      </div>
      <div>
      {
            Fashion_Clothing.Fashion_Clothing.map((e,index)=>(
                <div key={index}>
                    <div>
                      <img src={e.image} alt="No Image" width="150px" height="150px"/>
                    </div>
                    <h4>{e.name}</h4>
                    <p>{e.offer}</p>
                    <p>{e.Type}</p>
                </div>
            ))
        }
      </div>
      <div>
        <p>Fashion Extra Offers</p>
        <button>See all</button>
      </div>
      <div>
      {
            Fashion_Extra_offers.Fashion_Extra_offers.map((e,index)=>(
                <div key={index}>
                    <div>
                      <img src={e.image} alt="No Image" width="150px" height="150px"/>
                    </div>
                    <h4>{e.name}</h4>
                    <p>{e.offer}</p>
                    <p>{e.Type}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Fashion
