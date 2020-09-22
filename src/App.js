import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav} </h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Coffe"/>
      <Food fav="Pasta"/>
      <Food fav="Basil"/>
      <Food fav="Croassant"/>
    </div>
  );
}

export default App;
