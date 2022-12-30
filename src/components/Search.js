import { Box, InputBase, styled } from '@mui/material'

import React from 'react'
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`

const SearchIconWrapper = styled(Box)`
  color: blue;
`
const Search = () => {
  return (
    <SearchContainer style={{ background: '' }}>
      <InputSearchBase placeholder="Search for products" />
    </SearchContainer>
  )
}

export default Search
