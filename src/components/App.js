import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [dirtyPlates, setDirtyPlates] = useState([]);
  const [remainingMoney, setRemainingMoney] = useState(100);

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => setSushiData(data))
    .then(() => setIsLoaded(true))
  },[])

  function placePlate() {
    return setDirtyPlates([...dirtyPlates, "a plate"]);
  }

  function handleMoney(price) {
    return setRemainingMoney(remainingMoney - price);
  }

  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} isLoaded={isLoaded} placePlate={placePlate} handleMoney={handleMoney} money={remainingMoney}/>
      <Table dirtyPlates={dirtyPlates} remainingMoney={remainingMoney}/>
    </div>
  );
}

export default App;