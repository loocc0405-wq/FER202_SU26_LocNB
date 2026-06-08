import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { themes, STORAGE_KEY } from '../data/themeConfig';

// TODO 1: Tạo ThemeContext bằng createContext()
export const ThemeContext = createContext(null);

// TODO 2: Tạo ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // State mode: Đọc từ localStorage (STORAGE_KEY) khi khởi tạo, mặc định 'system'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY);
    return savedMode || 'system';
  });

  // State systemPrefersDark: boolean
  // Đọc từ window.matchMedia('(prefers-color-scheme: dark)').matches
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // useEffect: lắng nghe sự thay đổi OS theme (addEventListener 'change')
  // Nhớ cleanup (removeEventListener) khi component unmount.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setSystemPrefersDark(e.matches);
    };

    // Support older browsers/testing environments
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // resolvedTheme: tính từ mode
  // Nếu mode === 'system' → dùng systemPrefersDark ? 'dark' : 'light'
  // Ngược lại → dùng mode
  const resolvedTheme = mode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : mode;

  // colors : themes[resolvedTheme]
  const colors = themes[resolvedTheme] || themes.light;

  // changeMode(newMode):
  // setMode(newMode)
  // Lưu vào localStorage (STORAGE_KEY)
  const changeMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  // Dùng useMemo cho value để tránh re-render không cần thiết.
  const contextValue = useMemo(() => ({
    mode,
    resolvedTheme,
    colors,
    changeMode
  }), [mode, resolvedTheme, colors]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO 3: Tạo custom hook useTheme()
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
