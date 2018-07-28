import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }
    state = {
      books: null
    }

    handleSearchInputChange = event => {
        BooksAPI.search(event.target.value).then(data => {
            this.setState({ books: data});
        });
    }
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>

              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handleSearchInputChange} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books && this.state.books.map(book => {
                    return (
                    <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf} shelf='none' />
                    )
                })}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;