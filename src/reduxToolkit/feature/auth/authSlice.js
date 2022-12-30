import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import axiosBaseUrl from '../../../utility/url';
// import { userCreate } from './authApi';


const initialState = {
  email:'',
  role:'',
  isAuthenticated:'',
  isLoading:true,
  isError:false,
  error:'',
  token:''
}

export const createUser = createAsyncThunk("auth/createUser",async(body,{rejectWithValue})=>{
  try {
    const response = await axiosBaseUrl.post('/createUser',body)
    return response.data
  } catch (error) {
   return rejectWithValue(error.response.data)
  }
})

export const loginAccount=createAsyncThunk("auth/loginAccount",async(body,{rejectWithValue})=>{
  try {
    const response = await axiosBaseUrl.post('/loginAccount',body)
    localStorage.setItem('loggedInTk',response.data.token)
    console.log(response)
    return response.data
  } catch (error) {
   return rejectWithValue(error.response.data)
  }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
        .addCase(createUser.pending,(state,action)=>{
          state.isLoading = true;
          state.email=null;
          state.role=null;
          state.isError = false;
          state.isAuthenticated = null;
          state.token = null;
        })
        .addCase(createUser.fulfilled,(state,action)=>{
          state.isLoading = false;
          state.isError = false;
          state.error = null;
          state.role=action.payload.user.role;
          state.email = action.payload.user.email;
          state.token = null;
        })
        .addCase(createUser.rejected,(state,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.email=null;
          state.role=null;
          state.error = action.payload.message;
          state.token = null;
        })
        .addCase(loginAccount.pending,(state,action)=>{
          state.isLoading = true;
          state.email=null;
          state.role=null;
          state.isError = false;
          state.isAuthenticated =null;
          state.token = null;
        })
        .addCase(loginAccount.fulfilled,(state,action)=>{
          state.isLoading = false;
          state.isError = false;
          state.error = null;
          state.role=null;
          state.email = null;
          state.isAuthenticated = action.payload.userInfo;
          state.token = action.payload.token;
        })
        .addCase(loginAccount.rejected,(state,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.email=null;
          state.role=null;
          state.isAuthenticated =null;
          state.error = action.payload.message;
          state.token = null;
        })
    }
});

export default authSlice.reducer;