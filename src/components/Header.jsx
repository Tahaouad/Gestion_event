import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <header className="bg-dark">
                <h1 className="text-light">Gestion des evenenment</h1>
                <nav>
                    <ul>
                        <li className="d-inline m-2 ">
                            <Link className="text-light text-decoration-none" to={'/'}>
                                Acceuil
                            </Link>
                        </li>
                        <li className="d-inline"> 
                            <Link className="text-light text-decoration-none" to={'/details'}>
                                Details
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header ;