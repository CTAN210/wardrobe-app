import logo from './logo.svg';
import './App.css';
import { calculatePrice, combinationSum } from './logic';
// const {combinationSum}=require("./logic");

function App() {
  

  const wardrobeElements = [50,75,100,120];
  const wardrobeTarget = 300

  const result = combinationSum(wardrobeElements,wardrobeTarget);
  const result1 = calculatePrice(result);
  
  return (
    <div className="App">
      <h1>Wardrobe Calculator</h1>
      <h2>Wardrobe Elements: {wardrobeElements.join(",")}</h2>
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
