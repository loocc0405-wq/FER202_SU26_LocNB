# HƯỚNG DẪN QUY TRÌNH LÀM VIỆC NHÓM (GIT & WORKFLOW)
*Tài liệu hướng dẫn phối hợp phát triển dự án Progress Test 1 - FER202*

---

## 👥 THÀNH VIÊN & PHÂN CHIA CÔNG VIỆC

| Mã SV | Họ tên | Vai trò | Nhiệm vụ được đề xuất |
|---|---|---|---|
| **DE190985** | **Trần Hoàng Anh** | **Leader** | Tạo nhánh `dev`, tạo Issue, Review PR, làm **Bài 3** (Registration Form) & **Bài 4** (Theme Switcher) |
| **DE190957** | **Nguyễn Bảo Lộc** | **Member** | Làm **Bài 1** (Counter) & Review PR chéo |
| **DE190432** | **Hoàng Thị Hải Như** | **Member** | Làm **Bài 2** (Login Form) & Review PR chéo |

*Lưu ý: Sự phân chia công việc trên là đề xuất để đảm bảo cân bằng tải, nhóm có thể tự điều chỉnh lại.*

---

## 🛠️ QUY TẮC CỐT LÕI TỪ GIÁO VIÊN (Cực kỳ quan trọng!)
Theo yêu cầu trong `README.md`, các thành viên cần tuân thủ nghiêm ngặt:
1. **Chỉ chỉnh sửa các file được đánh dấu "cần hoàn thiện"**:
   - 🚫 **KHÔNG** sửa file test (`src/tests/*`).
   - 🚫 **KHÔNG** sửa `src/App.jsx`, `src/routes/AppRoutes.jsx`, `src/components/shared/AppNavbar.jsx`, và các file trong `src/data/*`.
2. **Quy tắc đặt tên file (Naming Convention)**:
   - **Component**: PascalCase (ví dụ: `LoginForm.jsx`, `ThemedCard.jsx`)
   - **Page**: PascalCase + hậu tố `Page` (ví dụ: `Ex02LoginPage.jsx`)
   - **Context**: PascalCase + hậu tố `Context` (ví dụ: `AuthContext.jsx`)
   - **Reducer**: camelCase + hậu tố `Reducer` (ví dụ: `formReducer.js`)
   - **Utility**: camelCase (ví dụ: `validators.js`)

---

## 🔄 QUY TRÌNH PHÁT TRIỂN CHI TIẾT (STEP-BY-STEP)

### BƯỚC 1: Nhóm trưởng chuẩn bị Repository ban đầu
Nhóm trưởng (Trần Hoàng Anh) thực hiện trên máy cá nhân:
1. Checkout sang nhánh `main`, cập nhật code mới nhất từ cô:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Tạo nhánh chung `dev` từ `main`:
   ```bash
   git checkout -b dev
   ```
3. Push nhánh `dev` lên GitHub:
   ```bash
   git push -u origin dev
   ```
4. **Tạo các Issue trên GitHub**: Leader truy cập vào tab **Issues** trên kho chứa GitHub, tạo 4 Issue tương ứng với 4 bài tập thực hành.

---

### 📋 MẪU TẠO ISSUE (Dành cho Leader)

Khi tạo Issue trên GitHub, điền đầy đủ các thông tin sau:

```markdown
### 📝 Tên Issue:
[Bài X] - Hoàn thiện tính năng [Tên Bài Tập] (Ví dụ: [Bài 1] - Hoàn thiện tính năng Counter)

### 🎯 Mô tả & TODOs:
Dựa theo file README.md, cần hoàn thiện các file sau:
- [ ] file_1_cần_sửa
- [ ] file_2_cần_sửa

### 📋 Tiêu chí nghiệm thu (Acceptance Criteria):
- [ ] Chạy local mượt mà, giao diện hiển thị đúng.
- [ ] Chạy lệnh kiểm tra test pass 100%: `npm test Ex0X`
- [ ] Không sửa các file bị cấm.
- [ ] Đặt tên file/biến đúng Convention.

### ⚙️ Thiết lập (Sidebar):
- **Assignee**: Chọn thành viên chịu trách nhiệm.
- **Labels**: Chọn nhãn phù hợp (ví dụ: `enhancement`, `feature`).
- **Projects / Milestone**: Chọn (nếu có).
- **Priority**: Đặt mức độ ưu tiên (Bài 1, 2: High | Bài 3, 4: High/Medium).
```

---

### BƯỚC 2: Quy trình làm việc của mỗi thành viên (A, B, C...)

