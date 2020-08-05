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
          <div class="row">
            <div class="col-sm-6">

              <div class="skllstxt"></div>
            </div>
            <div class="col-sm-6">


            <div class="skills">
            <h2> Overview</h2>
            The project is focused on replicating the movements of a traditional mouse using a STM32 sensortile and a python package called PYAUTOGUI. The idea is that you can integrate a sensortile flashed with the appropriate embedded alogorithm and ML into any wearable device or display which instead of requiring the user to manually select options allows, enables control via gestures. Our POC can be extended further to enable people with permanent disabilities or those who have suffered an injury to their fingers or arms, to use this as a fingreband (or headband or a similar device) to control the mouse/cursor movement. Additionally, this can also be implemented for gesture driven interactions in a VR or AR world.
<br/>
          <h3>  Data Description</h3>
            The dataset used for building the classification models was collected by creating and opening a data port mapping to the STM32 Sensortile hardware as we moved the sensor by hand. We have capture data fom the sensor's Accelaratometer, Magnetometer and Gyroscope6 along the X,Y and Z axis for 6 different hand gestures for the mouse:Up, Down,Left,Right,Spiral and Wave. We collected data for 15 sets for each movetype type in multiple csv files that were merged to create a single csv file. This file was then split into a training dataset csv file and a test dataset csv file.

          <h3>  Our Methodology</h3>
            Step 1. Environment Setup
            Step 2. Data Setup
            Step 3. Exploratory Data Analysis
            Step 4. Classifier Model Training & Evaluate Models
            Model 1:Logitisc Regression
            Model 2: SVM
            Model 3:Random Forest
            Model 4: AdaBoost
            Model 5: XGBoost
            Step 5. Model Selection
            Step 6. Hyper Parameter Tuning Of Selected Model
            Step 7. Save Persistent Finalized Model to Disk


            <h3>5. BEST MODEL SELECTION</h3>
Based upon the above model performance statistics, we can observe that the XGBoost model at 90% accuracy, Precision between 84% to 95% and recall between 80% to 99% for the 6 classes. Comparing the model performancewith other models we observe that Model 5(XGBoost) easily outperforms the other models by a wide margin. The difference in performance is so large that there is no need to even consider an ensemble approach and going with XGBoost as the lone model will be the best approach in our case. Therefore, we select this model as the winner and try to tune in further and see if it imrpves further.

<h4>Model Tuning Result:</h4>
We see a massive improvement in the performance of our model! The accuracy has improved from 85% to aprox 98%. We see similar improvements in Precision and Recall as well.

<h3> 7. SAVE PERSISTANT FINAL MODEL TO DISK</h3>
After training our model, it is desirable to have a way to persist the model for future use without having to retrain. Therefore, we save our trained and hypertuned model to the disk from where it can be re-loaded and used anytime to perform classifications for new input data. The model is stored in a serialized form and deserialized when re-loaded for use. We will use the joblib utility to create and save the seralized persistent model.This fully trained and persistent model is now fully ready to be deployed and invoked in a production environment and peform classification for new input data going forward.







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
