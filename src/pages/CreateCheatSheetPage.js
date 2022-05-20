import PlayerSelector from "../components/PlayerSelector";
import {useState} from "react";
import AddCheatSheet from "../components/AddCheatSheet";
import { Link } from "react-router-dom";

function CreateCheatSheet () {
  const [selectedPlayerArray, setSelectedPlayerArray] = useState([]);

  

    return (
      <div className="createCheatSheet">
        <div>
          <h2>Create a new sheet</h2>
          <Link to="/cheatsheet-home"> <button>Back to CheatSheet Home</button> </Link>
        </div>
        
        <div>
          <AddCheatSheet selectedPlayerArray={ selectedPlayerArray } setSelectedPlayerArray={ setSelectedPlayerArray }/>
        </div>
        <main class="row">
          <div><PlayerSelector selectedPlayerArray={ selectedPlayerArray } setSelectedPlayerArray={ setSelectedPlayerArray }/></div>
          <div>
          <h2>Your Player Ranking CheatSheet:</h2>
            { selectedPlayerArray.map(element => {
              return(
                <div className="playerSelectorBar">
                <p>{ element.player}      {element.pos}     {element.team} </p>
                </div>
              )
            })}
          </div>
        </main>
        
      </div>
    );
  }
   
  export default CreateCheatSheet;