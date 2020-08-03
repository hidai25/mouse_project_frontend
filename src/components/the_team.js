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
import hidai from '../img/hidai.jpeg';
import gurel from '../img/gurel.jpg';
import nina from '../img/nina.jpg';
import vikram from '../img/vikram.jpg';
import vasco from '../img/vasco.png';
import { List, Image } from 'semantic-ui-react'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import {Divider} from '@material-ui/core'


import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon } from "mdbreact";


const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;
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
           <h2>Our amazing team</h2>
           </Fade>

					<div class="topContainer">

<List horizontal>
<ListItem >
			 <ListItemText
				 primary="Hidai Bar-mor (hidai25@gmail.com)"
				 secondary={
					 <React.Fragment>
						 <Typography
							 component="span"
							 variant="body2"
							 // className={classes.inline}
							 color="textPrimary"
						 >

						 </Typography>
						 {" Hidai did the the data collection ,real time python script, github management and web development of the website of the project"}
					 </React.Fragment>
				 }
			 />
			 <ListItemAvatar class="avatar" >
				 <Image avatar src={hidai} />
			 </ListItemAvatar>
		 </ListItem >
  <Divider />
<ListItem >
			 <ListItemText
				 primary="Gurel Ari (gurelari.ivy@gmail.com)"
				 secondary={
					 <React.Fragment>
						 <Typography
							 component="span"
							 variant="body2"
							 // className={classes.inline}
							 color="textPrimary"
						 >

						 </Typography>
						 {" 	Gurel did the data collection for the project and helped writing the final report"}
					 </React.Fragment>
				 }
			 />
			 <ListItemAvatar class="avatar" >
				 <Image avatar src={gurel} />
			 </ListItemAvatar>
		 </ListItem >
<Divider />
<ListItem >
			 <ListItemText
				 primary="Nina Tabari ( naz706@g.harvard.edu)"
				 secondary={
					 <React.Fragment>
						 <Typography
							 component="span"
							 variant="body2"
							 // className={classes.inline}
							 color="textPrimary"
						 >

						 </Typography>
						 {"	Nina did the python script to deploy and run the machine learning model in production and the wrote the reports"}
					 </React.Fragment>
				 }
			 />
			 <ListItemAvatar class="avatar" >
				 <Image avatar src={nina} />
			 </ListItemAvatar>
		 </ListItem >

<Divider />
					 <ListItem >
					 				<ListItemText
					 					primary="Vikram Maduskar (vim882@g.harvard.edu)"
					 					secondary={
					 						<React.Fragment>
					 							<Typography
					 								component="span"
					 								variant="body2"
					 								// className={classes.inline}
					 								color="textPrimary"
					 							>

					 							</Typography>
					 							{" 	Vikram was reponsible for the machine learning part where he preprocessed the data build and ran the model"}
					 						</React.Fragment>
					 					}
					 				/>
									<ListItemAvatar class="avatar" >
					 					<Image avatar src={vikram} />
					 				</ListItemAvatar>
					 			</ListItem >
								<Divider />
								<ListItem >
		 					 				<ListItemText
		 					 					primary="Vasco Meerman (vmeerman.appdev@gmail.com)"
		 					 					secondary={
		 					 						<React.Fragment>
		 					 							<Typography
		 					 								component="span"
		 					 								variant="body2"
		 					 								// className={classes.inline}
		 					 								color="textPrimary"
		 					 							>

		 					 							</Typography>
		 					 							{" Vasco was reponsible for cleaning and preprocessing the data and helped with the implementation of the machine learnign model"}
		 					 						</React.Fragment>
		 					 					}
		 					 				/>
		 									<ListItemAvatar class="avatar" >
		 					 					<Image avatar src={vasco} />
		 					 				</ListItemAvatar>
		 					 			</ListItem >
</List>

  <footer class="contact-footer">
  <div class="social">


  </div>
  <br/>
  <span class="credit">
  <span class="Copyright">©2020 Copyright</span> <span class="footername"></span>
  </span>
  </footer>
	</div>

</GridWrapper>
		);
	}
}







// <MDBCard className="my-5 px-5 pb-5 text-center">
// 				<MDBCardBody>
// 					<p className="grey-text w-responsive mx-auto mb-5">
// 					Our amazing team worked hard day and night to make this project happen:
// 					</p>
// 					<MDBRow>
// 						<MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
// 							<img
// 								tag="img"
// 								src={hidai}
// 								className="rounded-circle z-depth-1 img-fluid"
// 								alt="Sample avatar"
// 							/>
// 							<h5 className="font-weight-bold mt-4 mb-3">Hidai Bar-mor (hidai25@gmail.com)</h5>
// 							<p className="grey-text">
// 								Hidai did the the data collection ,real time python script, github management and web development of the website of the project
// 							</p>
//
// 						</MDBCol>
//
// 						<MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
// 							<img
// 								tag="img"
// 								src={gurel}
// 								className="rounded-circle z-depth-1 img-fluid"
// 								alt="Sample avatar"
// 							/>
// 							<h5 className="font-weight-bold mt-4 mb-3">Gurel Ari (gurelari.ivy@gmail.com)</h5>
// 							<p className="grey-text">
// 								Gurel did the data collection for the project and helped writing the final report
// 							</p>
//
// 						</MDBCol>
//
// 						<MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
// 							<img
// 								tag="img"
// 								src={nina}
// 								className="rounded-circle z-depth-1 img-fluid"
// 								alt="Sample avatar"
// 							/>
// 							<h5 className="font-weight-bold mt-4 mb-3">Nina Tabari ( naz706@g.harvard.edu)</h5>
// 							<p className="grey-text">
// 								Nina did the python script to deploy and run the machine learning model in production and the wrote the reports
// 							</p>
// 						</MDBCol>
//
// 						<MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
// 							<img
// 								src={vikram}
// 								className="rounded-circle z-depth-1 img-fluid"
// 								alt="Sample avatar"
// 							/>
// 							<h5 className="font-weight-bold mt-4 mb-3">Vikram Maduskar (vim882@g.harvard.edu)</h5>
// 							<p className="grey-text">
// 								Vikram was reponsible for the machine learning part where he preprocessed the data build and ran the model
// 							</p>
// 							<img
// 								src={vasco}
// 								className="rounded-circle z-depth-1 img-fluid"
// 								alt="Sample avatar"
// 							/>
// 							<p className="text-uppercase blue-text">Vasco Meerman (vmeerman.appdev@gmail.com)</p>
// 							<p className="grey-text">
// 								Vasco was reponsible for cleaning and preprocessing the data and helped with the implementation of the machine learnign model
// 							</p>
// 						</MDBCol>
// 					</MDBRow>
// 				</MDBCardBody>
// 			</MDBCard>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
