import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemedButton({ children, onClick, variant = 'primary', ...props }) {
  const { colors } = useTheme();

  const isPrimary = variant === 'primary';

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    border: `1px solid ${colors.primary}`,
    backgroundColor: isPrimary ? colors.primary : 'transparent',
    color: isPrimary ? colors.primaryText : colors.primary,
  };

  return (
    <button onClick={onClick} style={buttonStyle} {...props}>
      {children}
    </button>
  );
}
