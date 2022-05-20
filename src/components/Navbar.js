import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
import coquiIcon from "../images/coquiX36.png";
function Navbar() {
  const { 
    isLoggedIn,
    username,                   // <== UPDATE
    logOutUser              // <== UPDATE
  } = useContext(AuthContext);
 
  
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not
  return (
    <nav >
      
        
        <img src={coquiIcon} alt=""class="align-self-start"/>
        
       <div class="d-flex">
      <Link to="/">
        <button>Home</button>
      </Link>
      
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/coqui-home">
            <button>Fantasy Football</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
          <span>{ username && username.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
      </div>
    </nav>
  );
}








 
export default Navbar;