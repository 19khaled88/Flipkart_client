import React, { useState } from 'react'
import { travel } from '../../data/data.js'
// import DatePicker from 'react-multi-date-picker'
// import DatePanel from "react-multi-date-picker/plugins/date_panel"

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import {AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs'
import {DateRangePicker,DateRange} from '@mui/x-date-pickers-pro/DateRangePicker'
import '../../css/travel.css'
import DonotMiss from '../Travel/DonotMiss.js'
import SpecialOffer from '../Travel/SpecialOffer.js'

const Travel = () => {
    const [banner,traveller,classType,flight_dicount,do_not_miss_offer,top_deal] = travel.map((e) => e)
    
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [travellers, setTravellers] = useState(0)
    const [trClass, setTrClass] = useState(null)
    const [above, setAbove] = useState(0)
    const [label, setLabel] = useState(0)
    const [below, setBelow] = useState(0)
    const [value, setValue] = useState([null, null]);
    const [travellerClass, setTravellerClass] = useState(false)
    // const [values, setValues] = useState([today, tomorrow])
    const str = ([travellers === 0 ? 'Travellers' : "total :" + travellers," | ", trClass === null ? 'class' : trClass]).toString().replaceAll(",", "")

    const traveller_class=()=>{
      setTravellerClass(true)
    }
    const btnClose=()=>{
      setTravellerClass(false)
    }

    const increase=(type,data)=>{
      
      if(data[0] == 'above 12 years' ){
        setAbove(above + 1)
        setTravellers(travellers + 1)
      }else if(data[0] == 'Between 2-12 years' ){
        setLabel(label + 1)
        setTravellers(travellers + 1)
      } else if(data[0] == 'Below 2 years'){
        setBelow(below + 1)
        setTravellers(travellers + 1)
      }
    }
    const decrease=(type,data)=>{
     
      if(data[0] == 'above 12 years' && above > 0){
        setAbove(above - 1)
        setTravellers(travellers - 1)
      }else if(data[0] == 'Between 2-12 years' && label > 0 ){
        setLabel(label - 1)
        setTravellers(travellers - 1)
      } else if(data[0] == 'Below 2 years' && below > 0){
        setBelow(below - 1)
        setTravellers(travellers - 1)
      }
    }

    const selectClass=(input)=>{
      setTrClass(input)
    }

    const handleFrom=()=>{}
    const handleTo=()=>{}

  return (
    <div className='Travel'>
        <div className='banner'>
            <p>{banner.banner.title}</p>
            <img src={banner.banner.image} alt="No image"/>
            <div>
              <select defaultValue="" onChange={handleFrom}>
                <option value="">From</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
              <select defaultValue="" onChange={handleTo}>
                <option value="">To</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
              {/* <DatePicker 
                multiple
                value={values} 
                plugins={[
                  <DatePanel />
                 ]}
                onChange={setValues}
              /> */}
              <span>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  localeText={{start:'Check-in',end:'Check-out'}}
                >
                  <DateRangePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </React.Fragment>
                    )}
                  />

                </LocalizationProvider>
              </span>
              <span className="travellersClass">
                <input onClick={()=>traveller_class()}  type="text" value={str} placeholder='Travellers | Class'/>
                <div id={`${travellerClass === false ? "inactiveTravellerClassStatus" : "activeTravellerClassStatus"}`}>
                  <div>
                    <div>
                      <p>Travellers</p>
                        {
                          traveller.traveller.map((e,index)=>(
                            <div key={index}>
                              <div >
                                <h4>{Object.keys(e)}</h4>
                                <p>{Object.values(e)}</p>
                              </div>
                              <div>
                                <button disabled={Object.values(e)[0] == 'above 12 years' && above > 0 ? false: Object.values(e)[0] == 'Between 2-12 years' && label > 0 ? false : Object.values(e)[0] == 'Below 2 years' &&  below > 0 ? false : true} onClick={()=>decrease('-',Object.values(e))}>-</button>
                                <p>{Object.values(e)[0] == 'above 12 years' ? above : Object.values(e)[0] == 'Between 2-12 years' ? label : Object.values(e)[0] == 'Below 2 years'? below : 0}</p>
                                <button onClick={()=>increase('+',Object.values(e))}>+</button>
                              </div>
                            </div>
                          ))
                        }
                    </div>
                    <div>
                      <p>Cabin Class</p>
                      <div>
                        <span>
                          <input type="radio" id="economy" name="fav_language" defaultValue="Economy" onClick={()=>selectClass('economy')} />
                          <label htmlFor="economy">Economy</label>
                        </span>
                        <span>
                          <input type="radio" id="starter" name="fav_language" defaultValue="Starter" onClick={()=>selectClass('starter')}/>
                          <label htmlFor="starter">Starter</label>
                        </span>
                        <span>
                          <input type="radio" id="business" name="fav_language" defaultValue="Business" onClick={()=>selectClass('business')}/>
                          <label htmlFor="business">Business</label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button onClick={()=>btnClose()}>Done</button>
                </div>
              </span>
              <button>Search</button>
            </div>

        </div>
        <div>
          <SpecialOffer />
        </div>
        <div>
          <DonotMiss />
        </div>
        <h2 style={{paddingLeft:'15px'}}>Offers you shouldn't miss</h2>
        <div>
        
          {
            top_deal.top_deal.map((e)=>(
              <img  src={e} alt="No Image"/>
            ))
          }
        </div>
    </div>
  )
}

export default Travel
