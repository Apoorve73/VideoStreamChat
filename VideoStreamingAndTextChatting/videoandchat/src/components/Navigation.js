import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/videostream">Videostream</NavLink>
		</div>
	);
};

export default Navigation;
