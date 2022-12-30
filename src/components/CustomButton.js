import { ShoppingCart } from '@mui/icons-material'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import AddchartIcon from '@mui/icons-material/Addchart'
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { Link } from 'react-router-dom'
import { LoginDropdownItems, more } from '../data/data'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Divider, styled, Typography } from '@mui/material'
import '../css/customButton.css'

import React from 'react'
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center;
  & > button,
  & > p,
  & > div {
    font-size: 14px;
    text-align: center;

    margin: 0 10px 0 10px;
  }
`
const Container = styled(Box)`
  display: flex;
  margin-top: 3;
`
const LoginButton = styled(Button)`
  color: #2874fe;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
`

const logoutButton=styled(Button)`
  color: #2874fe;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
`
const profileButton=styled(Button)`
  color: #2874fe;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  font-size:30px;
`

const LoginDropdown = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
`
const clickHandler = (data) => {
  console.log(data)
}
const CustomButton = () => {
  const customFunc = (data) => {
    let array = []
    data.map((item, index) =>
      array.push(
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '8px',
            cursor: 'pointer',
          }}
          onClick={() => clickHandler(item.name)}
        >
          <img
            src={item.icon}
            alt="empty"
            style={{ width: '18px', height: '18px' }}
          />
          <li
            style={{
              listStyle: 'none',
              textAlign: 'start',
              padding: '7px 5px 7px 5px',
            }}
          >
            {item.name}
          </li>

          <Divider />
        </div>,
      ),
    )
    return array
  }
 const logoutHandler=()=>{
    localStorage.removeItem('loggedInTk');
    <Navigate to='http://localhost:3000/login' />
 }
  const token = useSelector((state)=>state.auth)
  const storedToken = localStorage.getItem('loggedInTk')
  
  return (
    <Wrapper>
      {
        storedToken !== null && 
        <Box>
        <Link 
          style={{ textDecoration: 'none', color: 'black'}}
          to="/page/profile"
        >
          <Typography style={{backgroundColor:'white',padding:'4px 10px 4px 10px',borderRadius:'5px' }}>
            Profile
          </Typography>
        </Link>
      </Box>
      }
      {
         storedToken !== null ? (
          <Box>
            <Link style={{ textDecoration: 'none',color:'white',padding:'0px' }} to="/">
              <Typography style={{backgroundColor:'orange',padding:'4px 10px 4px 10px',borderRadius:'5px'}} onClick={()=>logoutHandler()}>Logout</Typography>
            </Link>
          </Box>
         ) : 
         (
          <Box 
            className="login-menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Link style={{ textDecoration: 'none' }} to="/login">
              <LoginButton className="menu-button">Login</LoginButton>
            </Link>
            <ul
              className="dropdown-menu"
              key={Math.random() * 100000}
              style={{
                margin: '0px',
                padding: '2px',
                color: 'black',
                position: 'absolute',
                backgroundColor: '#fff',
                top: 35,
                borderRadius: '5px',
                // borderBottomLeftRadius: '5px',
                // borderBottomRightRadius: '5px',
                boxShadow:
                  'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                width: '180px',
              }}
            >
            <p>
            Haven't Account?{' '}
            <Link style={{ paddingLeft: '3px' }} to="/register">
              Sign-Up
            </Link>{' '}
            </p>
          <Divider />
          {customFunc(LoginDropdownItems)}
        </ul>
          </Box>
         )
      }
      {/* <Box
        className="login-menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {
          storedToken !== null ? (
            <Link style={{ textDecoration: 'none' }} to="/">
              <logoutButton onClick={()=>logoutHandler()}>Logout</logoutButton>
            </Link>
          ) : (
            <Link style={{ textDecoration: 'none' }} to="/login">
              <LoginButton className="menu-button">Login</LoginButton>
            </Link>
          )
        }
       
        <ul
          className="dropdown-menu"
          key={Math.random() * 100000}
          style={{
            margin: '0px',
            padding: '2px',
            color: 'black',
            position: 'absolute',
            backgroundColor: '#fff',
            top: 35,
            borderRadius: '5px',
            // borderBottomLeftRadius: '5px',
            // borderBottomRightRadius: '5px',
            boxShadow:
              'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            width: '180px',
          }}
        >
          <p>
            Haven't Account?{' '}
            <Link style={{ paddingLeft: '3px' }} to="/register">
              Sign-Up
            </Link>{' '}
          </p>
          <Divider />
          {customFunc(LoginDropdownItems)}
        </ul>
      </Box> */}
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        to="/becomeseller"
      >
        <Typography style={{ cursor: 'pointer' }}>Become a seller</Typography>
      </Link>
      <Box className="more-menu">
        <Typography
          className="menu-button"
          style={{
            margin: '3px',
            padding: '3px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            borderRadius: '5px',
          }}
        >
          More <KeyboardArrowDownIcon />
        </Typography>
        <ul
          className="dropdown-menu"
          key={Math.random() * 100000}
          style={{
            margin: '0px 0px 0px 3px',
            padding: '0px',
            color: 'black',
            position: 'absolute',
            backgroundColor: '#fff',
            top: 33,
            borderRadius: '5px',
            // borderBottomLeftRadius: '5px',
            // borderBottomRightRadius: '5px',
            boxShadow:
              'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            width: '180px',
          }}
        >
          {customFunc(more)}
        </ul>
      </Box>

      <Link style={{ textDecoration: 'none' }} to="/cart">
        {' '}
        <Typography
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            color: 'white',
          }}
        >
          <ShoppingCart />
          Cart
        </Typography>
      </Link>
    </Wrapper>
  )
}

export default CustomButton
