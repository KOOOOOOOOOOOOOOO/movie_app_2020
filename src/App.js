import React from 'react';

function Food({ name }) {
  return <h1>I like {name} </h1>;
}

const FoodILike = [
  {
    id : 1,
    name : "Coffee"
  },
  {
    id : 2,
    name : "Sandwich"
  }]

  function App() {
  return (
    <div>
      {FoodILike.map(dish => (
        <Food key={dish.id} name={dish.name}/>
      ))}
    </div>
  );
}

export default App;
