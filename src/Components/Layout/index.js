import './Layout.css'

import { useEffect, useState } from "react"

import CountryList from "../CountryList"
import PopupWindow from "../PopupWindow"
import Header from '../Header'

function Layout({ list }) {
    // console.log(list);
    const [clickName, setClickName] = useState(null)
    const [cntCountries, setCntCountries] = useState(250)

    const [searchs, setSearchs] = useState([])

    const [newResult, setNewResult] = useState()

    useEffect(() => {
        var newList = [...list]

        for (let search of searchs) {
            newList = newList.filter(item => item.continents[0] === search || item.name.common.toLowerCase().startsWith(search))
        }

        setNewResult(newList)
        setCntCountries(newList.length)
    }
        , [searchs, list])

    return (
        <div>
            <Header cntCountries={cntCountries} setSearchs={setSearchs} />
            <div id="main">
                <div id="section01">
                    <div className="country" >
                        {newResult?.map((elem) => <CountryList setClickName={setClickName} name={elem.name.common} src={elem.flags.png} capital={elem.capital} continents={elem.continents} key={Math.random().toString()} />)}
                    </div>
                </div>
                <div id="section02">
                    <div id="country" >
                        {(clickName !== null) && list.map((elem) => elem.name.common === clickName &&
                            <>
                                {<PopupWindow elem={elem} setClickName={setClickName} trigger={true} key={Math.random() * (3).toString()} />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Layout
