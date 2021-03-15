import React from 'react';
import Container from './components/Container';

import logoImage from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <img className="todo__logo" src={logoImage} />
      <Container />
    </div>
  );
}

export default App;
