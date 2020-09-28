import React, { useState } from "react";

function FormInput() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClearClike = () => setInputValue("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">submit</button>
      </form>
      <div>{inputValue}</div>
      <button onClick={handleClearClike}>clear</button>
    </div>
  );
}
export default FormInput;
