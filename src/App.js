import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";
import { Modal, Row, Button, ModalTitle } from "react-bootstrap";

function App() {
	const API =
		"https://peticiones-giweb-iii-default-rtdb.firebaseio.com/Heroes";
	useEffect(() => {
		getHeroes();
	}, []);

	const [show, setShow] = useState(false);
	const [heroes, setHeroes] = useState({
		1: {
			alias: "",
			edad: "",
			especie: "",
			genero: "",
			imagen: "",
			muerte: "",
			nacimiento: "",
			nacionalidad: "",
			nombre: "",
		},
	});

	const getHeroes = async () => {
		const response = await fetch(`${API}.json`);
		const data = await response.json();
		setHeroes(data);
	};

	const sendHero = async (hero) => {
		const response = await fetch(`${API}.json`, {
			method: "POST",
			body: JSON.stringify(hero),
		});
		const data = await response.json();
	};

	const handleSubmitSend = (hero) => {
		sendHero(hero).then(() => {
			setShow(true);
			getHeroes();
		});
	};

	const deleteHero = async (id) => {
		const response = await fetch(`${API}/${id}.json`, {
			method: "DELETE",
		});
		const data = await response.json();
		return data;
	};

	const handleSubmitDelete = (id) => {
		deleteHero(id).then(() => {
			setShow(true);
			getHeroes();
		});
	};

	const updateHero = async (id, hero) => {
		const response = await fetch(`${API}/${id}.json`, {
			method: "PUT",
			body: JSON.stringify(hero),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
	};

	const handleSubmitUpdate = (id, hero) => {
		updateHero(id, hero).then(() => {
			setShow(true);
			getHeroes();
		});
	};

	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route index element={<Home heroes={heroes} />} />
					<Route
						path="/create"
						element={<Create onSubmit={handleSubmitSend} />}
					/>
					<Route
						path="/delete"
						element={
							<Delete
								heroes={heroes}
								onSubmit={handleSubmitDelete}
							/>
						}
					/>
					<Route
						path="/edit"
						element={
							<Edit
								heroes={heroes}
								onSubmit={handleSubmitUpdate}
							/>
						}
					></Route>
				</Routes>
				<Modal show={show} centered>
					<Modal.Header className="bg-success bg-gradient text-white">
						<ModalTitle>Operación completada</ModalTitle>
					</Modal.Header>
					<Modal.Footer>
						<Button
							onClick={() => setShow(false)}
							variant="outline-success"
						>
							Aceptar
						</Button>
					</Modal.Footer>
				</Modal>
			</BrowserRouter>
		</div>
	);
}

export default App;
