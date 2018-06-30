import React from "react";

const Title = props => (
	<div> 
		<h1>Click on an image to earn points, if you click on a image twice you loose</h1>
		<h2>Current Score: {props.currentScore}</h2>
		<h2>Top Score: {props.topScore}</h2>
		<h2>{props.winOrLoseMessage}</h2>
	</div> 
);

export default Title;