import { useState,useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3005";

function PlayerList() {
    const [players, setPlayers] = useState([]);
    

    useEffect(() => {
        axios
        .get(`${API_URL}/new-york-jets`)
        .then((response) => {
            console.log(response.data);
            setPlayers(response.data);
        })
        .catch((error) => console.log(error))
    }, []);


    return (
        <div>
            { players.map((playerInfo) => {
                return (
                 <span><p>{ playerInfo.player } {playerInfo.pos}</p> <button> + </button> </span>   
                )
            })}
            
        </div>
    )
}

export default PlayerList;

