# 📋 DANH SÁCH 4 ISSUES CHI TIẾT (ĐÃ ĐƯỢC TỐI ƯU ĐỘ DÀI)

*Hãy copy từng phần (từ `###` này đến trước `###` tiếp theo) để tạo riêng từng Issue trên GitHub.*

---

### 📌 Issue 1: [Bài 1] - Hoàn thiện tính năng Counter (useContext + useState)

**Tiêu đề:** `[FEATURE] - Hoàn thiện tính năng Counter (Ex01)`

**Nội dung Body:**
```markdown
## 📝 1. Mô tả tính năng (Feature Description)
Hệ thống cần cung cấp một trang đếm số (Counter) cho phép nhiều thành phần giao diện khác nhau (hiển thị, nút điều khiển, thông báo trạng thái) cùng chia sẻ một trạng thái đếm (count) duy nhất mà không cần truyền prop thủ công từ trên xuống. Để thực hiện việc này, chúng ta sử dụng `useContext` để quản lý trạng thái toàn cục và `useState` để lưu trữ giá trị count.

> **Bối cảnh:** Các component độc lập như `CounterDisplay`, `CounterControls` và `StatusMessage` nằm ở các nhánh khác nhau của cây component nhưng cần đọc và thay đổi chung một giá trị `count`.

---

## 📋 2. Yêu cầu chi tiết (Detailed Requirements)
Cần hoàn thiện các file sau theo đúng đặc tả:
- [ ] **`src/context/CounterContext.jsx`**:
  - Khởi tạo context thông qua hàm `createContext()`.
  - Định nghĩa component `CounterProvider` quản lý state `count` (mặc định là 0).
  - Cung cấp các hàm xử lý logic: `increment` (tăng 1), `decrement` (giảm 1), `reset` (đặt về 0).
  - Viết và export custom hook `useCounter()`. Đảm bảo kiểm tra nếu hook được dùng ngoài `CounterProvider` thì phải ném ra lỗi rõ ràng.
- [ ] **`src/components/counter/CounterDisplay.jsx`**:
  - Gọi custom hook `useCounter()` lấy giá trị `count` và hiển thị ra giao diện.
  - Tuyệt đối không nhận props từ bên ngoài.
- [ ] **`src/components/counter/CounterControls.jsx`**:
  - Dùng `useCounter()` để lấy 3 hàm `increment`, `decrement`, và `reset`.
  - Render 3 nút bấm tương ứng với nhãn là: **+**, **−**, và **Reset**. Không nhận props.
- [ ] **`src/components/counter/StatusMessage.jsx`**:
  - Dùng `useCounter()` lấy giá trị `count`.
  - Biện luận giá trị: Hiển thị chữ *"Dương"* nếu `count > 0`, *"Âm"* nếu `count < 0`, và *"Bằng 0"* nếu `count === 0`. Không nhận props.
- [ ] **`src/pages/Ex01CounterPage.jsx`**:
  - Bọc cấu trúc các component trong thẻ `<CounterProvider>`.
  - Gọi render đầy đủ 3 component con: `<CounterDisplay />`, `<CounterControls />`, và `<StatusMessage />`.

---

## ✅ 3. Tiêu chí hoàn thành (Definition of Done - DoD)
- [ ] Toàn bộ các yêu cầu chi tiết ở mục 2 được lập trình đúng đặc tả.
- [ ] Chạy local bằng `npm run dev` kiểm tra giao diện hiển thị chuẩn xác và mượt mà.
- [ ] Chạy lệnh test tự động: `npm test Ex01` đạt kết quả **PASS** hoàn toàn (7/7 test cases).
- [ ] Không chỉnh sửa bất kỳ file test nào hay các file cấu trúc chung bị cấm trong `README.md`.
- [ ] Nhánh làm việc riêng được đặt tên đúng chuẩn: `feature/bai1` (tách ra từ `dev`).
- [ ] Tạo Pull Request merge vào nhánh `dev`, được review và approve bởi thành viên khác trong nhóm.

---

## 📊 4. Thông tin quản lý (Management Information)

| Trường thông tin | Giá trị / Trạng thái | Gợi ý lựa chọn |
| :--- | :--- | :--- |
| **🔴 Độ ưu tiên (Priority)** | `High` | *Critical / High / Medium / Low* |
| **⏳ Ước tính thời gian (Estimation)** | `1 day` | *Tính theo Giờ (h), Ngày (d) hoặc Story Points* |
| **👤 Người thực hiện (Assignee)** | Nguyễn Bảo Lộc | *Điền username GitHub của thành viên* |
| **🏷️ Nhãn (Labels)** | `enhancement`, `t-feature`, `p1` | *Các tag phân loại* |
```

