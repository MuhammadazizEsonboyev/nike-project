import React from "react";
import "./App.css"
import Button from "./components/button/Button";
import Card from "./components/Card/Card";
const one = require('./components/img/1.jpg')
const two = require('./components/img/2.jpg')
const three = require('./components/img/3.jpg')
const four = require('./components/img/4.jpg')

function App() {
  
  return (
  <>
<div className="box">
<div className="container">
  <div className="row mt-5">
    <div className="col-3">
    <Card btn={<Button design="red" child="Submit" />} img={one} title="Westbrook" text="Is an American professional bascetball player for the Oklahoma City Thunder of the NBA"/>
    </div>

    <div className="col-3">
    <Card btn={<Button design="green" child="Follow" />} img={two} title="Westbrook" text="Two time NBA All-Star Game Most Valuable Plaer, winning consecutive awards in 2016 and 2016."/>
    </div>

    <div className="col-3">
    <Card  btn={<Button design="yellow" child="Here we Go" />} img={three} title="Westbrook" text="One of the players in NBA history to average a tripe-double for a season."/>
    </div>

    <div className="col-3">
    <Card btn={<Button />} img={four} title="Westbrook" text="he also set a record for the most triple-doubles  in a season, with 42" />
    </div>
  </div>
</div>
</div>
  </>  
  )
}

export default App;
 