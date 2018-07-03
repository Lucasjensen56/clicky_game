// import React from 'react';
import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container"
import cards from "./cards.json";
import './App.css';
import GridList from "./components/GridList";
import ScoreCard from "./components/ScoreCard";


function shuffleCards(array) {
	for (let i = array.length -1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array
}



class App extends Component {

	state = {
		cards,
		currentScore: 0,
		topScore: 0,
		winOrLoseMessage: "",
		clicked: []
	};

	handleClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.handleIncrement();
			this.setState({ clicked: this.state.clicked.concat(id) })
		} else {
			this.handleResetCards();
		}
	};

	handleIncrement = () => {
		const newScore = this.state.currentScore + 1;
		this.setState({
			currentScore: newScore,
			winOrLoseMessage: ""
		}, () => {
			console.log("this is the currentScore " + this.state.currentScore)
		});
		if (newScore >= this.state.topScore) {
			this.setState({ topScore: newScore }, () => {
				console.log("Top Score is " + this.state.topScore)
			})
		} else if  (newScore === 12 ) {
			this.setState({ winOrLoseMessage: "Winner!!" }, () => 
				console.log("updated Score " + newScore)
				)
		}
		this.handleShuffleCards();
	}

	handleResetCards = () => {
		this.setState({
			currentScore: 0,
			topScore: this.state.topScore,
			winOrLoseMessage: "You lose! Try Again",
			clicked: []
		})
		this.handleShuffleCards();
	};

	handleShuffleCards = () => {
		let shuffledCards = shuffleCards(cards);
		this.setState({ cards: shuffledCards }, 
			() => console.log(this.state.cards))
	};


	render() {
		return (
			<Container>
				<NavBar /> 
				 <ScoreCard
				 	currentScore={this.state.currentScore}
					topScore={this.state.topScore}
					winOrLoseMessage={this.state.winOrLoseMessage} 
				 />
				<GridList
					handleClick={this.handleClick}
					handleIncrement={this.handleIncrement}
					handleResetCards={this.handleResetCards}
					handleShuffleCards={this.handleShuffleCards}
				/>
			</Container>
		)
	}
}



export default App;
