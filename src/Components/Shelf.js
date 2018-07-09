import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import Infos from './Infos'

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
								<Book book={book} foo="hello"/>
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

export default Shelf