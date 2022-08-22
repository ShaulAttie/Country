import './CountryList.css'

function CountryList({ src, name, capital, continents, setClickName }) {

    const continentsArr = [
        { continent: "Europe", style: { borderColor: "blue" } },
        { continent: "North America", style: { borderColor: "purple" } },
        { continent: "South America", style: { borderColor: "green" } },
        { continent: "Africa", style: { borderColor: "brown" } },
        { continent: "Oceania", style: { borderColor: "red" } },
        { continent: "Asia", style: { borderColor: "yellow" } },
        { continent: "Antarctica", style: { borderColor: "grey" } }
    ]


    return (
        continentsArr.map((item) => (item.continent === continents[0]) &&
            <div onClick={() => setClickName(name)} value={name} className="countryList_container" style={item.style} key={name}>
                <div className="countryList_img">
                    <img src={src} alt={name} />
                </div>
                <div className="countryList_info">
                    <div><b>{name}</b> - {capital}</div>
                    <div>{continents}</div>
                </div>
            </div>
        )
    )
}

export default CountryList