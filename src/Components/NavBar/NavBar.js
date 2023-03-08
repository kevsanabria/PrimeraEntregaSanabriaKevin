import React from "react"
import EstilosNavBar from "./NavBar.module.css"
import CartWidget from "../CartWidget/CardWidget";

function NavBar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="d-flex justify-content-end">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Productos</a>
                                <a className="nav-link" href="#">Servicios</a>
                                <a className="nav-link disabled">Contacto</a>
                            </div>
                            <div>
                                <CartWidget/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;