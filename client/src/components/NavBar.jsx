import { Link } from "react-router-dom";

function NavBar() {

    return(
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/informations">Astuces</Link></li>
                <li><Link to="/aliments">Détails</Link></li>
                <li>Idées</li>
            </ul>
        </nav>
    )
}

export default NavBar