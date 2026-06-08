import React from 'react';
import { FormProvider } from '../context/FormContext';
import RegistrationForm from '../components/form/RegistrationForm';

export default function Ex03ValidationPage() {
  return (
    <FormProvider>
      <div style={{ padding: '2rem', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          Bài 3: Đăng ký tài khoản (useReducer + useContext)
        </h1>
        <RegistrationForm />
      </div>
    </FormProvider>
  );
}
