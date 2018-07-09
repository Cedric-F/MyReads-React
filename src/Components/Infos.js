import React, { Component } from 'react'
import Book from './Book'
import { Route } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class Infos extends Component {

	state = {
		book: this.props.book
	}

	componentDidMount() {
		return this.props.book.find(e => e.title === window.location.href.replace(/_/g, ' ').substr(28));
	}

	upVote(book) {
		if (book.averageRating < 5) book.averageRating += 0.5
		this.setState({"book": book})
	}

	downVote(book) {
		if (book.averageRating != 0) book.averageRating -= 0.5
		this.setState({"book": book})
	}

	render() {
		const book = this.componentDidMount();
		return (
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
		)
	}
}

export default Infos