import React from 'react';
import Introduction from './Introduction';
import MissionStatement from './MissionStatement';
import NavBar from './NavBar';

const Header = () => {
	return (
		<div id="main-header">
			<div id="header-circle"></div>
			<NavBar />
			<MissionStatement />
			<Introduction />
		</div>
	);
};

export default Header;
