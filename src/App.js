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

  componentDidMount() {
    console.log('App mounted');
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  syncBook(book, shelf) {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf;

      this.setState((state) => {
        books: state.books.filter(b => book.id === b.id).concat(!shelf && [ book ])
      })
    })
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
          <Route path='/' component={NavBar}/>
          <Route exact path='/' render={() => <HomePage books={books}/>}/>
          <Route exact path='/search' render={() => <SearchPage shelved={books}/>}/>
          <Route exact path='/book/:bookTitle' render={({location, history}) => <BooksInfos history={history} location={location} onUpdate={this.syncBook.bind(this)}/>}/>
      </div>
    )
  }
}

export default BooksApp
