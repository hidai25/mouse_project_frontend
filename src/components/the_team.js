import React from "react";
import '../styles';
import '../App.css';
import Fade from 'react-reveal/Fade';
import { Google,Facebook, Twitter } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const GridWrapper = styled.div`

`;

export default class Contact extends React.Component {
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
           <h2>The team</h2>
           </Fade>
			<Helmet>
							<style>{'body { background-color: #323f54;text-align: center }'}</style>
					</Helmet>
<div class="container-contact100">
			<span class="contact100-form-title-2">

			</span>


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
