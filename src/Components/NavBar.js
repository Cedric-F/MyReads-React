import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Header, Brand, NavItem, Toggle, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {

	componentDidMount() {
		console.log('Header mounted');
	}

	render() {
		return (
			<Navbar style={{"backgroundColor": "#0c0c0c", "border": "none", "boxShadow": "0px 6px 5px 1px rgba(0,0,0,0.75)"}}>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <Link to='/'><Image style={{"maxHeight": "100%"}} src={require('../icons/brand.png')} alt="Home logo" responsive/></Link>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			    <LinkContainer to="/search" className="search">
			      <NavItem eventKey={1}>
			        Search a book
			      </NavItem>
			      </LinkContainer>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		)
	}

}

export default NavBar