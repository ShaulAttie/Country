import './CountryList.css'

function CountryList(props) {
    // console.log(props);
    return (
        <div onClick={props.onClick} value={props.name} className="clDiv">
            <img src={props.src} width="70px" height="70px" />
            <div >
                <b>{props.name}</b> - {props.capital}<br/>
                {props.continents}
            </div>
        </div>
    )
}

export default CountryList