import React from 'react';
import { useFormContext } from '../../context/FormContext';

export default function FormField({ name, label, type = 'text', placeholder }) {
  const { state, dispatch } = useFormContext();

  const value = state.values[name] || '';
  const error = state.errors[name] || '';
  const touched = state.touched[name] || false;

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE', field: name, value: e.target.value });
  };

  const handleBlur = () => {
    dispatch({ type: 'BLUR', field: name });
  };

  // Xác định màu viền input dựa trên trạng thái lỗi
  let borderColor = '#ccc';
  if (touched) {
    borderColor = error ? '#dc3545' : '#28a745'; // Đỏ khi lỗi, Xanh khi hợp lệ
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
      <label htmlFor={name} style={{ fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: `2px solid ${borderColor}`,
          outline: 'none',
          fontSize: '0.95rem',
          transition: 'border-color 0.2s ease-in-out',
        }}
      />
      {touched && error && (
        <span style={{ color: '#dc3545', fontSize: '0.85rem', fontWeight: '500' }}>
          {error}
        </span>
      )}
    </div>
  );
}
