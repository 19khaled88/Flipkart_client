// import TabList from '@mui/lab/TabList'
// import TabPanel from '@mui/lab/TabPanel'
import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/tab.css'
import { becomeseller, question } from '../data/data'
const Become = () => {
  const [value, setValue] = React.useState('1')
  const [tabIndex, setTabIndex] = useState(0)
  const [toggleState, setToggleState] = useState(0)

  const toggleHandler = (index) => {
    setToggleState(index)
  }

  // const customQuestionPart = (question) => {
  //   let noImage = []
  //   let imagedData = []

  //   noImage.push(
  //     <div className="contain">
  //       <div className="block-tabs">
  //         {question.map((data, index) => (
  //           <div
  //             onClick={() => toggleHandler(index)}
  //             style={{
  //               cursor: 'pointer',
  //               fontSize: '20px',
  //               fontWeight: 'bold',

  //               margin: '20px 0px 10px 0px',
  //             }}
  //             keys={index + 1}
  //             className={`tabs`}
  //           >
  //             {Object.keys(data)[0]}
  //           </div>
  //         ))}
  //       </div>
  //       <div className={`content-tabs`} style={{ textAlign: 'center' }}>
  //         {question.map((data, index) => (
  //           <div
  //             className={toggleState === index ? 'active' : 'inactive'}
  //             style={{
  //               display: 'flex',
  //               flexDirection: 'row',
  //               width: '95%',
  //               margin: 'auto',
  //               justifyContent: 'space-evenly',
  //             }}
  //           >
  //             {Object.values(data)[0].length > 1
  //               ? Object.values(data)[0].map((info) => (
  //                   <div style={{ display: 'flex', flexDirection: 'column' }}>
  //                     <span
  //                       style={{
  //                         backgroundColor: '#3392f3',
  //                         borderRadius: '50%',
  //                         height: '40px',
  //                         display: 'flex',
  //                         flexDirection: 'row',
  //                         justifyContent: 'center',
  //                         alignItems: 'center',
  //                         width: '40px',
  //                         margin: 'auto',
  //                       }}
  //                     >
  //                       {index + 1}
  //                     </span>
  //                     <p style={{ fontSize: '17px', fontWeight: 'bold' }}>
  //                       {Object.keys(info)[1]}
  //                     </p>
  //                     <p>{Object.values(info)[1][0]}</p>
  //                     <div>
  //                       {Object.values(info)[1][1].map((ar) => (
  //                         <p
  //                           style={{
  //                             display: 'flex',
  //                             flexDirection: 'row',
  //                             alignItems: 'center',
  //                           }}
  //                         >
  //                           <img
  //                             src="/correct.png"
  //                             alt="empty"
  //                             style={{ width: '20px', height: '20px' }}
  //                           />
  //                           {ar}
  //                         </p>
  //                       ))}
  //                     </div>
  //                   </div>
  //                 ))
  //               : Object.values(data)[0].length === 1 &&
  //                 Object.values(data)[0].length !== 0
  //               ? console.log(Object.keys(Object.values(data)[0][0]))
  //               : null}
  //           </div>
  //         ))}
  //       </div>
  //     </div>,
  //   )
  //   return noImage
  // }

  const customQuestionPart = (question) => {
    let noImage = []

    noImage.push(
      question.map((data, index) => {
        return (
          <div
            onClick={() => toggleHandler(index)}
            className="contain"
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',

              justifyContent: 'center',
            }}
          >
            {data.title}
          </div>

          // <div
          //   className={`content-tabs ${
          //     index === toggleState ? 'active' : 'inactive'
          //   }`}
          //   style={{ display: 'flex', flexDirection: 'column' }}
          // >
          //   {Object.keys(data).map((data) => {
          //     return data !== 'title' ? <p>{data}</p> : null
          //   })}
          // </div>
        )
      }),
    )
    return noImage
  }
  const chartData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ]

  const customFunc = (becomeseller) => {
    const array = []
    becomeseller.map((item, index) => {
      const { id, name, image, data } = item
      array.push(
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            width: '33%',
          }}
          key={index}
        >
          <img
            src={image}
            alt="empty"
            style={{ width: '100px', height: '100px', padding: '10px' }}
          />
          <div
            style={{ position: 'relative', height: '100%', padding: '10px' }}
          >
            <p
              style={{
                textAlign: 'justify',
                padding: '0px',
                margin: '0px',
                height: '90%',
              }}
            >
              {data}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                padding: '0px 0px 15px 0px',
                margin: '0px 0px 10px 0px',
                position: 'absolute',
                bottom: '0',
                textOverflow: 'ellipsis',
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                height: '10%',
              }}
            >
              {name}
            </p>
          </div>
        </div>,
      )
    })
    return array
  }

  const barTower = () => {
    let array = []
    let data = [
      ['b', 40],
      ['Demands', 50],
      ['Participate campaign', 60],
      ['Promosions', 70],
      ['Competitive price', 80],
      ['s', 90],
      ['Take help', 100],
      ['Quick delivery', 110],
      ['Best Product', 120],
      ['g', 130],
    ]

    data.map((num) => {
      array.push(
        <div style={{ height: '100%', position: 'relative' }}>
          <p
            style={{
              position: 'absolute',
              bottom: '0',
              padding: '0px',
              marginTop: `${num[1] + 5}px`,
              marginBottom: `${num[1] + 5}px`,
            }}
          >
            {num[0] === 'b' ? (
              <img
                src="/chart/b.png"
                alt="empty"
                style={{ width: '40px', height: '40px' }}
              />
            ) : num[0] === 's' ? (
              <img
                src="/chart/s.png"
                alt="empty"
                style={{ width: '40px', height: '40px' }}
              />
            ) : num[0] === 'g' ? (
              <img
                src="/chart/g.png"
                alt="empty"
                style={{ width: '40px', height: '40px' }}
              />
            ) : (
              num[0]
            )}
          </p>
          <span
            style={{
              backgroundColor: '#00b8f0',
              width: '30px',
              height: `${num[1]}px`,
              position: 'absolute',
              bottom: '0',
            }}
          ></span>
        </div>,
      )
    })
    return array
  }

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '95%',
          margin: 'auto',
          height: '70px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: '100%',
          }}
        >
          <Link style={{ width: '120px' }} to="/">
            <img
              src="/Flipkart-sellers-hub.jpg"
              alt="empty"
              style={{ width: '100%', height: '90%' }}
            />
          </Link>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              textDecoration: 'none',
              listStyle: 'none',
              justifyContent: 'space-evenly',
              width: '80%',
              alignItems: 'center',
            }}
          >
            <li style={{ padding: '0px', margin: '0px' }}>Free Structure</li>
            <li>Services</li>
            <li>Resources</li>
            <li>FAQs</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '35px',
            width: '25%',
          }}
        >
          <button
            style={{
              color: 'black',
              height: '100%',
              width: '45%',
              backgroundColor: '#FFCC00',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Start Selling
          </button>
          <button
            style={{
              color: 'white',
              height: '100%',
              width: '45%',
              backgroundColor: '#3392F3',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Login
          </button>
        </span>
      </nav>
      <div style={{ width: '100%' }}>
        <img
          src="/sellerbanner.jpg"
          alt="empty"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          margin: 'auto',
          gap: '25px',
          paddingTop: '20px',
          height: 'auto',
        }}
      >
        {customFunc(becomeseller)}
      </div>
      <Divider style={{ paddingTop: '20px' }} />

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '95%',
          margin: 'auto',
        }}
      >
        {customQuestionPart(question)}
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: '200px',
          marginBottom: '30px',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src="/chart/business-report.png"
            alt="empty"
            style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              bottom: '0',
            }}
          />
        </div>
        {barTower()}

        <div style={{ position: 'relative' }}>
          <img
            src="/chart/winner.png"
            alt="empty"
            style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              bottom: '0',
            }}
          />
        </div>
      </Box>
    </>
  )
}

export default Become
