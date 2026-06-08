/**
 * validators.js – Hàm validate cho từng field của form đăng ký (Bài 3)
 *
 * TODO: Hoàn thiện logic validate cho từng field theo yêu cầu bên dưới.
 *
 * Quy tắc:
 *  - fullName : không trống, ít nhất 3 ký tự
 *  - email    : không trống, đúng định dạng email
 *  - password : không trống, ≥ 6 ký tự, có ít nhất 1 chữ hoa, 1 chữ số
 *  - confirmPassword : không trống, phải khớp với password
 *
 * @param {string} name       - tên field
 * @param {string} value      - giá trị hiện tại của field
 * @param {object} allValues  - toàn bộ values của form (dùng cho confirmPassword)
 * @returns {string}          - thông báo lỗi, hoặc '' nếu hợp lệ
 */
export function validateField(name, value, allValues = {}) {
  const trimmedValue = (value || '').trim();

  if (!trimmedValue) {
    return 'Trường này không được để trống';
  }

  switch (name) {
    case 'fullName':
      if (trimmedValue.length < 3) {
        return 'Họ tên phải có ít nhất 3 ký tự';
      }
      return '';

    case 'email':
      // Định dạng email regex cơ bản
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedValue)) {
        return 'Email không hợp lệ';
      }
      return '';

    case 'password':
      if (trimmedValue.length < 6) {
        return 'Mật khẩu phải dài ít nhất 6 ký tự';
      }
      const hasUppercase = /[A-Z]/.test(trimmedValue);
      const hasNumber = /[0-9]/.test(trimmedValue);
      if (!hasUppercase) {
        return 'Mật khẩu phải chứa ít nhất 1 chữ hoa';
      }
      if (!hasNumber) {
        return 'Mật khẩu phải chứa ít nhất 1 chữ số';
      }
      return '';

    case 'confirmPassword':
      if (trimmedValue !== (allValues.password || '').trim()) {
        return 'Mật khẩu xác nhận không khớp';
      }
      return '';

    default:
      return '';
  }
}
