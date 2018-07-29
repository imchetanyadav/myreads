import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import './App.css'

const Dashboard = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {props.books && props.books.filter(book => {
                            return book.shelf==="currentlyReading" ? true : false;
                        }).map(book => {
                            return (
                            <Book key={book.id} book={book} updateBookShelf={props.updateBookShelf} shelf='currentlyReading' />
                            )
                        })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {props.books && props.books.filter(book => {
                            return book.shelf==="wantToRead" ? true : false;
                        }).map(book => {
                            return (
                            <Book key={book.id} book={book} updateBookShelf={props.updateBookShelf} shelf='wantToRead' />
                            )
                        })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {props.books && props.books.filter(book => {
                            return book.shelf==="read" ? true : false;
                        }).map(book => {
                            return (
                            <Book key={book.id} book={book} updateBookShelf={props.updateBookShelf} shelf='read' />
                            )
                        })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
)

export default Dashboard;