import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class BooksThumbnail extends Component {
  render() {
    const { book, cover } = this.props;
    const home = `${process.env.PUBLIC_URL}/MyReads-React/`;
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
            {/*
              * For the consistency, replace the spaces (%20) in the book title with underscores (for the link only)
              * The book data is passed in the location property to ensure access to the book info page
              */}
            {(<li><Link to={{ pathname: `${home}book/${book.title.replace(/\s/g, '_')}`, state: { "book": book } }}>More details...</Link></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default BooksThumbnail
