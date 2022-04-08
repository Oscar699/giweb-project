import React from "react";
import HeroCard from "../components/hero_card/HeroCard";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import HeroModal from "../components/hero_modal/HeroModal";

const Home = (props) => {
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
		setShow(true);
		setHero(e);
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
									action={"home"}
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
				hero={hero}
				disable={true}
			/>
		</div>
	);
};

export default Home;
