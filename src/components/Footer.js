import { Box, styled,Divider } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { footer } from '../data/data'
import '../css/footer.css'

const Container = styled(Box)`
    display:flex;
    padding-bottom:10px;
    margin-bottom:10px;
    justify-content:space-evenly;
`
const InnerBox = styled(Box)`
    & > p {
        padding-top:0px;
        margin-top:0px;
    }
`
const Footer = () => {
   let about = []
   let help =  []
   let policy =[]
   let social =[]
   let MailUs= []
   let RegisteredOfficeAddress =[]
   let BottomPart =[]
   let Photo =[]
   const func =(data)=>{
        if(Object.keys(data) == 'About'){
            for(let dt in data){
                data[dt].map(info=>
                        about.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        } else if(Object.keys(data) == 'Help'){
            for(let dt in data){
                data[dt].map(info=>
                        help.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        }else if(Object.keys(data) == 'Policy'){
            for(let dt in data){
                data[dt].map(info=>
                        policy.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        }else if(Object.keys(data) == 'Social'){
            for(let dt in data){
                data[dt].map(info=>
                        social.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        }else if(Object.keys(data) == 'MailUs'){
            for(let dt in data){
                data[dt].map(info=>
                    MailUs.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        }else if(Object.keys(data) == 'RegisteredOfficeAddress'){
            for(let dt in data){
                data[dt].map(info=>
                    RegisteredOfficeAddress.push(<p key={Math.floor(Math.random() * 1000)} style={{margin:'3px'}}>{info}</p>)
                    )
            }
        }else if(Object.keys(data) == 'BottomPart'){
            for(let dt in data){
                data[dt].map(info=>
                    BottomPart.push(
                    <div key={info.id} style={{display:'flex', flexDirection:'row', alignItems:'center',paddingLeft:'10px',paddingRight:'10px',margin:'0px'}} >
                        <span style={{display:'flex', alignItems:'center',paddingRight:'5px'}}>
                            {<img style={{width:'20px', height:'20px'}} src={info.icon} alt="empty" />}
                        </span>
                        <p 
                            style={{margin:'0px'}}
                        >
                            {info.name}
                        </p>
                    </div>
                    )
                    )
            }
        }else if(Object.keys(data) == 'Photo'){
            for(let dt in data){
                data[dt].map(info=>
                    Photo.push(<img  key={info.id} style={{margin:'3px', width:'200px'}} src={info.image} alt="empty" />)
                    )
            }
        }
   }

   footer.map((data)=>func(data))
   
  return (
    <Container
        style={{
            display:'flex',
            flexDirection:'column',
            // height:'200px',
            height:'100%',
            // backgroundColor:'#172337'
            backgroundColor:'#233118',
            color:'white'
        }}
    >
        <Box style={{display:'flex',flexDirection:'row'}}>
            <Box
                style={{display:'flex',width:'60%',flexDirection:'row',justifyContent:'space-evenly', paddingTop:'15px'}}
            >
                {
                    about.length > 0  && help.length > 0 && policy.length > 0 && social.length > 0  ? (
                        <>
                            <InnerBox>
                                <p style={{fontSize:'18px', fontWeight:'bold'}}>About</p>
                                {about}
                            </InnerBox>
                            <InnerBox>
                                <p style={{fontSize:'18px', fontWeight:'bold'}}>Help</p>
                                {help}
                            </InnerBox>
                            <InnerBox>
                                <p style={{fontSize:'18px', fontWeight:'bold'}}>Policy</p>
                                {policy}
                            </InnerBox>
                            <InnerBox>
                                <p style={{fontSize:'18px', fontWeight:'bold'}}>Social</p>
                                {social}
                            </InnerBox>
                        </>
                    ) : null 
                }
            </Box>
            <Divider style={{borderColor:'white',height:'240px',margin:'auto'}} orientation="vertical" flexItem />
            <Box
            style={{display:'flex', width:'40%',fontSize:'12px',marginLeft:'15px',marginRight:'15px'}}
            >
                {
                    MailUs.length > 0  && RegisteredOfficeAddress.length > 0  ? (
                        <>
                        <Box>
                            <p style={{fontSize:'18px', fontWeight:'bold'}}>Mail Us</p>
                            {MailUs}
                            <ul className='socialIcon'>
                                <li>
                                    <a href="#">
                                    <i className="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a href="#"><i className="fab fa-google-plus-g icon"></i></a>
                                </li>
                            </ul>
                        </Box>
                        <Box>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Contact Address</p>
                        {RegisteredOfficeAddress}
                        </Box>
                        </>
                    ) : null
                }
            </Box>
        </Box>
        <Divider />
        <Box
            style={{marginTop:'15px',marginBottom:'10px',display:'flex',flexDirection:'row'}}
        >
            {
                BottomPart.length > 0  && Photo.length > 0 ? (
                    <>
                        <Box style={{display:'flex', flexDirection:'row'}}>
                            {BottomPart}
                        </Box>
                        <Box>
                            {Photo}
                        </Box>
                    </>
                ) : null
            }    
        </Box>
    </Container>
  )
}

export default Footer
