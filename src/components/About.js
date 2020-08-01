import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import React, { Component } from 'react';
import styled from 'styled-components';
// import Footer from 'rc-footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;

`;

class About extends Component {
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
          <h2 className="title_abou" >About</h2>
          </Fade>
          <p class="container">
          The inspiration for this project was the movie “Minority Report”, specifically the scene where Tom Cruise is using hand gestures to control the display.
          Based on the output from tutorial 1 we know the sensor can tell XYZ dimensions/directions, which means that technically we can capture most of the movements of the mouse.
          We are going to reuse parts of the code from tutorial 1 and modify it to create and open a port to submit data as we move the sensor. More clearly, it’ll be passing the data to a python script. There is a package in python called “PYAUTOGUI” that allows you to control the position of the mouse, which means that once the python application receives the information it can identify changes in the data and correlate those to the mouse position. We will try and capture different movements for the mouse. We will try to at the minimum replicate all the movement classes that the PYAUTOGUI package captures.
          This pipeline will allow you to transfer the information from the sensor to something that can control the position of the mouse. The motivation for this project is that you can integrate this with any device or display so instead of having to manually select options you can do so via gestures, in other words touch might be augmented or substituted by motion. It could later on be modified to work for people with disabilities or ones who have suffered an injury to their fingers or arms, and allow them to use this as a headband (or similar device) to control the mouse/cursor’s movement.
          Additionally, this would also be a better option for interaction in a VR or AR world.


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

export default About;
