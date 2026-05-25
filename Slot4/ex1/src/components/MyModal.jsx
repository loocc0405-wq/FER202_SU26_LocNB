// MyModal component - Reusable modal to display detailed pizza information
// Used by Pizza component when user clicks "View Details"
import React from 'react';
import { Modal } from 'react-bootstrap';
import './MyModal.css';

function getTagClass(tag) {
  if (!tag) return 'default';
  const t = tag.toLowerCase();
  if (t === 'sale') return 'sale';
  if (t === 'new') return 'new';
  if (t === 'hot') return 'hot';
  if (t.includes('best')) return 'best-seller';
  return 'default';
}

function StarRating({ rating = 0 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= Math.round(rating) ? '' : 'empty'}`}>
        ★
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
}

export default function MyModal({ show, onHide, pizza }) {
  if (!pizza) return null;

  const discount = pizza.originalPrice && pizza.salePrice
    ? Math.round(((pizza.originalPrice - pizza.salePrice) / pizza.originalPrice) * 100)
    : 0;

  const displayPrice = pizza.salePrice || pizza.price;

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="pizza-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          🍕 {pizza.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Pizza Image */}
        <div className="modal-pizza-image-wrapper">
          <img src={pizza.imageUrl} alt={pizza.name} />
          {pizza.tag && (
            <span className={`modal-pizza-tag ${getTagClass(pizza.tag)}`}>
              {pizza.tag}
            </span>
          )}
        </div>

        <div className="modal-pizza-content">
          {/* Description */}
          <p className="modal-pizza-description">
            {pizza.description}
          </p>

          {/* Detail Grid */}
          <div className="modal-pizza-details">
            <div className="detail-item">
              <div className="detail-icon id">🆔</div>
              <div className="detail-info">
                <span className="detail-label">Pizza ID</span>
                <span className="detail-value">#{pizza.id}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon price">💰</div>
              <div className="detail-info">
                <span className="detail-label">Price</span>
                <span className="detail-value">${displayPrice}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon category">🏷️</div>
              <div className="detail-info">
                <span className="detail-label">Category</span>
                <span className="detail-value">{pizza.category || 'Classic'}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon rating">⭐</div>
              <div className="detail-info">
                <span className="detail-label">Rating</span>
                <StarRating rating={pizza.rating || 4} />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          {pizza.ingredients && pizza.ingredients.length > 0 && (
            <div className="modal-ingredients">
              <div className="modal-ingredients-title">
                🧾 Ingredients
              </div>
              <div className="ingredients-list">
                {pizza.ingredients.map((item, idx) => (
                  <span key={idx} className="ingredient-chip">{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* Price Section */}
          <div className="modal-price-section">
            <span className="modal-price-label">Total Price</span>
            <div className="modal-price-values">
              {pizza.originalPrice && pizza.salePrice && (
                <>
                  <span className="modal-original-price">${pizza.originalPrice}</span>
                  <span className="modal-discount-badge">-{discount}%</span>
                </>
              )}
              <span className="modal-sale-price">${displayPrice}</span>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="modal-close-btn" onClick={onHide}>
          Close
        </button>
        <button className="modal-order-btn" onClick={onHide}>
          🛒 Add to Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
}
