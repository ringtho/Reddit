import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  
  return (
    <div className="app">
      <Navbar setData={setData} query={query} setQuery={setQuery} />
      <Main data={data} setData={setData} query={query} />
      <Footer />
    </div>
  )
}

export default App;
