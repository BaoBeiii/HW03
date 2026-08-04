# Kế hoạch Kiểm thử GUI Tự động - Phân hệ Yêu cầu Hỗ trợ (Pool D)

Tài liệu này mô tả kế hoạch xây dựng và vận hành kiểm thử giao diện tự động (Automated GUI Testing) cho phân hệ Yêu cầu Hỗ trợ (Support Requests) của Hệ thống Quản lý Sự kiện (EMS).

---

## 1. Lựa chọn Công nghệ & Lý do (Tool Selection)

Chúng tôi lựa chọn **Playwright (Node.js)** làm công cụ kiểm thử tự động chính cho dự án này.

### Lý do lựa chọn:
* **Tự động chờ (Auto-waiting):** Playwright tự động chờ các phần tử giao diện hiển thị, click được trước khi thực hiện hành động, giúp giảm thiểu tối đa lỗi kiểm thử bị "nấc" (flaky tests) do mạng chậm hoặc giao diện render bất đồng bộ.
* **Hỗ trợ đa trình duyệt thực tế (Multi-browser support):** Chạy thử nghiệm đồng thời trên các engine trình duyệt thật (Chromium, Firefox, WebKit) thay vì dùng trình duyệt giả lập.
* **Tự động ghi nhận bằng chứng (Trace Viewer & Screenshots):** Playwright có khả năng tự động chụp ảnh màn hình, quay video phiên test và ghi lại vết mạng (Network logs) khi test thất bại, phục vụ đắc lực cho việc làm báo cáo lỗi.
* **Hiệu năng cao:** Chạy nhanh và ổn định hơn đáng kể so với Selenium WebDriver truyền thống.

---

## 2. Thiết lập Môi trường Kiểm thử (Environment Setup)

Để khởi chạy kịch bản kiểm thử tự động, hãy làm theo các bước sau trong máy tính của bạn:

1. **Cài đặt Node.js:** Đảm bảo máy tính đã cài Node.js (phiên bản v18 trở lên).
2. **Khởi tạo Playwright trong dự án:**
   Chạy lệnh sau tại thư mục gốc của dự án:
   ```bash
   npm install @playwright/test
   npx playwright install chromium
   ```
3. **Cài đặt thư mục test:** Tạo thư mục `tests` và đặt file kịch bản `ems_support_gui.spec.js` vào trong đó.
4. **Cấu hình SUT (System Under Test):** Kịch bản kiểm thử hướng tới URL trực tiếp của EMS:
   `https://prod-dev.ems-fitus.cloud/`
5. **Tài khoản kiểm thử:** `admin@gmail.com` / `Admin@123`

---

## 3. Các Ca Kiểm thử Tự động Hóa (Test Cases Covered)

Kịch bản kiểm thử tự động bao gồm 3 màn hình cốt lõi của Pool D:

### Ca kiểm thử 1: Người dùng gửi Yêu cầu Hỗ trợ mới (Màn hình D1)
* **Mục tiêu:** Kiểm tra form tạo yêu cầu hỗ trợ có hiển thị đúng nhãn, cho phép nhập liệu, tải file ảnh lên và gửi thành công.
* **Các bước tự động:**
  1. Điều hướng tới trang đăng nhập, đăng nhập bằng tài khoản Admin.
  2. Truy cập trang "Gửi yêu cầu hỗ trợ" (`/complaints/new`).
  3. Kiểm tra hiển thị các trường biểu mẫu (title, description, request type).
  4. Chọn Loại yêu cầu "Support" từ Dropdown (selector: `li[role="option"][data-key="SUPPORT"]`).
  5. Nhập tiêu đề và mô tả sự cố.
  6. Đính kèm tệp ảnh mock (`mock_ticket_error.png`).
  7. Click nút "Submit request".
  8. Xác minh chuyển hướng thành công về trang `/complaints?created=1`.

### Ca kiểm thử 2: Admin tìm kiếm & Lọc Yêu cầu Hỗ trợ (Màn hình D3)
* **Mục tiêu:** Kiểm tra giao diện quản trị hiển thị danh sách yêu cầu hỗ trợ, bảng dữ liệu và chức năng tìm kiếm.
* **Các bước tự động:**
  1. Đăng nhập bằng tài khoản Admin (`admin@gmail.com` / `Admin@123`).
  2. Điều hướng tới trang Quản lý hỗ trợ (`/dashboard/admin/complaints`).
  3. Xác minh bảng danh sách yêu cầu hiển thị đúng với header.
  4. Nhập từ khóa tìm kiếm vào ô search (selector: `input[aria-label="Search name, email or title"]`).
  5. Xác minh dữ liệu trong bảng được lọc theo từ khóa.

### Ca kiểm thử 3: Admin duyệt chi tiết & Gửi phản hồi (Màn hình D4)
* **Mục tiêu:** Kiểm tra trang chi tiết yêu cầu, nhập phản hồi chính thức và gửi thành công.
* **Các bước tự động:**
  1. Ở danh sách yêu cầu Admin, click vào yêu cầu hỗ trợ đầu tiên trong bảng.
  2. Xác minh trang chi tiết load thành công (`/dashboard/admin/complaints/:id`).
  3. Điền nội dung phản hồi vào textarea.
  4. Click nút "Send response".
  5. Đợi xử lý phản hồi hoàn tất.

---

## 4. Kết quả Chạy Kiểm thử (Test Results)

### Lần chạy cuối cùng (thành công):
```
Running 3 tests using 1 worker

  ok 1 TC_GUI_01: User should be able to create a support request with image attachment (8.6s)
  ok 2 TC_GUI_02: Admin should be able to search and filter support requests (4.4s)
  ok 3 TC_GUI_03: Admin should view request detail, interact with lightbox and submit official response (5.8s)

  3 passed (19.6s)
```

### Tóm tắt:
| Ca kiểm thử | Mô tả | Kết quả | Thời gian |
|---|---|---|---|
| TC_GUI_01 | Người dùng gửi yêu cầu hỗ trợ mới | ✅ PASS | 8.6s |
| TC_GUI_02 | Admin tìm kiếm và lọc danh sách | ✅ PASS | 4.4s |
| TC_GUI_03 | Admin duyệt chi tiết và gửi phản hồi | ✅ PASS | 5.8s |

---

## 5. Hướng dẫn Chạy Kiểm thử (Execution Commands)

* **Chạy kiểm thử ở chế độ ẩn danh (Headless mode - mặc định):**
  ```bash
  npx playwright test tests/ems_support_gui.spec.js
  ```
* **Chạy kiểm thử và hiển thị giao diện trình duyệt thực tế (Headed mode):**
  ```bash
  npx playwright test tests/ems_support_gui.spec.js --headed
  ```
* **Xem báo cáo kết quả kiểm thử trực quan dạng HTML:**
  ```bash
  npx playwright show-report
  ```
