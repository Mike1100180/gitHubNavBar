import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import End from './End';
import Info from './Info';
import BioData from './BioData';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
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
    <Router basename={process.env.PUBLIC_URL}>
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '20px', height: '100vh' }}>
        <div style={{ gridRow: '1' }}>
          <Navbar />
        </div>

        <div style={{ gridRow: '2', padding: '20px', overflowY: 'auto' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/end" element={<End />} />
            <Route path="/info" element={<Info />} />
            <Route path="/biodata" element={<BioData />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>

          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start', marginTop: '20px' }}>
              <div style={{ border: '4px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h1>Drag Items</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  <DragItem name="Item 1" />
                  <DragItem name="Item 2" />
                  <DragItem name="Item 3" />
                </div>
              </div>

              <div style={{ border: '4px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h1>Drop Zone</h1>
                <DropZone onDrop={handleDrop} />
                <div style={{ marginTop: '20px' }}>
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
                      <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DndProvider>
        </div>
      </div>
    </Router>
  );
};

export default App;
