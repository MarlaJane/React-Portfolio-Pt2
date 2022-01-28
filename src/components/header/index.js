import React from 'react';
import './css/index.css';


export default function Header(props) {

    const { setCurrentPage } = props;

    return (
        <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="navbar-nav">
                            <li className="nav-link"><a href="#about" onClick={() => setCurrentPage('About')}>About</a></li>
                            <li className="nav-link"><a href="#work" onClick={() => setCurrentPage('Work')}>Work</a></li>
                            <li className="nav-link"><a href="#contact" onClick={() => setCurrentPage('Contact')}>Contact</a></li>
                    </div>
                </div>
            </div>
        </nav>
    )
}