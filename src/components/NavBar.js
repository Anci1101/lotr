import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/books'>
                        Books
                    </Link>
                </li>
                <li>
                    <Link to='/movies'>
                        Movies
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
