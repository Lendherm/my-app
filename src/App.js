import React from 'react';
import { Card } from 'react-bootstrap';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="bg-dark d-flex align-items-center justify-content-center vh-100">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Mi Aplicación</Card.Title>
          <SearchBar />
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
