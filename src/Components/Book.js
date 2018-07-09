import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class Book extends Component {

  render() {
    const { book, cover } = this.props;

    return (
      <div>
        <div className="book-thumbnail">
          <img src={cover} alt={book.title}/>
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
              {(<li><Link to={`/books/${book.title.replace(/\s/g, '_')}`}>More details...</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Book