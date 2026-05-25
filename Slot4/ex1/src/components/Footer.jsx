//1. Footer componemt hiển thị thông tin bản quyền và liên kết 
// đến trang chủ của tác giả: ID, Tên, Email, Link github
//hiển thị footer ở cuối trang, đảm bảo rằng nó luôn ở dưới cùng của nội dung, ngay cả khi nội dung không đủ cao để đẩy nó xuống dưới cùng của trang.
//thông tin hiển thị container, rơ, col của bootstrap để tạo bố cục đẹp mắt, và dễ đọc 
// css cho footer đẻ nó có nền sáng, chữ màu tối và được căn giữa

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="footer-section">
            <h5>👤 Student Info</h5>
            <p><strong>ID:</strong> DE190957</p>
            <p><strong>Name:</strong> Nguyễn Bảo Lộc</p>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>📧 Contact</h5>
            <p>Email: <a href="mailto:loocc0405@gmail.com">loocc0405@gmail.com</a></p>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>🔗 Follow</h5>
            <p>
              <a href="https://github.com/loocc0405-wq/FER202_SU26_LocNB.git" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="github-link">
                GitHub Repository
              </a>
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col className="footer-bottom">
            <p>&copy; 2026 Pizza Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;