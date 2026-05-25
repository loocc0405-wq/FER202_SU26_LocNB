//Tạo Hello.jsx để hiển thị "Hello, React!" trong thẻ p, chữ React in đậm
import React from 'react';
function Hello() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'white', margin: '20px auto', maxWidth: '600px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <p style={{ fontSize: '24px' }}>Hello, <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span>!</p>
    </div>
  );
}
export default Hello;