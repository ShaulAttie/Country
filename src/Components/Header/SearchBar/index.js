
function SearchBar({setSearchCountry}){
    return(
        <>
        <input type="text" placeholder="search" onChange={(e)=>setSearchCountry(e.target.value)}/> 
        </>
    )
}

export default SearchBar