import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/" className="brand">
					<Navbar.Brand>Heroes</Navbar.Brand>
				</Link>
				<Nav className="me-auto">
					<Nav.Link>
						<Link to="/create" className="link">
							Crear
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/delete" className="link">
							Borrar
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/edit" className="link">
							Editar
						</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
