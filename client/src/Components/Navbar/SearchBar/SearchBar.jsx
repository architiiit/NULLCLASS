import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <>
        <div className="SearchBar_Container">
            <div className="SearchBar_Container2">
                <div className="search_div">
                <input type="text" className="iBox_SearchBar" />
                <FaSearch
                    className="searchIcon_SearchBar"
                /> 
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar
