import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { THEME_MODES, THEME_LABELS } from '../../data/themeConfig';

export default function ThemeNavbar() {
  const { mode, resolvedTheme, colors, changeMode } = useTheme();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`,
        color: colors.text,
        transition: 'all 0.3s ease',
        borderRadius: '6px',
        marginBottom: '1rem',
      }}
    >
      <div>
        <span style={{ fontWeight: 'bold' }}>Theme Switcher</span>
        <span style={{ marginLeft: '10px', fontSize: '0.9rem', color: colors.textMuted }}>
          (Active: <strong>{resolvedTheme === 'dark' ? 'Tối' : 'Sáng'}</strong>)
        </span>
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        {THEME_MODES.map((tMode) => {
          const isActive = mode === tMode;
          return (
            <button
              key={tMode}
              onClick={() => changeMode(tMode)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: `1px solid ${isActive ? colors.primary : colors.border}`,
                backgroundColor: isActive ? colors.primary : colors.background,
                color: isActive ? colors.primaryText : colors.text,
                fontWeight: isActive ? 'bold' : 'normal',
                transition: 'all 0.2s ease',
              }}
            >
              {THEME_LABELS[tMode]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
