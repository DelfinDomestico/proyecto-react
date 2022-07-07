import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Navbar() {
  return (
    <header>
       <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/imgdiente.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                Modas Soto
            </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                   
                    <ul class="navbar-nav">
                   
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
