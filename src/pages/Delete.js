import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import HeroCard from "../components/hero_card/HeroCard";

const Delete = (props) => {
  const [key, setKey] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setKey(e);
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
                  action={"delete"}
                  onSubmit={handleShow}
                  onChange={handleChange}
                ></HeroCard>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Borrar Heroe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de que desea borrar al héroe seleccionado?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              props.onSubmit(key);
              handleClose();
            }}
          >
            Si
          </Button>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Delete;
