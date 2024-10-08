import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

export function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BookStars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/your-posts">Your Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/post">Create Post</Link>
                        </li>
                    </ul>
                    <button className="navbar-text btn " onClick={handleLogout}>
                        Logout
                    </button>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        </ul>
                </div>
            </div>
        </nav>
    );
}
