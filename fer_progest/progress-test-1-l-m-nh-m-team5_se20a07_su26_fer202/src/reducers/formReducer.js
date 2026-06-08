import { validateField } from '../utils/validators';

// TODO 1: Khai báo initialState
export const initialState = {
  values: { fullName: '', email: '', password: '', confirmPassword: '' },
  errors: { fullName: '', email: '', password: '', confirmPassword: '' },
  touched: { fullName: false, email: false, password: false, confirmPassword: false },
  status: 'idle'   // 'idle' | 'submitting' | 'success' | 'error'
};

// TODO 2: Viết formReducer(state, action) xử lý các action
export function formReducer(state, action) {
  // Hỗ trợ cả payload style và flat action style để tăng độ tương thích
  const type = action.type;
  const field = action.field || (action.payload && action.payload.field);
  const value = action.value !== undefined ? action.value : (action.payload && action.payload.value);
  const status = action.status || (action.payload && action.payload.status);

  switch (type) {
    case 'CHANGE': {
      const nextValues = { ...state.values, [field]: value };
      const nextErrors = { ...state.errors };

      if (state.touched[field]) {
        nextErrors[field] = validateField(field, value, nextValues);
      }

      // Nếu thay đổi password và confirmPassword đã touched, phải validate lại confirmPassword
      if (field === 'password' && state.touched.confirmPassword) {
        nextErrors.confirmPassword = validateField('confirmPassword', nextValues.confirmPassword, nextValues);
      }

      return {
        ...state,
        values: nextValues,
        errors: nextErrors
      };
    }

    case 'BLUR': {
      const nextTouched = { ...state.touched, [field]: true };
      const nextErrors = { ...state.errors };
      nextErrors[field] = validateField(field, state.values[field], state.values);

      return {
        ...state,
        touched: nextTouched,
        errors: nextErrors
      };
    }

    case 'VALIDATE_ALL': {
      const nextTouched = { fullName: true, email: true, password: true, confirmPassword: true };
      const nextErrors = {
        fullName: validateField('fullName', state.values.fullName, state.values),
        email: validateField('email', state.values.email, state.values),
        password: validateField('password', state.values.password, state.values),
        confirmPassword: validateField('confirmPassword', state.values.confirmPassword, state.values)
      };

      const hasError = Object.values(nextErrors).some(err => err !== '');

      return {
        ...state,
        touched: nextTouched,
        errors: nextErrors,
        status: hasError ? 'error' : state.status
      };
    }

    case 'SET_STATUS': {
      return {
        ...state,
        status: status
      };
    }

    case 'RESET': {
      return initialState;
    }

    default:
      return state;
  }
}
