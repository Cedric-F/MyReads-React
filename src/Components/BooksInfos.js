import React, { Component } from 'react'
import { Image, Glyphicon, Dropdown, Menu, Toggle, ButtonToolbar, MenuItem } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import cover from '../icons/cover.png'

class BooksInfos extends Component {

	state = {
		book: []
	}

	componentDidMount() {
		console.log('Book Info page mounted', this.props)
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
		const { book } = this.props.location.state;

		return book ? (
			<div className="book-page">
				<h1>{book.title}</h1>
				<h2>{book.subtitle}</h2>
				<div className="cover-n-rating">
					<Image src={book.imageLinks ? book.imageLinks.thumbnail : cover} alt={'Cover of' + book.title}/>
					<div className="rate">
						<div className="up-vote" onClick={() => this.upVote(book)}/>
						<span className="rate-amount">{book.averageRating}</span>
						<div className="down-vote" onClick={() => this.downVote(book)}/>
						<ButtonToolbar>
							<Dropdown id={'dp-' + book.id} pullRight>
								<Dropdown.Toggle noCaret >
									<Glyphicon glyph="th" />
								</Dropdown.Toggle>
								<Dropdown.Menu onSelect={(e) => {this.props.onUpdate(book, e); this.props.history.push('/')}}>
									<MenuItem header>Move to...</MenuItem>
									<MenuItem divider />
									<MenuItem eventKey='currentlyReading' disabled={book.shelf === 'currentlyReading'}>Reading</MenuItem>
									<MenuItem eventKey='wantToRead' disabled={book.shelf === 'wantToRead'}>Wanted</MenuItem>
									<MenuItem eventKey='read' disabled={book.shelf === 'read'}>Read</MenuItem>
									<MenuItem eventKey disabled={!book.shelf}>None</MenuItem>
								</Dropdown.Menu>
							</Dropdown>
						</ButtonToolbar>
    				{/*<Image src={require('../icons/add.svg')} className="move" alt='Move'/>*/}
					</div>
				</div>
				<h2>{book.authors.join`, `}</h2>
				<h2>Synopsis</h2>
				<p>{book.description}</p>
			</div>
		) : (<h1 style={{'textAlign': 'center'}}>No book to display</h1>)
	}
}

export default BooksInfos