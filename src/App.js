import React, {useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Index from "./index";
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}
useEffect(() => {
  const getImage = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`)
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export default function App() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage = useState([]);
}
