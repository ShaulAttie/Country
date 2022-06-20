import { useState } from "react"
import Count from "./Count"
import SearchBar from "./SearchBar"
import CountryList from "./CountryList"
import PopupWindow from "./PopupWindow"
import './Layout.css'

function Layout(props) {

    const [searchName, setSearchName] = useState('')
    const [clickName, setClickName] = useState('')
    const [cntCountries, setCntCountries] = useState(250)
    const [isOpen, setIsOpen] = useState(false)

    const searchOnchangeHandler = (e) => {
        let result = []
        // result = props.list.filter(elem => elem.name.common.toLowerCase().includes(e.target.value))
        result = props.list.filter(elem => elem.name.common.toLowerCase().startsWith(e.target.value))
        setSearchName(e.target.value.toLowerCase())
        setCntCountries(result.length)
    }

    const countryOnclickHandler = (e) => {
        // console.dir(e.target);
        
        if (e.target.nodeName == 'DIV') {
            setClickName(e.target.childNodes[0].childNodes[0].data)
            // console.dir(e.target.childNodes[0].childNodes[0].data);
        }
        if (e.target.nodeName == 'IMG') {
            setClickName(e.target.parentElement.childNodes[1].childNodes[0].innerText)
            // console.dir(e.target.parentElement.childNodes[1].childNodes[0].innerText);
        }
        if (e.target.nodeName == 'B') {
            setClickName(e.target.innerText)
            // console.dir(e.target.innerText);
        }
        setIsOpen(true)
    }

    const ulOnclickHandler = (e) => {
        setIsOpen(false)
    }

    return (
        <div>
            <div id="header">
                <div id="count">
                    <Count value={cntCountries} />
                </div>
                <div id="search_bar">
                    <SearchBar onChange={searchOnchangeHandler} />
                </div>
            </div>
            <div id="main">
                <div id="section01">
                    <ul className="country" onClick={countryOnclickHandler}>
                        {props.list.map((elem) =>
                            elem.name.common.toLowerCase().startsWith(searchName) ?
                                <CountryList name={elem.name.common} src={elem.flags.png} capital={elem.capital} continents={elem.continents} key={Math.random().toString()} /> : null)}
                    </ul>
                </div>
                <div id="section02">
                    <div id="country" >
                        {props.list.map((elem) => elem.name.common === clickName &&
                            (<ul key={Math.random() * (2).toString()}>
                                {<PopupWindow elem={elem} onClick={ulOnclickHandler} trigger={isOpen} key={Math.random() * (3).toString()} />}
                            </ul>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Layout
