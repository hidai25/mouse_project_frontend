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
