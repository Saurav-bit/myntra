import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './App.css';
import AddBanner from './Components/AddBanner';
import MainFilter from './Components/FilterSection/MainFilter';
import Location from './Components/Location';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar';
import data from "./Data.js";


function App() {
  const [gender, setgender] = useState("Men");
  const handleChange=(value)=>{
    setgender(value);
  }
  // console.log(gender)
  const filteredList=data.filter((item)=>{return item.gender===gender});



  
  return (
    <div >
     
      <NavBar/>
      <AddBanner/>
      <Location/>
      <div className='margin-all show-values'>
      <h6>Shirts For Men & Women</h6>

      </div>
      <div className='main-body'>
      <MainFilter GenderChange={handleChange} list={filteredList}/>
      <Main filter_gender={gender} list={filteredList}/>
      </div>

      

    
      
      
      
    </div>
  );
}

export default App;
