import React, { useState} from "react";

function Sushi(props) {

  const [isEaten, setIsEaten] = useState(false);

  function eatSushi() {
    if (props.money >= props.price) {
      props.placePlate();
      props.handleMoney(props.price);
      return setIsEaten(!isEaten)
    } else {
      console.log(props.money, props.price)
      return alert("Go get more money!");
    }
    
  };


  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {isEaten ? null : (
          <img
            src={props.image}
            alt={props.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
}

export default Sushi;
