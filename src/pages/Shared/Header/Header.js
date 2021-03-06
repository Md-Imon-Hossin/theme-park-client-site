import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
import './Header.css'
const Header = () => {
  const {user,logOut} = useAuth()
    return (
<>
  <Navbar bg="dark"  variant="dark" collapseOnSelect expand="xl" sticky='top'>
    <Container>
    <Navbar.Brand as={HashLink} to="/home">Water Boom</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link className='text-white header-font'   as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link className='text-white header-font' as={HashLink} to="/login">Login</Nav.Link> 
      <Nav.Link className='text-white header-font' as={HashLink} to="/orderPlace">OrderPlace</Nav.Link> 

      {user?.email &&<Nav.Link className='text-white header-font' as={HashLink} to="/manageAllService">Manage All Service</Nav.Link> }
     { user?.email &&  <Nav.Link className='text-white header-font' as={HashLink} to="/addService">Add A New Service</Nav.Link> }

{ user?.email &&
  <Nav.Link className='text-white header-font' as={HashLink} to="/myOrder">MyOrder</Nav.Link> 
}
      { 
      user?.email && 
 <button onClick={logOut} className='btn btn-danger'>Log Out</button>
 }
      {user?.email &&<Navbar.Text>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>}
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>        
    );
};
export default Header;