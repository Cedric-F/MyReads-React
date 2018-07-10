import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Infos from './Infos'

class Book extends Component {

  render() {
    const { book, cover } = this.props;
    console.log(book)

    return (
      <div>
        <Route exact path='(/|/search)' render={() => (
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
                {(<li><Link to={`/books/${book.title.replace(/\s/g, '_')}`}>More details...</Link></li>)}
              </ul>
            </div>
          </div>
        )}/>
        <Route path={'/books/'} render={() => (
          <Infos book={book}/>
        )}/>
      </div>
    )
  }
}

export default Book