#### 1. Lấy code mới nhất trước khi làm việc:
Trước khi bắt đầu code bài của mình, bạn phải lấy code mới nhất từ nhánh `dev` về máy:
```bash
# Di chuyển về nhánh dev
git checkout dev

# Pull code mới nhất từ github về máy
git pull origin dev
```

#### 2. Tạo nhánh tính năng (feature branch) riêng:
Tạo nhánh mới từ nhánh `dev` để code (thay `bai1` bằng bài của bạn, ví dụ: `feature/bai2`, `feature/bai3`...):
```bash
git checkout -b feature/bai1
```

#### 3. Tiến hành code các TODOs được giao:
- Mở code lên và thực hiện các yêu cầu trong `README.md`.
- Vừa làm vừa kiểm tra trên trình duyệt:
  ```bash
  npm install   # nếu là lần đầu chạy dự án
  npm run dev   # chạy dev server
  ```

#### 4. Chạy kiểm tra tự động (Unit Test):
Trước khi push code, bắt buộc phải chạy test để đảm bảo code chạy đúng đặc tả của cô:
```bash
# Ví dụ test bài 1:
npm test Ex01

# Ví dụ test bài 2:
npm test Ex02
```
*Lưu ý: Chỉ khi nào kết quả báo toàn bộ tests đã **PASS** thì mới chuẩn bị push code.*

#### 5. Commit và Push code lên GitHub:
Sau khi test pass, thực hiện push nhánh tính năng của mình lên GitHub:
```bash
# Kiểm tra các file thay đổi
git status

# Thêm các file đã chỉnh sửa vào staging area
git add .

# Commit code với thông điệp rõ nghĩa (Conventional Commits)
git commit -m "feat: hoàn thiện bài 1 counter và pass toàn bộ test case"

# Push nhánh lên GitHub
git push -u origin feature/bai1
```

#### 6. Tạo Pull Request (PR) để Merge vào `dev`:
- Lên repository GitHub, bạn sẽ thấy thông báo gợi ý tạo Pull Request cho nhánh vừa push.
- Nhấp vào **Compare & pull request**.
- **CỰC KỲ QUAN TRỌNG:** Chọn target branch là **`base: dev`** <- **`compare: feature/bai1`** (Tuyệt đối không chọn merge thẳng vào `main`!).
- Gán 1 thành viên khác trong nhóm hoặc Leader làm **Reviewer**.

---

### 📥 MẪU NỘI DUNG PULL REQUEST (PR TEMPLATE)

```markdown
## 📌 Tóm tắt thay đổi (Summary)
- Hoàn thiện bài tập X theo yêu cầu trong README.md.
- Tạo/Sửa các file: [Liệt kê các file đã thay đổi].

## 🧪 Kết quả kiểm thử (Testing)
- Đã chạy lệnh `npm test Ex0X` và tất cả các test case đều **PASS**.
- [Đính kèm ảnh chụp màn hình terminal báo test pass hoặc giao diện chạy thử nếu có]

## 🔗 Liên kết Issue
- Close #[Số_Issue]
```

---

#### 7. Reviewer tiến hành duyệt PR:
- Bạn được gán làm Reviewer sẽ vào tab **Pull Requests** trên GitHub.
- Xem tab **Files changed** để kiểm tra code của bạn mình có chỉnh sửa nhầm file cấm không, có đúng quy tắc đặt tên không.
- Nếu mọi thứ ổn, bấm **Review changes** -> Chọn **Approve** -> Nhấp **Submit review**.
- Tiến hành merge PR vào nhánh `dev` bằng cách bấm **Merge pull request** -> **Confirm merge**.
- Sau khi merge thành công, có thể xóa nhánh phụ trên GitHub để tránh rác repository.

---

### BƯỚC 3: Tổng hợp và nộp bài (Cuối buổi/Khi hoàn thành)
Sau khi tất cả thành viên đã merge code vào nhánh `dev`:
1. Leader checkout về nhánh `dev` tại máy local và pull toàn bộ code mới nhất:
   ```bash
   git checkout dev
   git pull origin dev
   ```
2. Chạy toàn bộ test của dự án để đảm bảo tích hợp không phát sinh lỗi chéo:
   ```bash
   npm test
   ```
   *Yêu cầu: Toàn bộ 26/26 tests của cả 4 bài tập đều phải PASS.*
3. Nếu tất cả đều pass, Leader tiến hành tạo PR từ nhánh `dev` vào nhánh `main` trên GitHub.
4. Reviewer khác trong nhóm duyệt và merge PR từ `dev` vào `main`.
5. Nhánh `main` lúc này chứa bản hoàn thiện cuối cùng để cô chấm điểm.

Chúc nhóm 5 hoàn thành xuất sắc bài Progress Test 1! 🚀
