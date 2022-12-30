import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link ,Navigate} from 'react-router-dom'
import Layout from './layouts/Layout'
import Modal from '@mui/material/Modal'
import {useDispatch,useSelector} from 'react-redux'
import { loginAccount } from '../reduxToolkit/feature/auth/authSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const Login = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.auth);
  const [values, setValues] = useState({
    email:"",password:""
  })
useEffect(()=>{
  const token = localStorage.getItem('loggedInTk')
  token !== null && <Navigate to="/profile" />
},[])
const handleChange=(event)=>{
  const data = event.target.value
  setValues({
    ...values,
    [event.target.name]:data
  })
}
const loginHandler=()=>{
    dispatch(loginAccount(values))
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
          <Typography style={{ fontSize: '20px', height: '10%' }}>
            Login
          </Typography>
          <label style={{ height: '30%' }}>
            Get access to your Orders, Wishlist and Recommendations
          </label>
          <Box
            style={{
              height: '60%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
            }}
          >
            <img
              src="/login/logo-promo.png"
              alt="empty"
              style={{ width: '100%', height: '150px', borderRadius: '5px' }}
            />
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            height: '100%',
            padding: '15px 10px 0px 10px',
          }}
        >
          <TextField
            style={{ height: '15%' }}
            id="standard-basic"
            label="Enter Email"
            name="email"
            value={values.email}
            variant="standard"
            onChange={handleChange}
          />
          <Box
            style={{
              height: '15%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              style={{ width: '80%' }}
              id="standard-basic"
              label="Enter Password"
              name="password"
              value={values.pass}
              variant="standard"
              onChange={handleChange}
            />
            <Button style={{ fontSize: '11px' }}>Forgot?</Button>
          </Box>
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
            onClick={()=>loginHandler()}
          >
            Login
          </Button>
          <h2
            style={{
              height: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="divider line one-line"
            contentEditable
          >
            Or
          </h2>
          <Button
            style={{
              height: '10%',
              marginTop: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
            onClick={handleOpen}
          >
            Request OTP
          </Button>
          <Link
            style={{
              height: '10%',
              textDecoration: 'none',
              textAlign: 'center',
              paddingTop: '15px',
            }}
            to="/register"
          >
            New to our world?
            <Button style={{ fontWeight: 'bold' }}> Register</Button>
          </Link>
        </Box>
      </Box>

      <Modal
      hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <img src="/close.png" alt="No Image" width="15px" height="15px" onClick={handleClose} style={{cursor:'pointer'}}/>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          
        </Box>
       
      </Modal>
    </Layout>
  )
}

export default Login
