import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'

class BooksApp extends React.Component {
  // Store data of books on dashbard page
  state = { books: null }

  constructor(props) {
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.getBookShelf = this.getBookShelf.bind(this);
  }

  componentDidMount() {
    // Fetch all book added to shelf and set them books state
    BooksAPI.getAll().then(data => {
      this.setState({ books: data});
    });
  }

  // Update books data whenever shelf of a book is changed
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

  // Find shelf of a book from it's id
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

export default BooksApp;