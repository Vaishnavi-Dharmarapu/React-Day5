import React from "react";
import './App.css';
import CustomGreenButton from "./Components/CustomGreenButton";
import CustomRedButton from "./Components/CustomRedButton";

import AboutUs from "./Pages/AboutUs";


function App() {
 
  
  return (
<div className="App">
  <h1 style={{
    backgroundColor:'grey'
  }}>Resume</h1>
<header>

  
<h1>Vaishnavi</h1>
<p>Email: <a href="mailto:vaish@yahoo.com">vaish@yahoo.com</a> <CustomRedButton>Email Me</CustomRedButton>| Phone: +91 9999999999 | LinkedIn: <a href="https://linkedin.com/in/vaishnavi" target="blank">linkedin.com/in/vaishnavi</a><CustomGreenButton>Connect on linkedin</CustomGreenButton></p>
<AboutUs/>
     <h2>Objective</h2>
     <p>To kickstart my professional journey in the field of computer science,by utilizing knowledge and further improve my skills.</p>
     <h2>Skills</h2>
    <ul class="skills">
        <li>Programming Languages: <span class="highlight">JavaScript, Python, Java, C++</span></li>
        <li>Web Development: <span class="highlight">HTML, CSS, JavaScript, React, Node.js</span></li>
        
    </ul>
    
    <h2>Education</h2>
    <ul class="education">
        <li><strong>Btech</strong>,  JNTUH- 2024</li>
        </ul>
        <h2>Languages</h2>
    <ul>
        <li>English (Intermediate)</li>
        <li>Hindi </li>
    </ul>


 </header>
 </div>
  )}
export default App;
