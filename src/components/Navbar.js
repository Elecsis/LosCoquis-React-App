import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
 
function Navbar() {
  const { 
    isLoggedIn,
    username,                   // <== UPDATE
    logOutUser              // <== UPDATE
  } = useContext(AuthContext);
 
  
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Fantasy Coquis</button>
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
    </nav>
  );
}
 
export default Navbar;