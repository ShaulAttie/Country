import { useEffect, useState } from "react"
import Layout from "./Components/Layout";

const [list, setList] = useState([])
//shinui stam
useEffect(getCountries,
  [])

function getCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      setList(data);
      // console.log(data);
    })
}
function App() {

 
  return (
    <>
      <Layout list={list} />
    </>
  );
}

export default App;
