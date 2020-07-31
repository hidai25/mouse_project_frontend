import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../styles';
import '../App.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Progress } from 'reactstrap';
// import hidai from '../img/hidai.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
	faGithub
} from "@fortawesome/free-brands-svg-icons";


const GridWrapper = styled.div`
  // display: grid;
  // grid-gap: 10px;
  // margin-top: 1em;
  // margin-left: 6em;
  // margin-right: 6em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
`;

class Home extends Component {

  render() {
    return (

      <GridWrapper>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>


         <Navbar fixed="top" />
          <br/>

<div class="plate">
  <p class="script"><span>Machine Learning</span></p></div>
<br/>
<br/>
<br/>
          <div class="row">
            <div class="col-sm-6">

              <div class="skillstxt"></div>
            </div>
            <div class="col-sm-6">


            <div class="skills">




            </div>

            </div>
          </div>
          <footer bottom="©2020 Copyright">
          <div class="social">
</div>
<br/>
<span>
  ©2020 Copyright<span class="footername"></span>
  </span>
</footer>



  </GridWrapper>
    );
  }
}

export default Home;
