import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const HeroForm = (props) => {
	const [hero, setHero] = useState(props.hero);

	const handleChange = (e) => {
		setHero({
			...hero,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Form>
			<fieldset disabled={props.disable}>
				<Form.Group className="mb-3" controlId="formAlias">
					<Form.Label className="fw-bold">Alias</Form.Label>
					<Form.Control
						name="alias"
						type="text"
						plaintext={props.disable}
						value={hero.alias}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formEdad">
					<Form.Label className="fw-bold">Edad</Form.Label>
					<Form.Control
						name="edad"
						type="text"
						plaintext={props.disable}
						value={hero.edad}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formEspecie">
					<Form.Label className="fw-bold">Especie</Form.Label>
					<Form.Control
						name="especie"
						type="text"
						plaintext={props.disable}
						value={hero.especie}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGenero">
					<Form.Label className="fw-bold">Genero</Form.Label>
					<Form.Control
						name="genero"
						type="text"
						plaintext={props.disable}
						value={hero.genero}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formImagen">
					<Form.Label className="fw-bold">Imagen</Form.Label>
					<Form.Control
						name="imagen"
						type="text"
						plaintext={props.disable}
						value={hero.imagen}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formMuerte">
					<Form.Label className="fw-bold">Muerte</Form.Label>
					<Form.Control
						name="muerte"
						type="text"
						plaintext={props.disable}
						value={hero.muerte}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formNacimiento">
					<Form.Label className="fw-bold">Nacimiento</Form.Label>
					<Form.Control
						name="nacimiento"
						type="text"
						plaintext={props.disable}
						value={hero.nacimiento}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formNacionalidad">
					<Form.Label className="fw-bold">
						Nacionalidad
					</Form.Label>
					<Form.Control
						name="nacionalidad"
						type="text"
						plaintext={props.disable}
						value={hero.nacionalidad}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formNombre">
					<Form.Label className="fw-bold">Nombre</Form.Label>
					<Form.Control
						name="nombre"
						type="text"
						plaintext={props.disable}
						value={hero.nombre}
						onChange={handleChange}
					/>
				</Form.Group>
			</fieldset>
			{props.action === "create" && (
				<Button
					variant="primary"
					type="button"
					onClick={() => props.onSubmit(hero)}
				>
					Crear
				</Button>
			)}
			{props.action === "edit" && (
				<Button
					variant="primary"
					type="button"
					onClick={() => {
						props.onSubmit(props.id, hero);
						props.onClose();
					}}
				>
					Actualizar
				</Button>
			)}
		</Form>
	);
};

export default HeroForm;
