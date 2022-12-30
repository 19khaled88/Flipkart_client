import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import '../css/profile.css'
import { cart } from '../data/data'
const ProfileIndex = () => {
  const [isViewAble, setViewAble] = useState('order')
  
  const viewHandler=(view)=>{
    setViewAble(view)
  }
  const cards =[
    "/amex.png",
    "/credit-card.png",
    "/credit-card(3).png",
    "/discover.png",
    "/gift-card.png",
    "/visa.png"
  ]
  return (
        <div className="profile">
        {/*Left side*/}
          <div className='profileLeft'>
            <div>
                <img src="/profileImage.png" alt="No Image" width="40px" height="40px"/>
                <span>
                    <h4>Hello</h4>
                    <h4>User Name</h4>
                </span>
            </div>
            <div>
                <h3 onClick={()=>viewHandler('order')}><img src="/received.png" alt="No Image" width="20px" height="20px" />My Oders</h3>
                <div>
                    <h3><img src="/profile.png" alt="No Image" width="20px" height="20px" />Account Settings</h3>
                    <p onClick={()=>viewHandler('profileInfo')}>Profile information</p>
                    <p onClick={()=>viewHandler('mangAddress')}>Manage Address</p>
                    <p onClick={()=>viewHandler('notiPref')}>Notification Prferences</p>
                </div>
                <div>
                    <h3><img src="/payment-method.png" alt="No Image" width="20px"  height="20px"/>Payments</h3>
                    <p onClick={()=>viewHandler('wallet')}>Phone Wallet</p>
                    <p onClick={()=>viewHandler('gift')}>Gift Cards</p>
                    <p onClick={()=>viewHandler('payDeffered')}>Pay Later</p>
                </div>
                <div>
                    <h3><img src="/box.png" alt="No Image" width="20px"  height="20px"/>My Stuff</h3>
                    <p onClick={()=>viewHandler('reward')}>My Rewards</p>
                    <p onClick={()=>viewHandler('review')}>My Reivews</p>
                    <p onClick={()=>viewHandler('myNoti')}>All Notification</p>
                    <p onClick={()=>viewHandler('wishlist')}>My Wishlist</p>
                    <p onClick={()=>viewHandler('subscrip')}>Flipkart first Subscription</p>
                </div>
            </div>
          </div>

       {/*Right side*/}
          <div className='profileRight'>
              <div>
                  {
                    cart.map((e)=>{
                      return (
                        <div key={e.id}>
                          <div>
                          <img src={e.image} alt="No Image"/>
                          </div>
                          <div>
                            {
                              e.info.map((e,index)=>{
                                return(
                                  <p>{Object.values(e)}</p>
                                )
                              })
                            }
                          </div>
                          <div>
                            <h>Quantity</h>
                          {
                            e.price.map((e)=>{
                              return(
                                <p>{Object.values(e)}</p>
                              )
                            })
                          }
                          </div>
                          <div>
                            <h2>Price</h2>
                          {
                            e.quantity.map((e)=>{
                              return(
                                <p>{Object.values(e)}</p>
                              )
                            })
                          }
                          </div>
                          <div>
                            <button>Remove</button>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
              <div>
                <div>
                  <h3>Have Coupon ?</h3>
                  <div>
                    <input type="text" placeholder='Coupon Code' /><button>Apply</button>
                  </div>
                </div>
                <div>
                  <span>
                    <p>Cost</p>
                    <p>USD 568</p>
                  </span>
                  <span>
                    <p>Dscount</p>
                    <p>USD 168</p>
                  </span>
                  <span>
                    <p>Total</p>
                    <p>USD 400</p>
                  </span>
                </div>
                <div>
                  {
                    cards.map((e)=>{
                     return <img src={e} alt="No Image" width="40px" height="40px" />
                    })
                  }
                </div>
                <div>
                  <button><img src="/before.png" alt="No Image" width="30px" height="30px" />Continue Shopping</button>
                  <button>Make Purchase<img src="/next(1).png" alt="No Image" width="30px" height="30px" /></button>
                </div>
              </div>
              
          </div>
    </div>
  )
}

export default ProfileIndex
