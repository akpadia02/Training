import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg"
                style={{ backgroundColor: '#007bff' }}
                data-bs-theme="dark">


                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>

                    {/* Toggler button for small screens */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/posts' className="nav-link active">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/counter' className="nav-link active">Counter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
