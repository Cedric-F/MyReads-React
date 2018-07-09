import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {

	state = {
		query: '',
		books: []
	}

	componentDidMount() {
		console.log('Search mounted')
	}

	handleInput(input) {
		if (input) {
			BooksAPI.search(this.state.query).then(list => this.setState({query: input, books: list}))
		} else this.setState({ query: '', books: [] })
	}

	render() {
		const { books } = this.state;
		return (
			<div>
				<input type="text" placeholder="Search by Author, Genre, Title..." onChange={(e) => this.handleInput(e.target.value.trim())} />
				<div>
					<ol className="container"
					style={{
						"listStyleType": "none",
						"display": "flex",
						"flexDirection": "row",
						"flexWrap": "wrap",
						"width": "100%",
						"alignItems:": "center",
						"justifyContent": "left"
					}}>
						{books && books.map(book => {
							if (!book.hasOwnProperty('averageRating')) book.averageRating = 2.5;
							return (
							<li key={book.id} style={{"margin": "10px"}}>
								<Book book={book} />
							</li>
						)})}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search;