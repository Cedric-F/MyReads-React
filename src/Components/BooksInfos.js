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

  /*
   * Let the user to increase/decrease the book's rating.
   * TODO: keep the changes on refresh / moving to another shelf.
   */

  upVote(book) {
    if (book.averageRating < 5) book.averageRating += 0.5;
    this.setState({"book": book});
  }

  downVote(book) {
    if (book.averageRating !== 0) book.averageRating -= 0.5;
    this.setState({"book": book});
  }

  render() {
    const { book } = this.props.location.state;
    console.log(book);

    return book ? (
      <div className="book-page">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <div className="cover-n-rating">
          <Image src={book.imageLinks ? book.imageLinks.thumbnail : cover} alt={'Cover of' + book.title} responsive/>
          <div className="rate">
            <div className="up-vote" onClick={() => this.upVote(book)}/>
            <span className="rate-amount">{book.averageRating}</span>
            <div className="down-vote" onClick={() => this.downVote(book)}/>
            <ButtonToolbar>
              <Dropdown id={'dp-' + book.id} pullRight>
                <Dropdown.Toggle noCaret >
                  <Glyphicon glyph="th" />
                </Dropdown.Toggle>

              {/*
                * When an option is selected, update the book's shelf and reroute to home page.
                * The shelf parameter is the Menu Item's eventKey
                */}

                <Dropdown.Menu onSelect={(shelf) => {
                  this.props.onUpdate(book, shelf);
                  this.props.history.push('/')}}
                >
                  <MenuItem header>Move to...</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey='currentlyReading' disabled={book.shelf === 'currentlyReading'}>Reading</MenuItem>
                  <MenuItem eventKey='wantToRead' disabled={book.shelf === 'wantToRead'}>Wanted</MenuItem>
                  <MenuItem eventKey='read' disabled={book.shelf === 'read'}>Read</MenuItem>
                  <MenuItem eventKey disabled={!book.shelf}>None</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonToolbar>
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