import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemedInput({ placeholder, ...props }) {
  const { colors } = useTheme();

  return (
    <input
      placeholder={placeholder}
      style={{
        backgroundColor: colors.background,
        border: `1px solid ${colors.border}`,
        color: colors.text,
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        width: '100%',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  );
}
