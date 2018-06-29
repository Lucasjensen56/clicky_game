// import React from 'react';
import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import ImagineCards from "./components/ImagineCards";
import Container from "./components/Container"
import Row from "./components/Row";
import Column from "./components/Column";
import cards from "./cards.json";
import './App.css';

function shuffleCards(array) {
	for (let i = array.length -1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array
	console.log(array)
}



class App extends Component {

	state = {
		cards,
		userScore: 0,
		topScore: 0,
		winOrLoseMessage: "",
		clicked: []
	};

	handleClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.handleIncrement();
			this.setState({ clicked: this.state.clicked.concat(id) }, () => {
				console.log("Ids that were clicked " + this.state.clicked)
			})
		} else {
			this.handleResetCards();
		}
	};

	handleIncrement = () => {
		const updatedScore = this.state.userScore + 1;
		this.setState({
			userScore: updatedScore,
			winOrLoseMessage: ""
		}, () => {
			console.log(this.updatedScore)
			console.log("this is the userscore " + this.state.userScore)
		})
		if (updatedScore >= this.state.userScore) {
			this.setState({ topScore: updatedScore }, () => {
				console.log(this.state.topScore)
			})
		} else if  (updatedScore === 5 ) {
			this.setState({ winOrLoseMessage: "Winner!!" }, () => {
				console.log(updatedScore)
			})
		}
	}

	handleResetCards = () => {
		this.setState({
			userScore: 0,
			topScore: this.state.topScore,
			winOrLoseMessage: "You lose! Try Again",
			clicked: []
		}, 
		() => console.log(this.state.clicked) )
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
				<Title
					usersScore={this.state.userScore}
					topScore={this.state.topScore}
					winOrLoseMessage={this.state.winOrLoseMessage}

				 />
				<div>
					<Row>
						{this.state.cards.map(card => (
	
								<ImagineCards
									key={card.id}
									handleClick={this.handleClick}
									handleIncrement={this.handleIncrement}
									handleResetCards={this.handleResetCards}
									handleShuffleCards={this.handleShuffleCards}
									id={card.id}
									image={card.image}
								/>

						))}
					</Row>
				</div>
			</Container>
		)
	}
}



export default App;
