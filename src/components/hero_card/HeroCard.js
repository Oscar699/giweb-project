import React from "react";
import { Button, Stack } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./HeroCard.css";

const HeroCard = (props) => {
	return (
		<Card className="hero-card">
			<Card.Img
				variant="top"
				className="image"
				src={props.hero.imagen}
			/>
			<Card.Header className="text-center text-white bg-dark">
				<Card.Title>{props.hero.alias}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>
					<Stack direction="horizontal" gap={2}>
						<p className="fw-bold mb-0">Nombre:</p>
						<p className="mb-0">{props.hero.nombre}</p>
					</Stack>
				</Card.Text>
				<Card.Text>
					<Stack direction="horizontal" gap={2}>
						<p className="fw-bold">Edad:</p>
						<p>{props.hero.edad}</p>
					</Stack>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-center bg-dark">
				{props.action === "home" && (
					<Button
						variant="outline-light"
						type="button"
						onClick={() => {
							props.onSubmit(props.hero);
						}}
					>
						Detalles
					</Button>
				)}
				{props.action === "delete" && (
					<Button
						type="button"
						variant="white"
						className="btn btn-outline-danger"
						onClick={() => {
							props.onSubmit(props.hero);
							props.onChange(props.id);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-x-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
							/>
							<path
								fill-rule="evenodd"
								d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
							/>
						</svg>
					</Button>
				)}
				{props.action === "edit" && (
					<Button
						variant="outline-primary"
						type="button"
						onClick={() => {
							props.onSubmit([props.hero, props.id]);
						}}
					>
						Editar
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
};

export default HeroCard;
