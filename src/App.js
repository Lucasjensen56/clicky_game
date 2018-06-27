// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import ImagineCards from "./components/ImagineCards";
// import ImageContainer from "./components/imageContainer";
import cards from "./cards.json";
import './App.css';



// const App = () => (
//   <Router>
//     <div>
//       <NavBar />
//       <Title />
//       <ImagineCards />

// 	<container>
// 		<row>
// 			{this.state.cards.map(card => (
// 				<col s16>
// 					<ImagineCards
// 						key={card.id}
// 						id={card.id}
// 						image={card.image}
// 					/>
// 				</col>
// 			))}
// 		</row>
// 	</container> 


//     </div>
//   </Router>
// )

class App extends Component {

	state = {
		cards
	};

	render() {
		return (
			<div>
				<NavBar /> 
				<Title />

				<div>
					<row>
						{this.state.cards.map(card => (
							<column s16>
								<ImagineCards
									key={card.id}
									id={card.id}
									image={card.image}
								/>
							</column>
						))}
					</row>

				</div>



			</div>


		)
	}

  


}



export default App;
