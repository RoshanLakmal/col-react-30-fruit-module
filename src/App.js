import React from 'react';
import './App.css';
import {choice,remove} from './helpers';
import foods from './foods';

function App() {
  const RANDOMFRUIT = choice(foods);
  remove(foods, RANDOMFRUIT);
  const  FRUITSLEFT = foods.length;
  // const FRUITSLEFT = remove(foods, RANDOMFRUIT).length;
  
  return (
    <div>
      <p>I’d like one {RANDOMFRUIT}, please</p>
      <p>Here you go: {RANDOMFRUIT}</p>
      <p>Delicious! May I have another?</p>
      <p>I’m sorry, we’re all out. We have {FRUITSLEFT} left.</p>
      {/* {choice()}
      {remove()} */}
    </div>
  );
}

export default App;
