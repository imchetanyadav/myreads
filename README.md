# MyReads Project

Code for udacity react nanodegree project: MyReads.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
- Currently Reading
- Want to Read
- Read
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you will instantly see all of the selections you made on the search page in your library.

## To view it in action
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Folder Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Collection of available search terms that works in this app.
├── package.json # Package manager file.
├── public
│   ├── favicon.ico # React Icon,
│   └── index.html # Base html structure
└── src
    ├── App.css # Styles for app.
    ├── App.js # Root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Dashboard.js # Logic for dashboard page
    ├── Search.js # Logic for search page
    ├── Book.js # View for book shown on Dashboard and Search page
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for the app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Backend Server

Udacity provided backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
