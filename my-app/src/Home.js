import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/BioData');
  };

  return (
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
          <Dropdown.Item onClick={() => navigate('/end')}>End Page</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/info')}>Info Page</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/biodata')}>BioData Page</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Home;
