import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/header-logo.png'
import github from 'assets/github-logo.png'

const Header = () => (
    <header className="header">
        <div className="container">
            <Link to="/">
                <img
                    className="header--logo"
                    src={logo}
                    alt="rick-and-morty-logo"
                />
            </Link>
            <a href="https://github.com/jtarulla/rick-and-morty-app">
                <img
                    className="header--logo-github"
                    src={github}
                    alt="github-logo"
                />
            </a>
        </div>
    </header>
)

export default Header;