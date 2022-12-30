import React from 'react'
import { appliance } from '../../data/data.js'
import '../../css/tv_appliance.css'
const Tv_appliance = () => {
    const [banner,products,semi_banner] = appliance.map((e) => e)
    
 
    return (
        <div className="appliance">
            <div className="banner">
                <h2>{banner.banner.title}</h2>
                <div>
                    <img
                    src={banner.banner.image}
                    alt="No image"
                    width="100%"
                    height="300px"
                    />
                    {
                        semi_banner.semi_banner.map((e,index)=>(
                            <div key={index}>
                                <img src="/tv&appliance/sort-banner.png" alt="No Image" />
                                <img src="/tv&appliance/sort-banner-1.png" alt="No Image"/>
                                <img src="/tv&appliance/sort-banner-2.png" alt="No Image"/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                {
                    products.products.map((e)=>(
                        <div key={e.id}>
                            <img src={e.image} alt="No Image" width="90px" height="90px" />
                            <p>{e.name}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <img src="/tv&appliance/price_issue.png" alt="No Image"/>
            </div>
        </div>
    )
    }

export default Tv_appliance
