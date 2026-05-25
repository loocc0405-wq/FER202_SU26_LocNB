// PizzaList component hiển thị danh sách các pizza trong một grid đẹp
import React from 'react';
import { Container } from 'react-bootstrap';
import Pizza from './Pizza';
import pizzas from '../Data/pizzaData';
import './PizzaList.css';

function PizzaList() {
    return (
        <Container fluid className="pizza-list-container">
            <h1 className="pizza-list-title">🍕 Our Pizza Menu</h1>
            <Container>
                <div className="pizza-grid">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="pizza-col">
                            <Pizza pizza={pizza} />
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default PizzaList;
