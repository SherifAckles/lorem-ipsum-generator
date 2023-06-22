import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      setErrorMessage("Please select a valid number");

      return; // Exit the function if the amount is 0 or negative
    }
    if (amount > 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
    setCount(0);
    setErrorMessage(""); // Reset the error message
  };

  return (
    <section className="section-center">
      <h2>Lorem Ipsum generator</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <p className="error-message">{errorMessage}</p>

      <article className="lorem-text">
        {text.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
