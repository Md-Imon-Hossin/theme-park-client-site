import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
// import useFirebase from '../../hooks/useFirebase';
const Header = () => {
  const {user,logOut} = useAuth()
    return (
<>
  <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky='top'>
    <Container>
    <Navbar.Brand href="#home">Water Boom</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/orderPlace">OrderPlace</Nav.Link> */}

      { user?.email && <button onClick={logOut} className='btn btn-danger'>Log Out</button>}

      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
  
  


</>        
    );
};

export default Header;