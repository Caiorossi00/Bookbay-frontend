import React from 'react'
import "../styles/Navbar.scss"

const Navbar = () => {
  return (
    <nav>
        <h1>Bookbay</h1>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/books">Books</a>
            </li>
            <li>
            <a href="/authors">Authors</a>
            </li>
            <li>
            <a href="/genres">Genres</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar