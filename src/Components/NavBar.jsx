import React from 'react'
import "./NavBar.css"
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const hist=useNavigate();
    return (
        <div >
            <Navbar bg="light" expand="lg" fixed="top" className='Navbar'>
  {/* <Container> */}
    <Navbar.Brand href="#" className='logo' onClick={()=>{
      hist("")
    }}></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
        
     
      <div className='nav-bar-items'>
        <div className='nav-options-menu'>
        <Nav.Link href="#"  className='nav-item'>MEN</Nav.Link>
        <Nav.Link href="#link" className='nav-item' >WOMEN</Nav.Link>
        <Nav.Link href="#link" className='nav-item'>KIDS</Nav.Link>
        <Nav.Link href="#link" className='nav-item'>HOME & LIVING</Nav.Link>
        <Nav.Link href="#link" className='nav-item'>BEAUTY</Nav.Link>
        <Nav.Link href="#link" className='nav-item'>STUDIO</Nav.Link>
        </div>

        <div className='nav-search'>

        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        label="Search"
  placeholder='Search'

/>
      </div>

<div className='nav-icons'>
      <IconButton>
      <PersonIcon/>
          </IconButton>
      
          <IconButton>
          <FavoriteIcon/>
          </IconButton>
          <IconButton>
          <ShoppingBag/>
          </IconButton>
          </div>
         
     
     
      
          </div>
     
      
    </Navbar.Collapse>
   
  {/* </Container> */}
</Navbar>
            
        </div>
    )
}

export default NavBar
