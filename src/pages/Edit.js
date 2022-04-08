import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import HeroCard from "../components/hero_card/HeroCard";
import HeroModal from "../components/hero_modal/HeroModal";

const Edit = (props) => {
	const [key, setKey] = useState("");
	const [hero, setHero] = useState({
		alias: "",
		edad: "",
		especie: "",
		genero: "",
		imagen: "",
		muerte: "",
		nacimiento: "",
		nacionalidad: "",
		nombre: "",
	});
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		setHero(e[0]);
		setKey(e[1]);
		setShow(true);
	};

	return (
		<div>
			<Container className="overflow-hidden mt-3 mb-3">
				<Row md={4} className="gy-4">
					{Object.entries(props.heroes).map(([key, value]) => {
						return (
							<Col>
								<HeroCard
									hero={value}
									key={key}
									id={key}
									action={"edit"}
									onSubmit={handleShow}
								></HeroCard>
							</Col>
						);
					})}
				</Row>
			</Container>
			<HeroModal
				show={show}
				onClose={handleClose}
				onSubmit={props.onSubmit}
				hero={hero}
				id={key}
				disable={false}
				action={"edit"}
			/>
		</div>
	);
};

export default Edit;