---

### 📌 Issue 2: [Bài 2] - Hoàn thiện tính năng Login Form (useContext + useState)

**Tiêu đề:** `[FEATURE] - Hoàn thiện tính năng Login Form (Ex02)`

**Nội dung Body:**
```markdown
## 📝 1. Mô tả tính năng (Feature Description)
Hệ thống cần tích hợp cơ chế đăng nhập giả lập và quản lý phiên làm việc của người dùng (thông tin user, trạng thái đang tải loading, thông tin lỗi error) xuyên suốt toàn trang. Trạng thái này được lưu trữ trong một Context dùng chung là `AuthContext` để các thành phần như Navbar hoặc Form có thể truy cập dễ dàng.

> **Bối cảnh:** Trang đăng nhập sẽ tự động chuyển đổi hiển thị giữa form đăng nhập (LoginForm) và màn hình thông tin cá nhân (Dashboard) dựa theo việc người dùng đã xác thực thành công hay chưa.

---

## 📋 2. Yêu cầu chi tiết (Detailed Requirements)
Cần hoàn thiện các file sau theo đúng đặc tả:
- [ ] **`src/context/AuthContext.jsx`**:
  - Tạo `AuthContext` và `AuthProvider`.
  - Khai báo các state: `user` (đối tượng người dùng, mặc định null), `loading` (boolean, mặc định false), `error` (string, mặc định null hoặc rỗng).
  - Hàm `login(email, password)`: Giả lập thời gian phản hồi của API là 800ms bằng `setTimeout`. Tìm kiếm tài khoản trong mảng `USERS` (từ file dữ liệu `src/data/users.js`). Nếu khớp tài khoản mặc định `admin@example.com`/`123456`, cập nhật state `user`. Nếu sai, cập nhật state `error` với thông điệp lỗi.
  - Hàm `logout()`: Reset `user` và `error` về trạng thái ban đầu.
  - Export custom hook `useAuth()`.
- [ ] **`src/components/auth/AuthNavbar.jsx`**:
  - Sử dụng hook `useAuth()` để lấy thông tin `user` và hàm `logout`.
  - Nếu đã đăng nhập: Hiển thị lời chào kèm tên user và nút bấm **Đăng xuất**.
  - Nếu chưa đăng nhập: Hiển thị dòng chữ "Chưa đăng nhập". Không nhận props.
- [ ] **`src/components/auth/LoginForm.jsx`**:
  - Dùng `useAuth()` lấy hàm `login`, state `loading` và `error`.
  - Định nghĩa local state cho `email` và `password`.
  - Giao diện có các trường input với `id="email"` và `id="password"`.
  - Hiển thị banner/thông điệp lỗi nếu `error` có giá trị. Vô hiệu hóa (disable) nút Submit khi đang `loading` để tránh gửi yêu cầu liên tục. Không nhận props.
- [ ] **`src/components/auth/Dashboard.jsx`**:
  - Dùng `useAuth()` để lấy `user`.
  - Hiển thị chi tiết thông tin cá nhân của người dùng đã đăng nhập bao gồm: họ tên, email, và vai trò (role). Không nhận props.
- [ ] **`src/pages/Ex02LoginPage.jsx`**:
  - Bọc toàn bộ các phần tử giao diện trong `<AuthProvider>`.
  - Xây dựng component nội bộ `PageContent` sử dụng hook `useAuth()` để kiểm tra trạng thái đăng nhập. Nếu đã đăng nhập, render `<Dashboard />`, ngược lại render `<LoginForm />`.
  - Component `<AuthNavbar />` phải được hiển thị cố định ở phía trên cùng của trang.

---

## ✅ 3. Tiêu chí hoàn thành (Definition of Done - DoD)
- [ ] Toàn bộ các yêu cầu chi tiết ở mục 2 được lập trình đúng đặc tả.
- [ ] Chạy local bằng `npm run dev` kiểm tra luồng đăng nhập, đăng xuất hoạt động trơn tru.
- [ ] Chạy lệnh test tự động: `npm test Ex02` đạt kết quả **PASS** hoàn toàn (5/5 test cases).
- [ ] Không chỉnh sửa bất kỳ file test nào hay các file cấu trúc chung bị cấm.
- [ ] Nhánh làm việc riêng được đặt tên đúng chuẩn: `feature/bai2` (tách ra từ `dev`).
- [ ] Tạo Pull Request merge vào nhánh `dev`, được review và approve bởi thành viên khác trong nhóm.

---

## 📊 4. Thông tin quản lý (Management Information)

| Trường thông tin | Giá trị / Trạng thái | Gợi ý lựa chọn |
| :--- | :--- | :--- |
| **🔴 Độ ưu tiên (Priority)** | `High` | *Critical / High / Medium / Low* |
| **⏳ Ước tính thời gian (Estimation)** | `1 day` | *Tính theo Giờ (h), Ngày (d) hoặc Story Points* |
| **👤 Người thực hiện (Assignee)** | Hoàng Thị Hải Như | *Điền username GitHub của thành viên* |
| **🏷️ Nhãn (Labels)** | `enhancement`, `t-feature`, `p1` | *Các tag phân loại* |
```

