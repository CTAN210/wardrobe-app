import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { calculatePrice, combinationSum } from './logic'
import AddTarget from './components/AddTarget'
import Header from './components/Header';
// const {combinationSum}=require("./logic");

function App() {
  

  const wardrobeElements = [50,75,100,120];
  var [wardrobeTarget, setWardrobeTarget] = useState('250');

  const result = combinationSum(wardrobeElements,wardrobeTarget);
  const result1 = calculatePrice(result);

  const addTarget = (target) => {
    console.log(target);
    const newTarget = {target}
    
    console.log(wardrobeTarget);
    setWardrobeTarget(parseInt(Object.values(target)));
  }
  
  return (
    <div className="App">
      <h1>Wardrobe Calculator</h1>
      <h2>Wardrobe Elements: {wardrobeElements.join(",")}</h2>
      <AddTarget onAdd = {addTarget}/>
      <h2>Wardrobe Target: {wardrobeTarget}</h2>
      <h3><b><u>Possible Combinations</u></b></h3>
      <l>
        {result.map((ans,index) => (
          <li>{ans.join(",") + ', Price: ' + result1[index] }</li>
        ))}
      </l>
      <h3>Best Combination (Lowest Price) = {result[result1.indexOf(Math.min(...result1))].join(",")}</h3>
    </div>
  );
}


export default App;
