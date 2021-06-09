import React from 'react';
import Button from '@material-ui/core/Button';

const NavBar = () => {
	return (
		<div id="nav-bar">
			<a href="#">
				<img
					src="https://github.com/Just-Hosam/hop-preview/blob/main/public/Hop-LogoOnDarkBG.png?raw=true"
					alt="HOP_LOGO"
				/>
			</a>
			<Button id="navbar-coupon-btn" variant="contained">
				Coupons
			</Button>
		</div>
	);
};

export default NavBar;
