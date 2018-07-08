import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Shelf from './Components/Shelf'
import Head from './Components/Header'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log(this.state.books);
    })
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        <Head />
        <Shelf title="Reading" shelf="currentlyReading" books={books.filter(book => book.shelf === "currentlyReading")} />
        <Shelf title="Wanted" shelf="wantToRead" books={books.filter(book => book.shelf === "wantToRead")} />
        <Shelf title="Read" shelf="read" books={books.filter(book => book.shelf === "read")} />
      </div>
    )
  }
}

export default BooksApp
