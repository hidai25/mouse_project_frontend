import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import React, { Component } from 'react';
import styled from 'styled-components';
// import Footer from 'rc-footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

// Render a YouTube video player


const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;

`;

class DataCollection extends Component {
  render() {
    return (
       <GridWrapper>
       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
       <link rel="stylesheet" href="/css/video-react.css" />
       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
         <Navbar fixed="top" />
<Fade left>
          <h2 className="title_about" >Final Product</h2>
          </Fade>
          <p class="container">

          The goal of this project was to create a script that would react to the movement of the sensor tile in real time and move the mouse cursor accordingly on the screen.
<br/>

In order to accomplish this task, the first thing we did was to investigate different machine learning algorithms so that we could differentiate and associate gestures with sensor tile readings.

<br/>
This was done through visualization, feature importance, and dimensionality reduction techniques. We further investigated the accuracy of a variety of classification techniques, determining that XGBoost resulted in high quality classifications.
<br/>

We then created a real time system incorporating C and Python in order to process sensor movements in real time, these sensor readings were then converted into actualized corresponding mouse movements on the screen.
<br/>
Therefore this project demonstrated and serves as a proof of concept on the feasibility of controlling the computer mouse through wearable sensors.
<br/>
We expect this type of technology could be of great interest and benefit for controlling computers remotely without the use of traditional input devices like keyboard and mouse as it’s usually the case in AR and VR environments.

          </p>

          <div
              style={{
                  position: 'absolute', left: '50%', top: '65%',
                  transform: 'translate(-50%, -50%)',

              }}
              >


<ReactPlayer url='https://www.youtube.com/watch?v=G43_SA3sqqU' />
      </div>
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
