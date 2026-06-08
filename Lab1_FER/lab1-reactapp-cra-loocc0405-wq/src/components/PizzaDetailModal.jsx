import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function PizzaDetailModal({ show, pizza, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza?.pizzaName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={pizza?.image} alt={pizza?.pizzaName} style={{ width: '100%' }} />
        <p>{pizza?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}