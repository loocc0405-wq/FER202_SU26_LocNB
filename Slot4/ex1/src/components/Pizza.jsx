// Pizza component hiển thị thông tin của 1 pizza, gồm: ID, name, price, description, 
// imageUrl, orignalPrices, salePrice, tag
// Hiển thị thông tin pizza trong một card, sử dụng react-bootstrap để tạo card đẹp mắt, và dễ đọc
//css cho card để nó có nền sáng, chữ màu tối và được căn giữa
import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import MyModal from './MyModal';
import './Pizza.css';

function Pizza({ pizza }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card className="pizza-card">
            <div className="card-image-wrapper">
                <Card.Img 
                    variant="top" 
                    src={pizza.imageUrl} 
                    alt={pizza.name}
                />
                {pizza.tag && <Badge bg="danger" className="pizza-badge">{pizza.tag}</Badge>}
            </div>
            <Card.Body className="pizza-card-body">
                <Card.Title className="pizza-name">{pizza.name}</Card.Title>
                
                <Card.Text className="pizza-description">
                    {pizza.description}
                </Card.Text>
                
                <div className="pizza-price">
                    {pizza.originalPrice && pizza.salePrice && (
                        <span className="original-price">
                            ${pizza.originalPrice}
                        </span>
                    )}
                    <span className="sale-price">
                        ${pizza.salePrice || pizza.price}
                    </span>
                </div>
                
                <button className="view-details-btn" onClick={() => setShowModal(true)}>
                    View Details
                </button>
            </Card.Body>
        </Card>

            <MyModal show={showModal} onHide={() => setShowModal(false)} pizza={pizza} />
        </>
    );
}

export default Pizza;