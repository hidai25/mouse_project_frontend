import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../styles';
import '../App.css';
import Fade from 'react-reveal/Fade';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Progress } from 'reactstrap';
// import hidai from '../img/hidai.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;
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
<Fade left>
  <h2 className="title_about">Machine Learning</h2>
  </Fade>
  </div>

<br/>

<div class="container">
Our methodology for training, evaluating and optimizing the best performing model selected from among 5 different ML models consisted of the below steps:
<br/>
<br/>
<ul>
<li>Step 1. Environment Setup</li>
<li>Step 2. Data Setup</li>
<li>Step 3. Exploratory Data Analysis</li>
<li>Step 4. Classifier Model Training & Evaluate Models</li>
<li>Model 1:Logistic Regression</li>
<li>Model 2: SVM</li>
<li>Model 3:Random Forest</li>
<li>Model 4: AdaBoost</li>
<li>Model 5: XGBoost</li>
<li>Step 6. Hyper Parameter Tuning Of Selected Model</li>
<li>Step 7. Save Persistent Finalized Model to Disk</li>
</ul>
<br/>
The performance metrics used as the basis for selecting the best model were: Accuracy, Precision, Recall and Prediction execution time. Of the ML 5 models listed above, our evaluation selected XGBoost to be the best model. We then further tuned the hyper parameters of this model using Grid-search cross validation approach to optimize its performance significantly further. The hyper tuned final model was then saved in a serialized, persistent format whereby it could be deployed and invoked in a live environment anytime for performing classification on new real time sensor data.

*Note: For full details and python code of our ML modelling methodology please refer to the attached Jupyter notebook and our Github repository.

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
