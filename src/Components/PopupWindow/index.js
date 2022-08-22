import "./PopupWindow.css"

function PopupWindow({ trigger, setClickName, elem }) {

    return (trigger ?

        <div className="popup" onClick={() => setClickName(null)}>
            <div className="popup-inner">
                <div  className='popup-info'>
                    <div className="img-info">
                        <img src={elem.flags.png} alt="elem.name" />
                    </div>
                    <div><b>Country:</b> {elem.name.common}</div><hr /><br/>
                    <div><b>Population:</b> {elem.population}</div>
                    <div><b>Region:</b> {elem.region}</div>
                    <div><b>Subregion:</b> {elem.subregion}</div>
                    <div><b>Languages:</b></div>
                    {Object.values(elem.languages).map(elem => <ul><li>{elem}</li></ul>)}
                    <div>On Internet</div>
                    <div><a href={elem.maps.googleMaps} target="_blank">googleMaps</a></div>
                    <div><a href={elem.maps.openStreetMaps} target="_blank">openStreetMaps</a></div>
                </div>
            </div>
        </div> : '')
}

export default PopupWindow