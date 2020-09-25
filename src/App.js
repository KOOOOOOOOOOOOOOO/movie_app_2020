import React from 'react';
import PropTypes from 'prop-types';

function Food({ name,rating }) {
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}</h4>
    </div>
  );
}

const FoodILike = [
  {
    id : 1,
    name : "Coffee",
    rating : 3
  },
  {
    id : 2,
    name : "Sandwich",
    rating : 4
  }]


Food.propTypes = {
  name : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

  function App() {
  return (
    <div>
      {FoodILike.map(dish => (
        <Food key={dish.id} 
              name={dish.name}
              rating = {dish.rating}/>
      ))}
    </div>
  );
}

export default App;
