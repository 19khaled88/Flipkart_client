import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import Search from './Search'

const Cart = () => {
  const [toggle, setToggle] = useState(1)
  const toggleHandler = (id) => {
    setToggle(id)
  }
  return (
    <div>
      <nav
        style={{
          backgroundColor: '#2874f0',
          height: '56px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '10px 0px 10px 50px',
            paddingLeft: '20px',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          <Link to="/">
            {' '}
            <img
              src="/Flipkart-Logo-2007.png"
              alt="empty"
              style={{ width: '40', height: '30px' }}
            />
          </Link>
          <Search />
        </div>
        <Link style={{ textDecoration: 'none' }} to="/login">
          <Button
            style={{
              margin: '10px 50px 10px 0px',
              width: '80px',
              backgroundColor: 'white',
              color: '#2874f0',
            }}
            variant="contained"
          >
            Login
          </Button>
        </Link>
      </nav>
      <div style={{ paddingTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            margin: 'auto',
            justifyContent: 'space-evenly',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
        >
          <p
            onClick={() => toggleHandler(1)}
            style={{ cursor: 'pointer' }}
            className={toggle === 1 ? 'isSelected' : 'notSelected'}
          >
            FlipKart
          </p>
          <p
            onClick={() => toggleHandler(2)}
            style={{ cursor: 'pointer' }}
            className={toggle === 2 ? 'isSelected' : 'notSelected'}
          >
            Grocery
          </p>
        </div>
        <div
          className={toggle === 1 ? 'cart-active' : 'cart-inactive'}
          style={{
            // display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            paddingTop: '80px',
          }}
        >
          <img
            src="/cart/empty-cart.png"
            alt="empty"
            style={{ width: '120px', height: '120px' }}
          />
          <h3>Missing Cart items?</h3>
          <p>Login to see the items you added previously</p>
          <Link style={{ textDecoration: 'none' }} to="/login">
            <span
              style={{
                backgroundColor: '#fb641b',
                color: 'white',
                margin: '15px',
                padding: '5px 15px 5px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Login
            </span>
          </Link>
        </div>
        <div
          className={toggle === 2 ? 'cart-active' : 'cart-inactive'}
          style={{
            // display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            paddingTop: '80px',
          }}
        >
          <img
            src="/cart/shopping-basket.png"
            alt="empty"
            style={{ width: '120px', height: '120px' }}
          />
          <h3>Your basket is empty!</h3>
          <p>Add items to it now.</p>
          <Link style={{ textDecoration: 'none' }} to="/shop">
            <span
              style={{
                backgroundColor: '#fb641b',
                color: 'white',
                margin: '15px',
                padding: '5px 15px 5px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Shop now
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
