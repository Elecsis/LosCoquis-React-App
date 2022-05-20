import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CoquiHomePage from "./pages/CoquiHomePage";
import IsPrivate from "./components/IsPrivate";  
import IsAnon from "./components/IsAnon"; 
import ErrorPage from "./pages/ErrorPage";
import CheatSheetHomePage from "./pages/CheatSheetHomePage";
import CreateCheatSheetPage from "./pages/CreateCheatSheetPage"
import TeamsRosterPage from "./pages/TeamsRosterPage"

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/coqui-home" element={  <CoquiHomePage /> } />
        <Route path="/cheatsheet-home" element={  <CheatSheetHomePage /> } />
        <Route path="/create-cheatsheet" element={  <CreateCheatSheetPage /> } />
        <Route path="/teams-roster" element={  <TeamsRosterPage /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}
 
export default App;