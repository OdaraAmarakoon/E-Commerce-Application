import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src="logo.png" alt="Logo" className="logo" style={{ width: "200px", height: "150" }}/>
                        </a>
                    </div>      
                    <form className="form-inline my-2 my-lg-0">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><h4>Login</h4> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h4>Cart</h4></a>
                                </li>
                            </ul>
                        </div>
                    </form>


                </div>
            </nav>

        </div>
    )
}
