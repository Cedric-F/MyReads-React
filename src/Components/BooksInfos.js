import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class BooksInfos extends Component {

	state = {
		book: []
	}

	componentDidMount() {
		console.log('Book Info page mounted', this.state, this.props)
	}

	upVote(book) {
		if (book.averageRating < 5) book.averageRating += 0.5
		this.setState({"book": book})
	}

	downVote(book) {
		if (book.averageRating !== 0) book.averageRating -= 0.5
		this.setState({"book": book})
	}

	render() {
		const { book } = this.props;

		return book ? (
			<div className="book-page">
				<h1>{book.title}</h1>
				<h2>{book.subtitle}</h2>
				<div className="cover-n-rating">
					<Image src={book.imageLinks.thumbnail} alt={'Cover of' + book.title}/>
					<div className="rate">
						<div className="up-vote" onClick={() => this.upVote(book)}/>
						<span className="rate-amount">{book.averageRating}</span>
						<div className="down-vote" onClick={() => this.downVote(book)}/>
						<Image src={require('../icons/add.svg')} className="move" alt='Move'/>
					</div>
				</div>
				<h2>{book.authors.join`, `}</h2>
				<h2>Synopsis</h2>
				<p>{book.description}</p>
			</div>
		) : (<h1>foo</h1>)
	}
}

export default BooksInfos