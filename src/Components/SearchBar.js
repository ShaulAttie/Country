

function SearchBar(props){
    return(
        <input type="text" placeholder="search" onChange={props.onChange}/>
    )
}

export default SearchBar