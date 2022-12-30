import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'
import { data } from '../data/data'
const SmartNav = () => {
  const [activeId, setActiveId] = useState('')
  const handleActive = (id) => {
    setActiveId(id)
  }

  const handleDeactive = (id) => {
    setActiveId('')
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
    <Box
      style={{
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '40px 0px 20px 0px',
        padding: '15px 0px 5px 0px',
        position: 'relative',
      }}
      sx={{ boxShadow: 3 }}
      className="menu_bar"
    >
      <ul>
        {result.map((info) => (
          <li
            className={info.id == activeId ? 'active' : 'inactive'}
            onMouseOver={() => handleActive(info.id)}
            onMouseLeave={() => handleDeactive(info.id)}
            style={{ width: '120px' }}
            key={info.id}
          >
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link style={{ textDecoration: 'none' }} to={info.link}>
                {' '}
                {info.name}
              </Link>
              {info.subItem && info.subItem !== undefined ? (
                info.id == activeId ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )
              ) : null}
            </span>

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
                      <li key={index} style={{ width: '100%' }}>
                        <span
                          onClick={() => clickSubmenu(Object.keys(submenu)[1])}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                          }}
                        >
                          <p
                            style={{
                              padding: '0px 0px',
                              margin: '0px 0px',
                              width: '95%',
                            }}
                          >
                            {Object.keys(submenu)[1]}
                          </p>
                          <i
                            style={{
                              paddingLeft: '0px',
                              marginLeft: '0px',
                              width: '5%',
                              float: 'right',
                            }}
                            className="fas fa-caret-right"
                          ></i>
                        </span>
                        <div className="dropdown_menu-1">
                          <ul>
                            {Object.values(submenu)[1].length > 0
                              ? Object.values(submenu)[1].map((deepSubMenu ,index) => (
                                  <li
                                    key={index}
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
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default SmartNav
