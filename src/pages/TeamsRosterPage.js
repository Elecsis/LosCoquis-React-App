import PlayerSelector from "../components/PlayerSelector";
import { Link } from "react-router-dom";


function TeamsRoster () {
    return (
        <main class="row">
        <Link to="/coqui-home"> <button>Go Back to Coqui Home</button> </Link>
          <div><PlayerSelector /></div>
          <div>
          <h2>Your Player Ranking CheatSheet:</h2>
            
        
          </div>
        </main>
    )
}

export default TeamsRoster;