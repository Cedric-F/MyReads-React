import React, { Component } from 'react';
import Shelf from './Shelf';

class HomePage extends Component {

  componentDidMount() {
    console.log('HomePage mounted', this.props)
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <Shelf title='Reading' name='Reading' books={books.filter(book => book.shelf === 'currentlyReading')}/>
        <Shelf title='Wanted' name='Wanted' books={books.filter(book => book.shelf === 'wantToRead')}/>
        <Shelf title='Read' name='Read' books={books.filter(book => book.shelf === 'read')}/>
      </div>
    );
  }
}

export default HomePage;