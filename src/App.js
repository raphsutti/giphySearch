import './App.css';
import React, {useState} from 'react';

function App() {
  const [search, setSearch] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    console.log(search)
  }
  
  return (
    <div className="App">
      <h1>GIFs search</h1>
      <form onSubmit={onSubmit}>
        <input
        value={search}
        onChange={e => setSearch(e.target.value)}
          placeholder="Search for GIFs"
          />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
