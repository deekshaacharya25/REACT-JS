import React from 'react'
import {Link} from "react-router-dom"
function Layout() {
    const Layout=()=>{
    }
  return (
    <>
    <nav>
        <ul>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/blogs">Blogs</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>

            <li>
            <Link to="/nopage">NoPage</Link>
            </li>
        </ul>
    </nav>

        
    </>
  )
}

export default Layout