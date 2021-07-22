import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [newBookmark, updateNewBookmark] = useState({
    name: "",
    url: "",
  });

  const [allBookmarks, updateAllBookmarks] = useState([]);

  const handleChange = (event)=> {
    updateNewBookmark({...newBookmark, [event.target.id]: event.target.value});
    // console.log(newBookmark);
  };

  const handleSubmit = (event)=> {
    event.preventDefault();
    updateAllBookmarks([...allBookmarks, newBookmark]);
    updateNewBookmark({
      name: "",
      url: ""
    });
  };
  // console.log(allBookmarks);

  const handleDelete = (event) => {
    const index = Number(event.target.id);
    let newList = [...allBookmarks];
    newList.splice(index,1);
    console.log(newList);
    updateAllBookmarks(newList);
    console.log(allBookmarks);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Create a New Bookmark</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Website Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            value={newBookmark.name}
            onChange={handleChange}
          />
          <br /><br />
          <label htmlFor="url">URL</label>
          <input 
            type="text" 
            name="url" 
            id="url" 
            value={newBookmark.url}
            onChange={handleChange}
          />
          <br /><br />
          <button type="submit">Submit!</button>
        </form>
        <p>------------------------</p>
        {/* <h3>{newBookmark.name}</h3>
        <h4>{newBookmark.url}</h4> */}
        {allBookmarks.map((bookmark, i) => {
          return (
            <div key={i}>
              <a className="App-link" href={bookmark.url}><p>{bookmark.name}</p></a>
              <button id={i} onClick={handleDelete}>Delete</button>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
