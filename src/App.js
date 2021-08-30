import './App.css';
import {useState, useEffect,setState} from'react';
import Search from './search';
import UserList from './UserList';

function App() {
  
  return (
    <div className="App">
      <UserList/>
    </div>
  );
}

export default App;
