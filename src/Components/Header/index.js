import "./Header.css"
import React, { useEffect, useState } from 'react'

import Count from './Count'
import SearchContinent from './SearchContinent'
import SearchBar from './SearchBar'


const Header = ({ setSearchs, cntCountries }) => {

    const [searchCountry, setSearchCountry] = useState('')
    const [searchContinent, setSearchContinent] = useState('')

    var searchs00 = []
    useEffect(() => {
        if (searchCountry || searchContinent) {
            searchs00 = [...searchs00, searchContinent, searchCountry]
        }
        setSearchs(searchs00);
    }, [searchCountry, searchContinent])

    return (
        <div className="header_container">
            <div className="header_count">
                <Count value={cntCountries} />
            </div>
            <div className="header_searchContinent">
                <SearchContinent setSearchContinent={setSearchContinent} />
            </div>
            <div className="header_search_bar">
                <SearchBar setSearchCountry={setSearchCountry} />
            </div>
        </div>
    )
}

export default Header
