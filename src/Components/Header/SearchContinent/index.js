import React from 'react'
import "./SearchContinent.css"

const SearchContinent = ({setSearchContinent}) => {
    return (
        <div className='SearchContinent_Container' onChange={(e)=>setSearchContinent(e.target.value)}>
            <div><input type="radio" id="North America" name="continents" value="North America" /> <label htmlFor="North America">North America</label></div>
            <div><input type="radio" id="South America" name="continents" value="South America" /> <label htmlFor="South America">South America</label></div>
            <div><input type="radio" id="Europe" name="continents" value="Europe" /> <label htmlFor="Europe">Europe</label></div>
            <div><input type="radio" id="Africa" name="continents" value="Africa" /> <label htmlFor="Africa">Africa</label></div>
            <div><input type="radio" id="Asia" name="continents" value="Asia" /> <label htmlFor="Asia">Asia</label></div>
            <div><input type="radio" id="Antarctica" name="continents" value="Antarctica" /> <label htmlFor="Antarctica">Antarctica</label></div>
            <div><input type="radio" id="Oceania" name="continents" value="Oceania" /> <label htmlFor="Oceania">Oceania</label></div>
            <div><input type="radio" id="none" name="continents" value="" /> <label htmlFor="none">none</label></div>
        </div>
    )
}

export default SearchContinent