---

### 📌 Issue 3: [Bài 3] - Hoàn thiện tính năng Registration Form (useContext + useReducer)

**Tiêu đề:** `[FEATURE] - Hoàn thiện tính năng Registration Form (Ex03)`

**Nội dung Body:**
```markdown
## 📝 1. Mô tả tính năng (Feature Description)
Hệ thống cần cung cấp một Form đăng ký thành viên chứa nhiều trường thông tin. Form này yêu cầu kiểm tra tính hợp lệ của dữ liệu đầu vào (validation) theo thời gian thực (khi người dùng gõ hoặc khi trỏ chuột ra ngoài trường nhập - blur). Vì trạng thái của Form khá phức tạp, ta sẽ quản lý bằng cách kết hợp `useReducer` và `useContext`.

> **Bối cảnh:** Các ô nhập liệu cần được hiển thị thông điệp lỗi tương ứng ngay khi người dùng nhập sai định dạng hoặc bỏ trống trường thông tin bắt buộc, nhưng chỉ hiển thị sau khi ô đó đã được focus và blur (touched).

---

## 📋 2. Yêu cầu chi tiết (Detailed Requirements)
Cần hoàn thiện các file sau theo đúng đặc tả:
- [ ] **`src/utils/validators.js`**:
  - Hoàn thiện hàm `validateField(name, value, allValues)`:
    - `fullName`: Không được rỗng, độ dài tối thiểu là 3 ký tự.
    - `email`: Không được rỗng, phải khớp định dạng email tiêu chuẩn.
    - `password`: Không được rỗng, độ dài tối thiểu là 6 ký tự, phải bao gồm ít nhất 1 chữ cái viết hoa và 1 chữ số.
    - `confirmPassword`: Không được rỗng, giá trị nhập vào bắt buộc phải trùng khớp hoàn toàn với `allValues.password`.
- [ ] **`src/reducers/formReducer.js`**:
  - Khai báo `initialState` chứa: `values` (lưu data nhập), `errors` (lưu lỗi validation), `touched` (đánh dấu ô đã bị blur), và `status` ('idle', 'submitting', 'success', 'error').
  - Viết pure function `formReducer` xử lý 5 actions:
    - `CHANGE`: Cập nhật value của field, tự động validate lại nếu field đó đã được touched.
    - `BLUR`: Đánh dấu field đã touched, tiến hành chạy validation cho field đó.
    - `VALIDATE_ALL`: Validate toàn bộ các field cùng một lúc, đồng thời đánh dấu touched tất cả các trường thông tin (thường gọi khi bấm submit).
    - `SET_STATUS`: Cập nhật trạng thái tổng thể của form.
    - `RESET`: Trả toàn bộ state về trạng thái `initialState` ban đầu.
- [ ] **`src/context/FormContext.jsx`**:
  - Khởi tạo `FormContext`.
  - Định nghĩa `FormProvider` sử dụng `useReducer(formReducer, initialState)` và truyền giá trị `{ state, dispatch }` vào Context Value.
  - Export custom hook `useFormContext()`.
- [ ] **`src/components/form/FormField.jsx`**:
  - Nhận các props đầu vào: `name`, `label`, `type`, `placeholder`.
  - Sử dụng `useFormContext()` để lấy trạng thái và gọi dispatch.
  - Phát action `CHANGE` khi `onChange` và `BLUR` khi `onBlur`. Chỉ hiển thị thông điệp lỗi bên dưới ô nhập nếu trường đó đã được đánh dấu là `touched` trong state.
- [ ] **`src/components/form/RegistrationForm.jsx`**:
  - Render 4 thành phần `<FormField>` tương ứng cho: `fullName`, `email`, `password`, `confirmPassword`.
  - Khi submit: Dispatch action `VALIDATE_ALL` -> Kiểm tra xem có bất kỳ lỗi nào trong state không. Nếu không có lỗi, chuyển trạng thái sang `'submitting'` -> chờ 1 giây (sử dụng setTimeout) -> chuyển trạng thái sang `'success'`.
  - Khi đăng ký thành công: Hiển thị banner chúc mừng và nút bấm "Đăng ký lại" (nút này sẽ gọi dispatch action `RESET`).
  - Hiển thị banner báo lỗi nếu trạng thái form chuyển sang `'error'`.
- [ ] **`src/pages/Ex03ValidationPage.jsx`**:
  - Bọc trang trong `<FormProvider>` và render component chính `<RegistrationForm />`.

---

## ✅ 3. Tiêu chí hoàn thành (Definition of Done - DoD)
- [ ] Toàn bộ các yêu cầu chi tiết ở mục 2 được lập trình đúng đặc tả.
- [ ] Chạy local bằng `npm run dev` kiểm tra tính năng validate từng trường và quy trình submit thành công.
- [ ] Chạy lệnh test tự động: `npm test Ex03` đạt kết quả **PASS** hoàn toàn (7/7 test cases).
- [ ] Không chỉnh sửa bất kỳ file test nào hay các file cấu trúc chung bị cấm.
- [ ] Nhánh làm việc riêng được đặt tên đúng chuẩn: `feature/bai3` (tách ra từ `dev`).
- [ ] Tạo Pull Request merge vào nhánh `dev`, được review và approve bởi thành viên khác trong nhóm.

---

## 📊 4. Thông tin quản lý (Management Information)

| Trường thông tin | Giá trị / Trạng thái | Gợi ý lựa chọn |
| :--- | :--- | :--- |
| **🔴 Độ ưu tiên (Priority)** | `High` | *Critical / High / Medium / Low* |
| **⏳ Ước tính thời gian (Estimation)** | `1.5 days` | *Tính theo Giờ (h), Ngày (d) hoặc Story Points* |
| **👤 Người thực hiện (Assignee)** | Trần Hoàng Anh | *Điền username GitHub của thành viên* |
| **🏷️ Nhãn (Labels)** | `enhancement`, `t-feature`, `p1` | *Các tag phân loại* |
```

