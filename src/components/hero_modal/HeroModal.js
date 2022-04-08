import React from "react";
import HeroForm from "../hero_form/HeroForm";
import { Button, Modal } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";

const HeroModal = (props) => {
	return (
		<Modal show={props.show} onHide={() => props.onClose()}>
			<Modal.Header closeButton>
				<Modal.Title>Detalles de {props.hero.alias}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Row className="gy-1">
						<HeroForm
							hero={props.hero}
							disable={props.disable}
							id={props.id}
							onSubmit={props.onSubmit}
							onClose={props.onClose}
							action={props.action}
						></HeroForm>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
};

export default HeroModal;
