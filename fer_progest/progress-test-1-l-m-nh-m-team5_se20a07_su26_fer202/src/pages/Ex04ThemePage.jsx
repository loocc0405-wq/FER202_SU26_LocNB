import React from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import ThemeNavbar from '../components/theme/ThemeNavbar';
import ThemedCard from '../components/theme/ThemedCard';
import ThemedButton from '../components/theme/ThemedButton';
import ThemedInput from '../components/theme/ThemedInput';

function ThemePageContent() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: '100vh',
        padding: '2rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          Exercise 04: Theme Switcher
        </h1>
        
        <ThemeNavbar />

        <ThemedCard title="Card 1: Button Demo">
          <p style={{ color: colors.textMuted, marginBottom: '1rem' }}>
            Đây là phần nội dung bên trong Card 1 với màu chữ nhạt hơn (textMuted). Bên dưới là hai loại nút bấm khác nhau.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ThemedButton variant="primary">Primary Button</ThemedButton>
            <ThemedButton variant="outline">Outline Button</ThemedButton>
          </div>
        </ThemedCard>

        <ThemedCard title="Card 2: Input Demo">
          <p style={{ color: colors.textMuted, marginBottom: '1rem' }}>
            Đây là phần nội dung bên trong Card 2 chứa ô nhập liệu đổi màu theo theme.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Nhập thông tin thử nghiệm:</label>
            <ThemedInput placeholder="Nhập chữ ở đây..." />
          </div>
        </ThemedCard>

        <ThemedCard title="Card 3: System Status">
          <p style={{ color: colors.textMuted }}>
            Card thứ 3 thể hiện tính đồng bộ giao diện toàn bộ hệ thống. Mọi component nằm trong Provider đều phản hồi tức thì khi thay đổi chế độ theme.
          </p>
        </ThemedCard>
      </div>
    </div>
  );
}

export default function Ex04ThemePage() {
  return (
    <ThemeProvider>
      <ThemePageContent />
    </ThemeProvider>
  );
}
