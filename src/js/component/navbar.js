import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-end">
			<div>
				<button className="btn btn-success justify-content-end">Add New Contact</button>
			</div>
		</nav>
	);
};
