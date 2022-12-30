import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../reduxToolkit/feature/auth/authSlice'
import Layout from './layouts/Layout'
const Register = () => {
  const [values, setValues] = useState({
    firstName:'',lastName:'',email:'',password:'',contactNumber:''
  })
 const dispatch = useDispatch()
 const handleChange=(event)=>{
  const value = event.target.value
  setValues({
    ...values,
    [event.target.name]:value
  })
 }
const formSubmit=()=>{

  dispatch(createUser(values))
}
  return (
    <Layout>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
          height: '500px',
          margin: '70px auto',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Box
          style={{
            color: 'white',
            backgroundColor: '#2874f0',
            padding: '30px 10px 10px 15px',
            width: '30%',
            height: '92%',
          }}
        >
          <Typography
            style={{ fontSize: '20px', height: '20%', paddingBottom: '20px' }}
          >
            Looks like you're new here!
          </Typography>
          <label style={{ height: '30%', fontSize: '13px' }}>
            Sign up with your mobile number
          </label>
          <Box
            style={{
              height: '50%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
            }}
          >
            <img
              src="/login/register.png"
              alt="empty"
              style={{ width: '100%', height: '150px', borderRadius: '5px' }}
            />
          </Box>
        </Box>
        <Box
          component="form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            height: '100%',
            padding: '15px 10px 0px 10px',
          }}
        >
          <TextField
            style={{ height: '12%' }}
            id="standard-basic"
            label="Enter First Name"
            variant="standard"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <TextField
            style={{ height: '12%' }}
            id="standard-basic"
            label="Enter Last Name"
            variant="standard"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          <TextField
            style={{ height: '12%' }}
            id="standard-basic"
            label="Enter Email"
            variant="standard"
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            style={{ height: '12%' }}
            id="standard-basic"
            label="Enter Password"
            variant="standard"
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          <TextField
            style={{ height: '12%' }}
            id="standard-basic"
            label="Enter Phone"
            variant="standard"
            name="contactNumber"
            value={values.contactNumber}
            onChange={handleChange}
          />

          <label style={{ height: '10%', fontSize: '12px', color: 'grey' }}>
            By continuing, you agree to Flipkart's
            <a
              href="/terms"
              style={{ textDecoration: 'none', padding: '0px 2px 0px 2px' }}
            >
              Terms of use
            </a>
            and
            <a
              href="/privacy"
              style={{ textDecoration: 'none', padding: '0px 2px 0px 2px' }}
            >
              privacy policy
            </a>
          </label>
          <Button
            style={{
              height: '10%',
              width: '100%',
              margin: '10px auto',
              backgroundColor: '#fb641b',
              color: 'white',
            }}
            onClick={()=>formSubmit()}
          >
            Continue
          </Button>

          <Link
            to="/login"
            style={{
              height: '10%',
              marginTop: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            <Button>Exiting user? Login</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default Register
