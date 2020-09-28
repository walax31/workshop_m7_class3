import React, { useState } from "react";
function Background(props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    <div onClick={handleClick} style={{ backgroundColor }}>
      {props.children}
      {backgroundColor === "#fff" ? " white" : " red"}
    </div>
  );
}

export default Background;
