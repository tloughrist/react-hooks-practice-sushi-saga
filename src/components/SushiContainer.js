import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

let sushiArr = [];
let sushiDisplay = [];

function SushiContainer(props) {
  
  const [page, setPage] = useState(0);

  if (!props.isLoaded) {
    sushiDisplay = <h3>Sushi loading...</h3>;
  } else {
    sushiArr = props.sushiData.map((sushi) => {
      return <Sushi key={sushi.id} name={sushi.name} price={sushi.price} image={sushi.img_url} placePlate={props.placePlate} handleMoney={props.handleMoney} money={props.money}/>;
    })
    sushiDisplay = sushiArr.slice(page, page + 4);
  }

  function handleMoreButton() {
    return setPage(page + 4);
  };

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
}

export default SushiContainer;
