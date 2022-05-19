import { Link } from "react-router-dom";

function CoquiHomePage (){

    return(
        <div>
            <div>
                <h1>Coqui Home Page</h1>
                <p>Welcome Please select a Coqui</p>
            </div>
            <div>
                <div>
                    <h3>CoquiLex Top 200 Rankings</h3>
                    <p>Your Man Lex's priority rankings to help you as a guide to fantasy football victory!</p>
                </div>
                <div>
                    <h3>Make own CheetSheet/Rankings</h3>
                    <Link to="/cheatsheet-home"> <button>CheatSheet Home</button> </Link>
                    <p>Make your owns custom rankings. These cheetsheets can be saved, edited and deleted at your liesure</p>
                </div>
                <div>
                    <h3>Team rosters</h3>
                    <p>List of all current team rosters. Player profiles with important and relavent statistics.</p>
                </div>
                <div>
                    <h3>News & Articles</h3>
                    <p>CoquiLex's takes on stratagy, news, injuries, predictions & hot takes on the up coming football season.</p>
                </div>
                <div>
                    <h3>Profile Settings</h3>
                    <p>Access profile settings to edit account information.</p>
                </div>
             </div>
        </div>
    )

}
export default CoquiHomePage;