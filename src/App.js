import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import BooksInfos from './Components/BooksInfos'
import SearchPage from './Components/SearchPage'
import Book from './Components/Book'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
          <Route path='/' component={NavBar}/>
          <Route exact path='/' render={() => <HomePage books={books}/>}/>
          <Route exact path='/search' render={() => <SearchPage shelved={books}/>}/>
          <Route exact path='/book/:bookTitle' component={BooksInfos}/>
      </div>
    )
  }
}

export default BooksApp
