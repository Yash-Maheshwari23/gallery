import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="opengallery">
            OpenGallery
          </Link>
        </li>
        <li>
          <a href="https://github.com/Yash-Maheshwari23/">Github</a>
        </li>
      </ul>
    </nav>
  )
}
