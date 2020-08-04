import React from 'react';
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';
import Navbar from './Navbar';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
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

function Projects(props) {
  return (
    // Render a Thumbnail component


    <GridWrapper>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>


    <Navbar fixed="top" />
    <Fade left>
      <h2 className="title_about">Future Prospects</h2>
      </Fade>
  <div class="container">
  As part of the future work, we would explore methodologies to reduce the time lag between the sensor and mouse movement, as well as refining and expanding the number of recognized gestures.
With further development, this technology could be useful for people with disabilities. For example, a paralyzed person could rotate his head to control the direction of his wheelchair. A hat containing a sensor or even glasses with an embedded sensor could be used to control the wheelchair. The chair can be programmed to register the voice commands of the user as starting and stopping the motor and while in action, the user can tilt his head the direction he wants to go. The chair could register this swiping motion and redirect the user in the direction he wants to go. The sensor integration could be taken even one step further with nanochips in the future by embedding the actual sensor inside the eye so that no external sensor is needed to control the chair. Just the eye movements of the user would suffice to control the cart if used this way.

  </div>
      <footer class="contact-footer">
      <div class="social">
      </div>
      <br/>
      <span class="credit">
      <span class="Copyright">©2020 Copyright</span>
      </span>
      </footer>
</GridWrapper>
  )
}

export default Projects;
