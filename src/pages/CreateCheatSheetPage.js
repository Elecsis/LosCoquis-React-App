import PlayerSelector from "../components/PlayerSelector";
import {useState} from "react";
import AddCheatSheet from "../components/AddCheatSheet";

function CreateCheatSheet () {
  const [selectedPlayerArray, setSelectedPlayerArray] = useState([]);

  

    return (
      <div className="createCheatSheet">
        <h2>Create a new sheet</h2>
        <div>
          <AddCheatSheet selectedPlayerArray={ selectedPlayerArray } setSelectedPlayerArray={ setSelectedPlayerArray }/>
        </div>
        <main>
          <div><PlayerSelector selectedPlayerArray={ selectedPlayerArray } setSelectedPlayerArray={ setSelectedPlayerArray }/></div>
          <div>
            { selectedPlayerArray.map(element => {
              return(
                <p>{ element.player}      {element.pos}     {element.team} </p>
              )
            })}
          </div>
        </main>
        
      </div>
    );
  }
   
  export default CreateCheatSheet;