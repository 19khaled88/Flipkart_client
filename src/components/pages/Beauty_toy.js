import React from 'react'
import { beauty } from '../../data/data.js'
import '../../css/beauty.css'
const Beauty_toy = () => {
    const [banner, sales, explore] = beauty.map((e) => e)
  return (
    <div className='Beauty_toy'>
      <div className="banner">
        <h2>{banner.banner.title}</h2>
        <img
          src={banner.banner.image}
          alt="No image"
          width="100%"
          height="300px"
        />
        <button>Shop Now</button>
        <span>
            <p>5 Lakh + products</p>
            <p>10,000+ brands</p>
            <p>Quality Assured</p>
            <p>Easy Returns</p>
        </span>
        <span>
            <p>Beauty, Food, Toys & more</p>
            <p>From-------</p>
            <p>$99</p>
        </span>
      </div>
      <div>
        {
            sales.sales.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} alt="No Image" />
                    <span>
                        <p>{e.offer}</p>
                        <p>{e.name}</p>
                    </span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Beauty_toy
