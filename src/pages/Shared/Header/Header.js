import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
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
      <Nav.Link as={HashLink} to="/orderPlace">OrderPlace</Nav.Link> 
      <Nav.Link as={HashLink} to="/manageAllService">Manage All Service</Nav.Link> 
      <Nav.Link as={HashLink} to="/addService">AddService</Nav.Link> 
{ user?.email &&
  <Nav.Link as={HashLink} to="/myOrder">MyOrder</Nav.Link> 
}
      { 
      user?.email && 
 <button onClick={logOut} className='btn btn-danger'>Log Out</button>
 }
      <Navbar.Text>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>        
    );
};
export default Header;