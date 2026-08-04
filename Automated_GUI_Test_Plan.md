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
   npm init playwright@latest -- --yes
   ```
3. **Cài đặt thư mục test:** Tạo thư mục `tests` và đặt file kịch bản `ems_support_gui.spec.js` vào trong đó.
4. **Cấu hình SUT (System Under Test):** Kịch bản kiểm thử hướng tới URL trực tiếp của EMS:
   `https://promoter-starboard-prude.ngrok-free.dev/`

---

## 3. Các Ca Kiểm thử Tự động Hóa (Test Cases Covered)

Kịch bản kiểm thử tự động bao gồm 3 màn hình cốt lõi của Pool D:

### Ca kiểm thử 1: Người dùng gửi Yêu cầu Hỗ trợ mới (Màn hình D1)
* **Mục tiêu:** Kiểm tra form tạo yêu cầu hỗ trợ có hiển thị đúng nhãn, cho phép nhập liệu, tải file ảnh lên và gửi thành công.
* **Các bước tự động:**
  1. Điều hướng tới trang đăng nhập, đăng nhập bằng tài khoản sinh viên/khách (được tạo trước đó).
  2. Truy cập trang "Tạo yêu cầu hỗ trợ" (`/support/create` hoặc qua menu).
  3. Chọn Danh mục (Category) từ Dropdown.
  4. Nhập nội dung mô tả sự cố vào Textarea.
  5. Đính kèm một tệp ảnh (mock image file `.jpg` hoặc `.png`).
  6. Click nút "Gửi yêu cầu" (Submit).
  7. Xác minh thông báo Toast thông báo thành công xuất hiện.

### Ca kiểm thử 2: Admin tìm kiếm & Lọc Yêu cầu Hỗ trợ (Màn hình D3)
* **Mục tiêu:** Kiểm tra giao diện quản trị hiển thị danh sách yêu cầu hỗ trợ, chuyển đổi tab và tìm kiếm hoạt động tốt.
* **Các bước tự động:**
  1. Đăng nhập bằng tài khoản Admin (`admin@gmail.com` / `Admin@123`).
  2. Điều hướng tới trang Quản lý hỗ trợ (`/admin/support-requests`).
  3. Xác minh giao diện có tab "Pending" (Chờ xử lý) và "Resolved" (Đã xử lý).
  4. Nhập mã số thành viên hoặc danh mục vào ô tìm kiếm.
  5. Xác minh dữ liệu trong bảng được lọc đúng theo từ khóa tìm kiếm.

### Ca kiểm thử 3: Admin duyệt chi tiết & Gửi phản hồi (Màn hình D4)
* **Mục tiêu:** Kiểm tra trang chi tiết yêu cầu, xem ảnh đính kèm (Lightbox), nhập ghi chú nội bộ và gửi phản hồi chính thức để chuyển trạng thái yêu cầu hỗ trợ sang Resolved.
* **Các bước tự động:**
  1. Ở danh sách yêu cầu, click chọn yêu cầu hỗ trợ vừa tạo ở Ca kiểm thử 1.
  2. Xác minh ảnh đính kèm hiển thị trên giao diện, click vào ảnh để mở Lightbox, sau đó đóng Lightbox.
  3. Điền nội dung vào ô "Ghi chú nội bộ" (Internal note).
  4. Điền nội dung vào ô "Phản hồi chính thức" (Official response).
  5. Click nút "Gửi phản hồi" (Send Response).
  6. Xác minh yêu cầu chuyển trạng thái từ PENDING sang RESOLVED (hiển thị màu sắc/tag tương ứng).

---

## 4. Hướng dẫn Chạy Kiểm thử (Execution Commands)

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
