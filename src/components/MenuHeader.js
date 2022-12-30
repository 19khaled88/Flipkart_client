import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../actions/category.actions'
import '../css/menuheader.css'
const MenuHeader = () => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.data.categoryList)
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])
  const renderCategories = (categories) => {
    let allCategory = []
    for (let cat in categories) {
      allCategory.push(
        <li key={cat}>
          {/* {
            category[cat].parentId ? < a href={category[cat].slug}>{category[cat].name}</a> : <span>{category[cat].name}</span>
          } */}
          {category[cat].name}
          {category[cat].children.length > 0 ? (
            <ul>{subCategory(category[cat].children)}</ul>
          ) : null}
        </li>,
      )
    }
    return allCategory
  }

  const subCategory = (subCate) => {
    let subCat = []

    for (let c in subCate) {
      subCat.push(
        <li key={c}>
          {/* {subCate[c].name} */}
          <a href={subCate[c].slug}>{subCate[c].name}</a>
          {/* <Link to={subCate[c].slug}>{subCate[c].name}</Link> */}
          {subCate[c].children.length > 0 ? (
            <ul>{subCategory(subCate[c].children)}</ul>
          ) : null}
        </li>,
      )
    }

    return subCat
  }

  renderCategories(category)
  return (
    <div className="menuheader">
      {category && category.length > 0 ? renderCategories(category) : null}
    </div>
  )
}

export default MenuHeader
