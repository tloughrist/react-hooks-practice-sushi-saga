import React from "react";

function MoreButton(props) {

  function clickHandler() {
    return props.handleMoreButton();
  }

  return <button onClick={clickHandler}>More sushi!</button>;
}

export default MoreButton;
