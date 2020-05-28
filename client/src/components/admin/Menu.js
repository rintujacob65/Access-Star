import React from 'react' ;
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu(props) {
    return(
        <React.Fragment>
            <nav className="nav flex-column">
                <Link className="nav-link access_star_menu" to="/">
                    <span>Access Star</span>
                </Link>
                <Link className="nav-link " to="/stocks" style={{marginTop:"120px"}}>
                    STOCK
                </Link>
                <Link className="nav-link" to="/employees">
                    EMPLOYEE DETAILS
                </Link>
                <Link className="nav-link" to="/">
                    LOGOUT
                </Link>
            </nav>
        </React.Fragment>
    )
}
export default Menu;