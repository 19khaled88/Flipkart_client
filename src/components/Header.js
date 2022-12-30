import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'
import CustomButton from './CustomButton'

import Search from './Search'

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`
const SubHeading = styled(Typography)`
  font-size: 10px;
`
const Header = () => {
  return (
    <>
      {/* <div className="header"></div> */}
      <StyleHeader>
        <Toolbar style={{ minHeight: '55px' }}>
          <Component>
            <Link to='/'>
              <img
                src="/Flipkart-Logo-2007.png"
                alt="empty"
                style={{ width: 95 }}
              />
            </Link>
            <Box>
              <SubHeading>
                Explore
                <Box component="span" style={{ color: '#ffe500' }}>
                  Plus
                </Box>
              </SubHeading>
            </Box>
          </Component>
          <Search />
          <CustomButton />
        </Toolbar>
      </StyleHeader>
     
    </>
  )
}

export default Header
