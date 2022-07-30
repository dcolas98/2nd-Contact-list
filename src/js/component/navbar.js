import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-end">
			<div>
				<Link to="/add">
					<button className="btn btn-success justify-content-end">
						Add a new contact
					</button>
				</Link>			
			</div>
		</nav>
	);
};
