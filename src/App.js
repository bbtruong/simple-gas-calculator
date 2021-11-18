import React, {useState} from 'react';

function App() {

  const [gasPrice, setGasPrice] = useState();
  const handleGasPrice = (event) => {
    setGasPrice(event.target.value);
  }

  const [distanceDriven, setDistanceDriven] = useState();
  const handleDistanceDriven = (event) => {
    setDistanceDriven(event.target.value);
  }

  const [gasMileage, setGasMileage] = useState();
  const handleGasMileage = (event) => {
    setGasMileage(event.target.value);
  }

  const [numberPassenger, setNumberPassenger] = useState();
  const handleNumberPassenger = (event) => {
    setNumberPassenger(event.target.value);
  }

  const calculate = () => {
    let costCalculator;
    costCalculator = ((((+gasMileage*distanceDriven)*(gasPrice))/10000)/numberPassenger).toFixed(2);
    return costCalculator;
  }

  const [result, setResult] = useState();
  const resultHandler = () => {
      if (isNaN(calculate())){
        alert('Please input information in all fields.')
      }else{
        setResult(calculate());
      }

    // setResult(calculate());
  }

  return (
  <div className = 'login-box'>
    <h1>Simple Gas Calculator</h1>
    <main>
    <form class = "login-form">
      <label>
        Gas Price (cents/L):
        <input type = "number" name = "Gas Price" className = "form-control" onChange = {handleGasPrice}/>
      </label>
      <div>
        <label >
          Distance Driven (km):
          <input type = "number" name = "Distance Driven" className = "form-control" onChange = {handleDistanceDriven}/>
        </label>
      </div>
      <div>
        <label>
          Gas Mileage of Vehicle (L/100km):
          <input type = "number" name = "Gas Mileage of Vehicle" className = "form-control" onChange = {handleGasMileage}/>
        </label>
      </div>
      <div>
        <label>
          Number of Passengers:
          <input type = "number" name = "Number of Passengers" className = "form-control" onChange = {handleNumberPassenger}/>
        </label>
      </div>
    </form>
    </main>
    <button className = "calculate-button" onClick = {resultHandler}>Calculate</button>
    
    <div className = "result-box">
      <h2>Cost per Individual:</h2>
      <h3>{result}</h3>
    </div>
  </div>
  );
}

export default App;