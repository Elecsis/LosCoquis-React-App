import { Link } from "react-router-dom";

function CoquiHomePage (){

    return(
        

        <main>
            <section id="headerCH" class="jumbotron text-center">
                <h1 class="display-3">Coqui Home Page</h1>
                <p class="lead">Welcome Please select a Coqui</p>
                <a href="" class="btn btn-primary">Download Podcast</a>
                <a href="" class="btn btn-secondary">Coming Soon!</a>
            </section>

            <section id="gallery">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">CoquiLex Top 200 Rankings</h5>
                                        <p class="card-text">Your Man Lex's priority rankings to help you as a guide to fantasy football victory!</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Make own CheetSheet/Rankings</h5>
                                        <p class="card-text">Be prepared to jump over the competition at your drafts. Create your own custom player ranking cheatsheets.</p>
                                        <Link to="/cheatsheet-home"> <a  class="btn btn-outline-success btn-sm">CheatSheet Home</a> </Link>
                                     </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Team rosters</h5>
                                        <p class="card-text">List of all current team rosters. Player profiles with important and relavent statistics.</p>
                                        <Link to="/teams-roster"> <a  class="btn btn-outline-success btn-sm">View Team Rosters</a> </Link>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">News & Articles</h5>
                                        <p class="card-text">CoquiLex's takes on stratagy, news, injuries, predictions & hot takes on the up coming football season.</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Fantasy Coqui Podcast</h5>
                                        <p class="card-text">Dont have the time to read or you just like to listen to your favorite fantasy football prognosticator. Then look no further!</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Profile Settings</h5>
                                        <p class="card-text">Profile Settings</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Go to Profie Settings</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>    
         </main>
    )

}
export default CoquiHomePage;