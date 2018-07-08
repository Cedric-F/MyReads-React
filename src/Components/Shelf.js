import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'

class Shelf extends Component {

	componentDidMount() {
		console.log(this.props.title, 'mounted');
	}

	render() {

		const { books } = this.props

		return (
			<div className="shelf">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h1 style={{"color": "white"}}>
								{this.props.title}
							</h1>
						</div>
					</div>
				</div>
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
					{
						books.map(book => (
							<li key={book.id} style={{"margin": "10px"}}>
								<div className="book-thumbnail">
									<img src={book.imageLinks.thumbnail} alt={book.title}/>
									<div className="book-desc">
										<ul>
											<li><strong>{book.title}</strong></li>
                      {book.categories && (<li>{book.categories.join`, `}</li>)}
                      {book.authors && (<li>{book.authors.join`, `}</li>)}
											{book.averageRating && (<li>{book.averageRating} stars</li>)}
                      <li><Link to={`/books/${book.title.replace(/\s/g, '_')}`}>More details...</Link></li>
										</ul>
									</div>
								</div>
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

export default Shelf