---

### 📌 Issue 4: [Bài 4] - Hoàn thiện tính năng Theme Switcher (useContext + useState)

**Tiêu đề:** `[FEATURE] - Hoàn thiện tính năng Theme Switcher (Ex04)`

**Nội dung Body:**
```markdown
## 📝 1. Mô tả tính năng (Feature Description)
Hệ thống cần cung cấp tính năng chuyển đổi giao diện (Theme Switcher) với 3 chế độ: Light (Sáng), Dark (Tối), và System (Tự động theo hệ điều hành). Lựa chọn của người dùng phải được lưu giữ lại trong `localStorage` để khi họ tải lại trang, giao diện vẫn được áp dụng đúng chế độ cũ.

> **Bối cảnh:** Toàn bộ các component tùy chỉnh như Card, Button, Input cần thay đổi màu nền, màu chữ và màu viền dựa theo giá trị màu được cung cấp từ `ThemeContext` theo đúng bảng cấu hình màu sắc.

---

## 📋 2. Yêu cầu chi tiết (Detailed Requirements)
Cần hoàn thiện các file sau theo đúng đặc tả:
- [ ] **`src/context/ThemeContext.jsx`**:
  - Tạo `ThemeContext` và `ThemeProvider`.
  - State `mode`: Đọc từ `localStorage` khi khởi tạo (giá trị mặc định ban đầu là `'system'`).
  - State `systemPrefersDark`: Lưu trạng thái theme hệ điều hành bằng cách sử dụng `window.matchMedia('(prefers-color-scheme: dark)').matches`.
  - Sử dụng `useEffect` để đăng ký lắng nghe sự kiện thay đổi theme của hệ điều hành và thực hiện cleanup (remove listener) khi component unmount.
  - Biến `resolvedTheme`: Tính toán động xem giao diện thực tế sẽ hiển thị sáng hay tối. Nếu `mode` là `'system'`, nó sẽ phụ thuộc vào `systemPrefersDark`. Nếu `mode` là `'light'` hoặc `'dark'`, nó sẽ tương đương với giá trị của `mode`.
  - Hàm `changeMode(newMode)`: Cập nhật state `mode` và lưu lựa chọn đó vào `localStorage`.
  - Sử dụng `useMemo` bọc giá trị value truyền xuống các component con để tránh re-render thừa. Export hook `useTheme()`.
- [ ] **`src/components/theme/ThemeNavbar.jsx`**:
  - Sử dụng hook `useTheme()` để lấy `mode`, `resolvedTheme`, `colors` và `changeMode`.
  - Render 3 nút bấm tương ứng với các chế độ từ `THEME_MODES` (import từ file `src/data/themeConfig.js`).
  - Highlight nút đang hoạt động, hiển thị text mô tả `resolvedTheme` hiện hành. Áp dụng bảng màu `colors` cho background/text của navbar. Không nhận màu từ props.
- [ ] **`src/components/theme/ThemedCard.jsx`**:
  - Sử dụng hook `useTheme()` lấy bảng màu `colors`.
  - Nhận các props: `title`, `children`.
  - Áp dụng màu nền `colors.surface` và màu viền `colors.border`.
- [ ] **`src/components/theme/ThemedButton.jsx`**:
  - Sử dụng hook `useTheme()` lấy bảng màu `colors`.
  - Nhận các props: `children`, `onClick`, `variant` ('primary' | 'outline').
  - Áp dụng các màu sắc (background, border, text) tương ứng với từng loại `variant` lấy từ bảng màu `colors`.
- [ ] **`src/components/theme/ThemedInput.jsx`**:
  - Sử dụng hook `useTheme()` lấy bảng màu `colors`.
  - Nhận prop: `placeholder`.
  - Áp dụng màu nền `colors.background`, màu viền `colors.border` và màu chữ `colors.text`.
- [ ] **`src/pages/Ex04ThemePage.jsx`**:
  - Bọc trang trong component `<ThemeProvider>`.
  - Định nghĩa component nội bộ `ThemePageContent` dùng hook `useTheme()` để đặt một thẻ div bao phủ toàn trang có background và color tương ứng với bảng màu `colors`.
  - Render `<ThemeNavbar />` và ít nhất 3 component `<ThemedCard>` có chứa các phần tử Themed khác bên trong để phục vụ kiểm thử.

---

## ✅ 3. Tiêu chí hoàn thành (Definition of Done - DoD)
- [ ] Toàn bộ các yêu cầu chi tiết ở mục 2 được lập trình đúng đặc tả.
- [ ] Chạy local bằng `npm run dev` kiểm tra đổi theme, lưu trữ vào localStorage và nhận dạng OS theme.
- [ ] Chạy lệnh test tự động: `npm test Ex04` đạt kết quả **PASS** hoàn toàn (7/7 test cases).
- [ ] Không chỉnh sửa bất kỳ file test nào hay các file cấu trúc chung bị cấm.
- [ ] Nhánh làm việc riêng được đặt tên đúng chuẩn: `feature/bai4` (tách ra từ `dev`).
- [ ] Tạo Pull Request merge vào nhánh `dev`, được review và approve bởi thành viên khác trong nhóm.

---

## 📊 4. Thông tin quản lý (Management Information)

| Trường thông tin | Giá trị / Trạng thái | Gợi ý lựa chọn |
| :--- | :--- | :--- |
| **🔴 Độ ưu tiên (Priority)** | `High` | *Critical / High / Medium / Low* |
| **⏳ Ước tính thời gian (Estimation)** | `1.5 days` | *Tính theo Giờ (h), Ngày (d) hoặc Story Points* |
| **👤 Người thực hiện (Assignee)** | Trần Hoàng Anh | *Điền username GitHub của thành viên* |
| **🏷️ Nhãn (Labels)** | `enhancement`, `t-feature`, `p1` | *Các tag phân loại* |
```
