# MyReads Project Single Page Application

A Book Tracking React Application for the Udacity Front End Nanodegree program.
[Live page](https://cedric-f.github.io/MyReads-React/)

## Getting started

**Installation**

_Cloning the repository_

```
git clone https://github.com/Cedric-F/Restaurant-Reviews-FEND.git
```

_Dependencies and server_

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Structure

```
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── Components
    │   ├── HomePage.js
    │   ├── NavBar.js
    │   ├── Shelf.js
    │   ├── BooksThumbnail.js
    │   ├── BooksInfos.js
    │   └── SearchPage.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

## Using the Application

**Moving the books on the shelves**

1. Choose a book on the main page, and click on the thumbnail link.
2. In the info page, there is a controller by the book cover.
3. Click on it to display the shelf menu.
4. When changing the shelf, you're redirected to the Home Page where the shelves are updated.
5. Selecting "None" will remove the book from the Home Page.

**Find and add a book**

1. On the Navigation Menu, select "Search a book".
2. In the search bar, start typing your query to display the matching books.
**Important:** The query are limited to a specific set of words, see [Search terms](./SEARCH_TERMS.md).
3. Open the Info page of your book and use the controller to add it to the shelf you want.

**Incomplete: Rating**

1. In a Book page, the rating system will change the stars value of a book and render it in the book thumbnail.
2. TODO: Keep the changes on refresh / moving the book to another shelf

## License

None.

## Dependencies

The following dependencies have been used to build this project.
Make sure to run `npm install` before launching the project.

* [React](https://github.com/facebook/React)
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
* [React Router](https://github.com/ReactTraining/react-router)
* [React Router Bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
* [Udacity Books API](https://reactnd-books-api.udacity.com)

## Contributing

This repository is a Student Project for Udacity FEND. Contributions are unlikely to be accepted.

## Compatibility

Tested on:

* Chrome
* Chrome Canary
* FireFox
* FireFox Dev Edition
