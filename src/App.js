import Layout from "./Components/Layout";
import { useEffect, useState } from "react"

function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setList(data);
        // console.log(data);
      })
  }
    , [])
  //ascending
  const sortData = [...list].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common)
  })
   //descending
  //  const sortData = [...list].sort((a, b) => {
  //   return a.name.common.localeCompare(b.name.common)
  // })


  return (
    <Layout list={sortData} />
  );
}

export default App;
