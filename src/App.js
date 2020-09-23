import React from 'react';

function Food({ name }) {
  return <h1>I like {name} </h1>;
}

const FoodILike = [
  {
    name : "Coffee"

  },
  {
    name : "Sandwich"
  }]

function App() {
  return (
    <div>
      {FoodILike.map(dish => <Food name={dish.name}/>)}
    </div>
  );
}

export default App;
