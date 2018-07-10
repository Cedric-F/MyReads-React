import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import cover from '../icons/cover.png'
import search from '../icons/search.png'

class SearchPage extends Component {

	state = {
		query: '',
		books: []
	}

	componentDidMount() {
		console.log('Search mounted')
	}

	handleInput(input) {
		if (input) {
			BooksAPI.search(input)
			.then(books => {
				console.log(books)
				if (!books || "error" in books) this.setState({ query: '', books: [] })
				else {
					books.map(book => {
						for (let b of this.props.shelved) {
							if (b.id === book.id) {
								book.averageRating = b.averageRating
								book.shelf = b.shelf
							}
						}
						return book;
					})
					this.setState({query: input, books: books})
				}
			})
		} else this.setState({ query: '', books: [] })
	}

	render() {
		const { books } = this.state;
		console.log(this.state)
		return (
			<div>
				<div className="search-bar">
					<img src={search} alt='' className="search-logo" />
					<input type="text" maxLength="30" placeholder="Search by Author, Genre, Title..." onChange={(e) => this.handleInput(e.target.value)} />
				</div>
				<div className="results">
					<ul className="container"
					style={{
						"listStyleType": "none",
						"display": "flex",
						"flexDirection": "row",
						"flexWrap": "wrap",
						"width": "100%",
						"alignItems:": "center",
						"justifyContent": "left",
						"padding": "0"
					}}>
						{books && books.map(book => {
							if (!book.hasOwnProperty('averageRating')) book.averageRating = 2.5;
							return (
							<li key={book.id} style={{"margin": "10px 10px 0 0"}}>
								<Book book={book} cover={book.imageLinks ? book.imageLinks.thumbnail : cover}/>
							</li>
						)})}
					</ul>
				</div>
			</div>
		)
	}
}

export default SearchPage