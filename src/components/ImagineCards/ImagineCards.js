import React from "react";

const ImagineCards = props => (
	<div
		className="card"
		value={props.id}
		onClick={() => props.handleClick(props.id)}
	> 
		<div>
			<img alt={props.name} 

			src={(window.location.origin + props.image)} />
		</div>
	</div> 
);

export default ImagineCards;