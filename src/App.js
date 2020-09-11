import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header"
import Image from "./Image"
import Footer from "./Footer"
import styled from 'styled-components'

function App() {

  const [image, setImage] = useState([])

  const Background = styled.div`
    background-image: linear-gradient(black, #8c8e9a);
  `




  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=C7pfrpBZTRra0Etc7eupBfATbpk2SJhrhyg0TwJ0")
      .then(res => {
        setImage(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('Try Fetching Again')
      })
  }, [])

  return (
    <Background className="App">
      <Header image={image}/>
      <Image image={image}/>
      <Footer image={image}/>
    </Background>
  );
}

export default App;
