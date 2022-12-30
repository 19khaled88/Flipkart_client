import axios from 'axios'
export const userCreate=async(body)=>{
   const res = await axios.post('http://localhost:8000/api/user',body)
   return res
}