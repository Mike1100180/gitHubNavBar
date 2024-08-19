import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import End from './End';
import Info from './Info';
import BioData from './BioData';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropZone from './DropZone';

const App = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  };

  return (
    <Router>
      <div>
        {/* Navbar for navigation */}
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/end" element={<End />} />
          <Route path="/info" element={<Info />} />
          <Route path="/biodata" element={<BioData />} />
          {/* Default route to Home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

        {/* Drag-and-Drop functionality */}
        <DndProvider backend={HTML5Backend}>
          <div style={{
            display: 'flex',
            //justifyContent: 'center',
            alignItems: 'center',
            height: '65vh'
          }}>
            <div style={{
              border: '4px solid #ccc',
              padding: '20px',
              borderRadius: '5px'
            }}>
              <h1>Drag and Drop Example</h1>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around'
              }}>
                <div style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '5px'
                }}>
                  <h2>Drag Items</h2>
                  <DragItem name="Item 1" />
                  <DragItem name="Item 2" />
                  <DragItem name="Item 3" />
                </div>
                <div style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '5px'
                }}>
                  <h2>Drop Zone</h2>
                  <DropZone onDrop={handleDrop} />
                  {droppedItems.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '10px',
                        backgroundColor: 'lightblue',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <p>{item.name}</p>
                      <button onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DndProvider>
      </div>
    </Router>
  );
};

export default App;
