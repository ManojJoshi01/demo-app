import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <h2>I am Manoj Joshi</h2>
      <button onClick={() => console.log("Login Successfull")}>
        Go to Login
      </button>
      <select>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Banglore</option>
        <option>Banglore</option>
        <option>Kolkata</option>
      </select>
    </div>
  );
}
