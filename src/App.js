import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.getBookShelf = this.getBookShelf.bind(this);
  }
  state = {
    books: null
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({ books: data});
    });
  }
  updateBookShelf = (selectedBook, shelf) => {
    BooksAPI.update(selectedBook, shelf).then(data => {
      const isBookExists = this.state.books.find( book => book.id === selectedBook.id );
      if(isBookExists) {
        const updatedBooks = this.state.books.map(book => {
          if (book.id === selectedBook.id)
            book.shelf = shelf;
          return book;
        })
        this.setState({ books: updatedBooks});
      }
      else {
        const newBook = selectedBook;
        newBook.shelf = shelf;
        this.setState({ books: [...this.state.books, selectedBook]});
      }
    });
  }
  getBookShelf = id => {
    const isBookExists = this.state.books.find( book => book.id === id);
    return isBookExists ? isBookExists.shelf : 'none'; 
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Dashboard books={this.state.books} updateBookShelf={this.updateBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <Search updateBookShelf={this.updateBookShelf} getBookShelf={this.getBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
