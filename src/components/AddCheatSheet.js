import { useState } from "react";
import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";


function AddCheatSheet (props) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [title, setTitle] = useState("");
    const handleTitle = (e) => setTitle(e.target.value);
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
      e.preventDefault();

      const requestBody = {title, players: props.selectedPlayerArray }
console.log(requestBody)
      const storedToken = localStorage.getItem('authToken');

      axios
        .post(`${API_URL}/api/create-cheatsheet`, requestBody, {
          headers:{
            authorization:`Bearer ${storedToken}`
          }
        })
        .then((response) => {
          console.log(response,response.data); 
          setTitle('')
          props.setSelectedPlayerArray([])
          navigate('/cheatsheet-home')

        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        })


    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input 
            type="title"
            name="title"
            value={title}
            onChange={handleTitle}
          />
          <button type="submit">Submit CheatSheet</button>
        </form>
        {errorMessage && <p> { errorMessage} </p>}
      </div>
    )
  
}
export default AddCheatSheet;