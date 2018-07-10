import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import BooksInfos from './Components/BooksInfos'
import SearchPage from './Components/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  /*
   * When the component is mounted, get the shelved books.
   */

  componentDidMount() {
    console.log('App mounted');
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  /*
   * Triggered in the Book's Info page. Change the Book's shelf and add it to the App's state to render it
   */

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf;

      this.setState((state) => {
        books: state.books.concat(!shelf && [ book ])
      })
    })
    .then(this.getBooks.bind(this))
  }

  /*
   * Render the Components at their respective locations.
   *
   * The /book/:bookTitle route renders an Info page of the selected book.
   * When the user click on the Link component in the book thumbnail,
   * the book's object is passed to the Route's Location prop,
   * and the title is used to formate the link
   *
   * The "history" parameter is used to reroute to HomePage and render the changed shelf.
   */

  render() {

    const { books } = this.state;

    return (
      <div className="app">
          <Route path='/' component={NavBar}/>
          <Route exact path='/' render={() => <HomePage books={books}/>}/>
          <Route exact path='/search' render={() => <SearchPage shelved={books}/>}/>
          <Route exact path='/book/:bookTitle' render={({location, history}) => <BooksInfos history={history} location={location} onUpdate={this.updateBook.bind(this)}/>}/>
      </div>
    )
  }
}

export default BooksApp
