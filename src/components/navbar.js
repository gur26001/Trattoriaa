import "./navbar.css";
import { Cart } from "./cart";
import { Link } from "react-router-dom";

export function NavBar(){
    return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">Menu</Link>
				</li>
				<li>
					<Link to="/">Book a Table</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/aboutus">About</Link>
				</li>
				<Cart />
			</ul>
		</nav>
	);
}