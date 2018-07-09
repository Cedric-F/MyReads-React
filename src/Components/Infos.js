import React, { Component } from 'react'
import Book from './Book'

class Infos extends Component {

	state = {
		book: {}
	}

	render() {
		return (
			<div className="book-page">
				<Book />
			</div>
		)
	}
}

export default Infos