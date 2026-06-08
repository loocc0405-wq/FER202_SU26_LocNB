import React from 'react';
import { useFormContext } from '../../context/FormContext';
import FormField from './FormField';
import { validateField } from '../../utils/validators';

export default function RegistrationForm() {
  const { state, dispatch } = useFormContext();
  const { status, values } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Dispatch VALIDATE_ALL để hiện toàn bộ lỗi
    dispatch({ type: 'VALIDATE_ALL' });

    // 2. Kiểm tra lỗi ngay lập tức dựa trên giá trị hiện tại
    const currentErrors = {
      fullName: validateField('fullName', values.fullName, values),
      email: validateField('email', values.email, values),
      password: validateField('password', values.password, values),
      confirmPassword: validateField('confirmPassword', values.confirmPassword, values),
    };

    const hasError = Object.values(currentErrors).some((err) => err !== '');
    if (hasError) {
      return;
    }

    // 3. Dispatch SET_STATUS 'submitting'
    dispatch({ type: 'SET_STATUS', status: 'submitting' });

    // 4. Giả lập API call (1000ms)
    setTimeout(() => {
      // 5. Dispatch SET_STATUS 'success'
      dispatch({ type: 'SET_STATUS', status: 'success' });
    }, 1000);
  };

  const handleRegisterAgain = () => {
    dispatch({ type: 'RESET' });
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #28a745', borderRadius: '8px', backgroundColor: '#d4edda', color: '#155724' }}>
        <h3 style={{ marginBottom: '1rem' }}>Đăng ký thành công!</h3>
        <p style={{ marginBottom: '1.5rem' }}>Tài khoản của bạn đã được khởi tạo.</p>
        <button
          onClick={handleRegisterAgain}
          style={{
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Đăng ký lại
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <FormField name="fullName" label="Họ và tên" placeholder="Nhập họ và tên" />
      <FormField name="email" label="Email" type="email" placeholder="Nhập email" />
      <FormField name="password" label="Mật khẩu" type="password" placeholder="Nhập mật khẩu" />
      <FormField name="confirmPassword" label="Xác nhận mật khẩu" type="password" placeholder="Nhập lại mật khẩu" />

      {status === 'error' && (
        <div style={{ padding: '8px 12px', marginBottom: '1rem', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          Vui lòng sửa các lỗi trong form trước khi gửi.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: status === 'submitting' ? '#6c757d' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background-color 0.2s',
        }}
      >
        {status === 'submitting' ? 'Đang gửi...' : 'Đăng ký'}
      </button>
    </form>
  );
}
