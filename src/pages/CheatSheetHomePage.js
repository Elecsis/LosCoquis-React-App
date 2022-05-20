import { Link } from "react-router-dom";
import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";

const API_URL = "http://localhost:5005";

function CheatSheetHomePage (){
    const [cheatSheet, setcheatSheet] = useState([]);

    const getAllcheatSheets = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");
       
        // Send the token through the request "Authorization" Headers
        axios
          .get(
          `${API_URL}/api/cheatsheet-home`,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        )
          .then((response) => {
              console.log(response)
            setcheatSheet(response.data.cheatsheets)
          })
          .catch((error) => console.log(error));
      };

    useEffect(() => {
        getAllcheatSheets();
    }, [] );  



    return(
        <div class="container">
            <div>
                <h2>CheatSheet Home</h2>
                <p>Please Create, review, edit or delete your cheatsheets</p>                
            </div>
            <div>
                <Link to="/create-cheatsheet"> <button>Create New cheetsheet</button> </Link>
                <Link to="/coqui-home"> <button>Go Back to Coqui Home</button> </Link>
            </div>
            <div>
                <h2> Player Ranking CheatSheet:</h2>
                <p>(Click on cheatsheet titles to expand lists)</p>
                    { cheatSheet.map(singleCheatSheet => {
                        return (
                            <div onClick={(e) => {
                                console.log(e.currentTarget)
                                e.currentTarget.classList.toggle('hide-players')
                            }} className="hide-players">
                                <h4 style={{textDecoration: 'underline'}}>{singleCheatSheet.title}{' '}</h4>
                                {singleCheatSheet.players.map((player, index) => {
                                    return (
                                        <div className="playerSelectorBar">
                                            <p><span>#{index + 1}{' '}</span>{ player.player}      {player.pos}     {player.team} </p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                        
                    })}
          </div>
            
        </div>
    )
}

export default CheatSheetHomePage;

