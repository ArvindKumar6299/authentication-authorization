import react from "react";
import {Link} from 'react-router-dom'


const Header = () =>{
    return (
      <header>
        <nav>
            <Link to="/">Home</Link> |
             <Link to="/signup">Sign Up</Link>
             <Link to="/login">Login</Link>
        </nav>
      </header>
    )
}


export default Header;