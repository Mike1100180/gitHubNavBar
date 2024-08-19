import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is included

function Home() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/BioData');
  };
  
  return( 
    <div>
      <h2>Home Page</h2>
      <p>Hi jaffa how are you? My name is Mukesh</p>
      <h1>Home Page</h1>
      <button onClick={handleClick}>BioData page</button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="./End">EndPage</Dropdown.Item>
          <Dropdown.Item href="./Info">Another action</Dropdown.Item>
          <Dropdown.Item href="./BioData">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Home;
