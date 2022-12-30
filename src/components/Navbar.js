import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import '../css/nav.css'
import { data } from '../data/data'
const Navbar = () => {
  const [activeId, setActiveId] = useState('')
  const location = useLocation()
  const handleActive = (id) => {
    setActiveId(id)
  }

  const ifSubitemHas = (data, id) => {
    let result = []
    if (data?.subItem && data?.subItem.length > 0) {
      // <KeyboardArrowUpIcon className='up'/>
      data.id == activeId
        ? result.push(<KeyboardArrowUpIcon key={id} className="up" />)
        : result.push(<KeyboardArrowDownIcon key={id} className="down" />)
    }
    return result
  }

  const handleDeactive = (id) => {
    setActiveId('')
  }

  const subItems = (sbItem, id) => {
    let array = []
    let subArray = []
    for (let sb in sbItem) {
      array.push(
        <ul key={id} style={{ marginBottom: '3px', marginTop: '3px' }}>
          <li
            style={{
              listStyle: 'none',
              paddingLeft: '0px',
              paddingTop: '0px',
              paddingBottom: '0px',
              color: 'black',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span> {Object.keys(sbItem[sb])}</span>
            </div>
          </li>
        </ul>,
      )
    }

    return array
  }

  const customFunc = (data) => {
    let array = []
    for (let info in data) {
      array.push(data[info])
    }
    return array
  }
  const result = customFunc(data)
  result.map((info) =>
    info.subItem && info.subItem !== undefined
      ? info.subItem.forEach((element, index) => {
          for (let elem in element) {
            if (element[elem] && element[elem].length > 0) {
              element[elem].map((insider) => insider)
            }
          }
        })
      : null,
  )

  const clickSubmenu = (name) => {
    console.log(name)
  }
  const clickDeepSubmenu = (name) => {
    console.log(name)
  }
 
  return (
    <>
      {/*
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '55px 0px 20px 0px',
          padding: '0px 0px 15px 0px',
        }}
        sx={{ boxShadow: 3 }}
        className="menu-bar"
      >
        {data.map((info) => (
          <span key={info.id}>
            <Box
              style={{
                dispatch: 'flex',
                textAlign: 'center',
                alignItems: 'center',
              }}
              className={info.id == activeId ? 'active' : 'inactive'}
              onMouseOver={() => handleActive(info.id)}
              onMouseLeave={() => handleDeactive(info.id)}
            >
              <img
                src={info.icon}
                alt="empty"
                style={{ width: '50px', height: '50px', padding: 0, margin: 0 }}
              />

              <Box style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ padding: 0, margin: 0 }}>{info.name}</p>
                <Box className="sub-menu">
                  {subItems(info.subItem, info.id)}
                </Box>
                {ifSubitemHas(info, info.id)}
              </Box>
            </Box>
          </span>
        ))}
            </Box>  */}

      <Box
        sx={{ boxShadow: 3 }}
        className={location.pathname === "/" ? "menu_bar" : "small_menu_bar"}
      >
        <ul>
          {result.map((info,index) => (
            <li
              className={info.id == activeId ? 'active' : 'inactive'}
              onMouseOver={() => handleActive(info.id)}
              onMouseLeave={() => handleDeactive(info.id)}
              key={index}
            >
             
               { location.pathname === "/" ? 
                <Link to={info.link}>
                  <div>
                    {
                      <img
                        src={info.image}
                        alt="empty"
                      
                      />
                    }
                    <span>
                      {info.name}
                    </span>
                  </div>
                </Link> :
                <>
                  <Link to={info.link}>
                  <div>
                    <span>
                      {info.name}
                      {info.subItem && info.subItem !== undefined ? (
                        info.id == activeId ? (
                          <i className="fas fa-caret-up"></i>
                        ) : (
                          <i className="fas fa-caret-down"></i>
                        )
                      ) : null}
                    </span>
                  </div>
                  </Link>
                  <div
                    className={
                      info.subItem && info.subItem !== undefined
                        ? 'dropdown_menu'
                        : null
                    }
                  >
                    <ul>
                      {info.subItem && info.subItem !== undefined
                        ? info.subItem.map((submenu,index) => (
                            <li key={index}>
                              <span onClick={() =>clickSubmenu(Object.keys(submenu)[1])}>
                                <p>
                                  {Object.keys(submenu)[1]}
                                </p>
                                {/* <i
                                
                                  className="fas fa-caret-right"
                                >

                                </i> */}
                              </span>
                              <div className="dropdown_menu-1">
                                <ul>
                                  {Object.values(submenu)[1].length > 0
                                    ? Object.values(
                                        submenu,
                                      )[1].map((deepSubMenu,index) => (
                                        <li key={index}
                                          onClick={() =>
                                            clickDeepSubmenu(deepSubMenu)
                                          }
                                        >
                                          {deepSubMenu}
                                        </li>
                                      ))
                                    : 'Empty'}
                                </ul>
                              </div>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </>}
            
            
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}

export default Navbar
