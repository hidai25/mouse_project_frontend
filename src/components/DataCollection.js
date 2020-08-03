import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import React, { Component } from 'react';
import styled from 'styled-components';
// import Footer from 'rc-footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;

`;

class DataCollection extends Component {
  render() {
    return (
       <GridWrapper>
       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
         <Navbar fixed="top" />
<Fade left>
          <h2 className="title_abou" >Data Collection</h2>
          </Fade>
          <p class="container">

          To collect the data, we first had to investigate the “PYAUTOGUI” package to determine the movements and get an idea of how we could compile the code. After some investigation, we decided to use 6 motions, each mapped to a certain movement of the mouse or a click. The movements we chose to collect data on include right swipe, left swipe, upward swipe, downward swipe, spiral, and wave. The swiping movements are used to control the mouse and which direction it will go as we move the sensor, and the spiral and wave gestures are used to imitate the right and left clicks of the mouse. After agreeing on the types of motions, we proceeded with the data collection.
          For each movement, we decided it would be best to use 75% of the data for training and 25% of the data for testing. To do that, we decided to collect data 30 times for each of the gestures, totaling 180 collections. To add variety to our gestures, we decided to use different speeds for the movements: fast, medium, and slow. These little differences were used to create a real-world-model to accommodate for different users and different speeds. After collecting each data, we labeled them according to their speeds and their types. Finally, we uploaded them to our GitHub repository to proceed with data processing.

          </p>

          <footer class="contact-footer">
          <div class="social">
          </div>
          <br/>
          <span class="credit">
          <span class="Copyright">©2020 Copyright</span> <span class="footername"></span>
          </span>
          </footer>
         </GridWrapper>
    );
  }
}

export default DataCollection;
