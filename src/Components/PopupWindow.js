import "./PopupWindow.css"

function PopupWindow(props) {


    return ( props.trigger ? 

        <div className="popup">
            <div className="popup-inner">
                <ul onClick={props.onClick} className='ulTag'>
                    <img src={props.elem.flags.png} width="100px" /><br />
                    <b>Country:</b> {props.elem.name.common}<hr />
                    <li><b>Population:</b> {props.elem.population}</li>
                    <li><b>Region:</b> {props.elem.region}</li>
                    <li><b>Subregion:</b> {props.elem.subregion}</li>
                    <li><b>Languages:</b></li>
                    {Object.values(props.elem.languages).map(elem => <ul><li>{elem}</li></ul>)}
                </ul>
            </div>
        </div> : '')
}

export default PopupWindow