import { useState,useEffect } from "react"
import axios from "axios";

const API_URL = process.env.REACT_APP_NFL_URL;

function PlayerSelector (props){

    const NFLTeamArray = [
        "arizona-cardinals",
        "atlanta-falcons",
        "carolina-panthers",
        "chicago-bears",
        "dallas-cowboys",
        "detroit-lions",
        "green-bay-packers",
        "los-angeles-rams",
        "minnesota-vikings",
        "new-orleans-saints",
        "new-york-giants",
        "philadelphia-eagles",
        "san-francisco-49ers",
        "seattle-seahawks",
        "tampa-bay-buccaneers",
        "washington-commanders",
        "baltimore-ravens",
        "buffalo-bills",
        "cincinnati-bengals",
        "cleveland-browns",
        "denver-broncos",
        "houston-texans",
        "indianapolis-colts",
        "jacksonville-jaguars",
        "kansas-city-chiefs",
        "las-vegas-raiders",
        "los-angeles-chargers",
        "miami-dolphins",
        "new-england-patriots",
        "new-york-jets",
        "pittsburgh-steelers",
        "tennessee-titans"
    ];


    const[isSelecting, setIsSelecting] = useState(false);
    const[currentTeam, setCurrentTeam] = useState( "arizona-cardinals");
    const[currentTeamPlayers, setCurrentTeamPlayers] = useState(null);


    useEffect(() => {
        console.log(`${API_URL}${currentTeam}`)
       axios
        .get(`${API_URL}${currentTeam}`)
        .then((response) => {
            console.log(response.data);
            setCurrentTeamPlayers(response.data)
        })
        .catch((error) => console.log(error))
    }, [currentTeam]);

    

    return(
        <div>
        
            <div className="playSelectorTeamContainer">
                <h2>Chose the team then the player:</h2>
                { !isSelecting &&  NFLTeamArray.map((team)=>{
                    return(
                        <button onClick={()=> {
                        setIsSelecting(true); 
                        setCurrentTeam(team); 
                    }}> { team } </button>
                    )
                }) 
                }
            </div>
            <div>
            <div>
            { isSelecting  && 
                <>
                    <h2>List of players on { currentTeam }</h2>
                    <button onClick={()=>{setIsSelecting(false)}} >Back to Teams</button>
                </>    
            }    
            { isSelecting  && currentTeamPlayers.map((playerInfo) => {
                return (
                 <div >   
                    <span class="row" className="playerSelectorBar">{ playerInfo.player } { playerInfo.pos } 
                    <button 
                        onClick={ () => {
                            props.setSelectedPlayerArray([
                                ...props.selectedPlayerArray,
                                playerInfo
                            ])
                        }}
                    > + </button> </span>
                 </div> 
                )
            })}        
            </div>  
            </div>
        </div>
    )
}

export default PlayerSelector;