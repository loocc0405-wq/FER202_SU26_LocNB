import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemedCard({ title, children }) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1rem',
        color: colors.text,
        transition: 'all 0.3s ease',
      }}
    >
      {title && (
        <h3
          style={{
            margin: '0 0 1rem 0',
            fontSize: '1.25rem',
            borderBottom: `1px solid ${colors.border}`,
            paddingBottom: '0.5rem',
            color: colors.text,
          }}
        >
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
}
