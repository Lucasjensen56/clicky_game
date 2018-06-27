import React from "react";

const ImagineCards = props => (
	<div
		className="card"
		value={props.id}
		onClick={() => props.handleClick(props.id)}
	> 
		<div>
			<p>words</p>
			<img alt={props.name} src={props.image} />
		</div>
	</div> 
);

export default ImagineCards;