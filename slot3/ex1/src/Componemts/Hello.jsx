//tạo Hello.jsx để hiển thị "Hello, react!" trong thẻ p, chữ React in đậm
import React from 'react';
function Hello() {
    return (
        <div>
            <p>Hello,<span style={{ color: 'blue', fontWeight: 'bold' }}>react!</span> </p>
        </div>
    );
}
export default Hello;