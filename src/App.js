import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=YidoSBBg4BMFmJkxVqBSWi8WikKXICPm&q=${query}&limit=10&offset=0&rating=g&lang=en`)
        const json = await (await response).json()
        console.log({json})
        setResults(json.data.map(item=>{
          return item.images.preview.mp4
        }))
      } catch (error) {}
    }
    if(query !== '') {
      fetchData()
    }
  },[query])
  
  return (
    <div className="App">
      <h1>GIFs search</h1>
      <form onSubmit={e => {
        e.preventDefault();
        setQuery(search)
      }}>
        <input
        value={search}
        onChange={e => setSearch(e.target.value)}
          placeholder="Search for GIFs"
          />
        <button type="submit">Search</button>
      </form>
      <br/>
      {results.map(item => 
          (<video autoPlay loop key={item} src={item}/>))
      }
    </div>
  );
}

export default App;
