import React from 'react';

const MissionStatement = () => {
	return (
		<div id="mission-statement">
			<h3>ABOUT HOP</h3>
			{/* <span>...</span> */}
			<p>
				Our mission is to connect customers to the best local small businesses, taking small town USA global.
				HOP prides itself on increasing brand awareness for mom and pop businesses that deliver unique product
				and services to their customers.
			</p>
			<p>
				HOP is dedicated to bringing small businesses to the online marketplace and re-establish the
				importance of the local shopping experience.
			</p>
			<div id="mission-statement-socials">
				<div>
					<i className="fab fa-instagram"></i>
					<span>hop_global</span>
				</div>
				<div>
					<i className="fab fa-twitter"></i>
					<span>@hop_global</span>
				</div>
			</div>
		</div>
	);
};

export default MissionStatement;
