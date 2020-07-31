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
      <h2>Division of Work</h2>
      </Fade>
  <div class="container">
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
