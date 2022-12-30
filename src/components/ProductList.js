import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsBySlug } from '../actions/productList.action'
import '../css/productList.css'
import Layout from './layouts/Layout'

const ProductList = (props) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.bySlug.slugedProduct.products)
  const productByPrice = useSelector(
    (state) => state.bySlug.slugedProduct.productByPrice,
  )
  let { slug } = useParams()
  useEffect(() => {
    dispatch(getProductsBySlug(slug))
  }, [])
  const prd = (productByPrice) => {
    const dt = []
    for (let product in productByPrice) {
      if (productByPrice[product].length > 0) {
        dt.push(
          <div key={Math.random() * 100000} className="card">
            <div className="cardHeader">
              <p>
                {slug + ' mobile under'}
                {product === 'under5k'
                  ? ' tk 5000'
                  : product === 'under10k'
                  ? ' tk 10000'
                  : product === 'under15k'
                  ? ' tk 15000'
                  : product === 'under20k'
                  ? ' tk 20000'
                  : product === 'under25k'
                  ? ' tk 25000'
                  : ''}
              </p>
              <button>View all</button>
            </div>
            <div style={{ display: 'flex' }}>
              {productByPrice[product].map((item) => (
                <div key={Math.random() * 100000} className="productContainer">
                  <div className="productImgContainer">
                    {item.productPicture.map((element) => (
                      <img
                        key={Math.random() * 100000}
                        src={`http://localhost:8000/public/${element.img}`}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: '5px 0' }}>{item.name}</div>
                    <div>
                      <span>4.3</span>
                      <span>3353</span>
                    </div>
                    <div className="productPrice">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>,
        )
      }
    }
    return dt
  }

  return <Layout>{prd(productByPrice)}</Layout>
}

export default ProductList
