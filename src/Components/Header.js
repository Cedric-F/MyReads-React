import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link, Route } from 'react-router-dom'
import { Nav, Navbar, Header, Brand, NavItem, Toggle, Form, Text, Image } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class Head extends Component {

	componentDidMount() {
		console.log('Header mounted');
	}

	render() {
		return (
			<Navbar style={{"backgroundColor": "#0c0c0c", "border": "none", "boxShadow": "0px 6px 5px 1px rgba(0,0,0,0.75)"}}>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <Link to='/'><Image style={{"max-height": "100%"}} src={require('../icons/brand.png')} /></Link>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			      <NavItem eventKey={1}>
			        Search a book
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		)
	}

}

export default Head