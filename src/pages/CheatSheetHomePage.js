import { Link } from "react-router-dom";
import React from 'react';

function CheatSheetHomePage (){
    return(
        <div>
            <h2>CheatSheet Home</h2>
            <p>Please Create, review, edit or delete your cheatsheets</p>
            <div>
                <Link to="/create-cheatsheet"> <button>Create New cheetsheet</button> </Link>
            </div>
            <div>
                <Link to="/coqui-home"> <button>Go Back to Coqui Home</button> </Link>
            </div>
            
        </div>
    )
}

export default CheatSheetHomePage;