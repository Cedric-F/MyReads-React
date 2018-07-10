import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class BooksThumbnail extends Component {
	render() {
		const { book, cover } = this.props;
		return (
			<div className="book-thumbnail">
        <Image src={cover} alt={book.title} responsive/>
        <div className="book-desc">
          <ul>
            <li><strong>{book.title}</strong></li>
            {
              book.categories && (
                <li>{book.categories.join(', ')}</li>
              )
            }
            {
              book.authors && (
                <li>{book.authors.join(', ')}</li>
              )
            }
            {book.averageRating && (<li>{book.averageRating} stars</li>)}
            {(<li><Link to={{ pathname: `/book/${book.title}`, state: { "book": book } }}>More details...</Link></li>)}
          </ul>
        </div>
      </div>
		)
	}
}

export default BooksThumbnail