import React from "react";
import { Container, Row } from "react-bootstrap";
import HeroForm from "../components/hero_form/HeroForm.js";

const Create = ({ onSubmit }) => {
	const hero = {
		alias: "",
		edad: "",
		especie: "",
		genero: "",
		imagen: "",
		muerte: "",
		nacimiento: "",
		nacionalidad: "",
		nombre: "",
	};
	return (
		<Container className="pb-3">
			<h2 className="text-center border-bottom border-2 border-dark">
				Nuevo heroe
			</h2>
			<Row xs={7} className="justify-content-md-center">
				<HeroForm
					action={"create"}
					onSubmit={onSubmit}
					hero={hero}
					disable={false}
				/>
			</Row>
		</Container>
	);
};

export default Create;
