import React from "react";
import ImagineCards from "../components/ImagineCards";
import cards from "./src/components/cards.json";


const Container = props => (
	<div>
		<row>
			{this.state.cards.map(card => (
				<col s16>
					<ImagineCards
						key={card.id}
						id={card.id}
						image={card.image}
					/>
				</col>
			))}
		</row>
	</div> 
);

export default Container;