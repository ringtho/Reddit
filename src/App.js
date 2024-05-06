import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main";

function App() {
  const [url, setUrl] = useState('')
  const [query, setQuery] = useState('')
  
  return (
    <div className="app">
      <Navbar query={query} setQuery={setQuery} />
      <Main query={query} url={url} setUrl={setUrl} setQuery={setQuery} />
      <Footer />
    </div>
  )
}

export default App;
