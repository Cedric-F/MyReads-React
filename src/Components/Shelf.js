import React, { Component } from 'react'
import BooksThumbnail from './BooksThumbnail'
import cover from '../icons/cover.png'

class Shelf extends Component {

  componentDidMount() {
    console.log(this.props.title, 'mounted');
  }

  scrollLeft() {
    console.log('left');
    window.scrollBy(-320, 0)
  }

  scrollRight() {
    console.log('right');
    window.scrollBy(320, 0)
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
        <ol className="container book-list"
          style={{
            "listStyleType": "none",
            "display": "flex",
            "flexDirection": "row",
            "overflowX": "auto",
            "width": "100%",
            "alignItems:": "center",
            "justifyContent": "left",
            "padding": "0"
          }}>
          {
            books.map(book => {
              if (!book.hasOwnProperty('averageRating')) book.averageRating = 2.5;
              return (
              <li key={book.id} style={{"margin": "10px 10px 0 0"}}>
                <BooksThumbnail book={book} cover={book.imageLinks ? book.imageLinks.thumbnail : cover} />
              </li>
            )})
          }
        </ol>
      </div>
    )
  }
}

export default Shelf