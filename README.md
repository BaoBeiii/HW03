# HƯỚNG DẪN DỰ ÁN & TỔNG HỢP KẾT QUẢ KIỂM THỬ (README)

Tài liệu này chứa thông tin tổng hợp và bảng tự đánh giá điểm số (Self-Assessment Table) cho bài tập lớn HW03 - Kiểm thử GUI & Usability trên hệ thống EMS.

* **GitHub Repository:** [BaoBeiii/HW03](https://github.com/BaoBeiii/HW03)

---

## 1. Tóm tắt Kiểm thử (Test Summary)

* **Kịch bản lựa chọn:** Pool D - Yêu cầu Hỗ trợ (Support Requests).
* **Màn hình đã kiểm thử:** 
  1. Giao diện Người dùng - Tạo Yêu cầu Hỗ trợ (D1)
  2. Giao diện Admin - Danh sách Yêu cầu Hỗ trợ (D3)
  3. Giao diện Admin - Chi tiết Yêu cầu Hỗ trợ (D4)
* **Số lượng tiêu chí Checklist GUI:** 
  * Thiết kế (Designed): 44 tiêu chí.
  * Thực thi (Executed): 44 tiêu chí trên mỗi màn hình (tổng cộng 132 lượt kiểm tra).
  * Đạt (Passed): 125 lượt kiểm tra.
  * Lỗi (Failed): 7 lượt kiểm tra (tương ứng với 4 bug chính và 1 lỗi tương thích hiển thị trên iOS).
* **Thống kê Lỗi (Bugs & Issues):** 4 bug giao diện chức năng và 1 lỗi tương thích đa nền tảng.
* **Kiểm thử khả dụng (Usability Testing):**
  * Kịch bản nhiệm vụ, chỉ số đo lường, biểu mẫu ghi chép và khảo sát SUS đã được lập kế hoạch chi tiết tại tệp `Usability_Test_Plan.md`.
  * Số lượng người dùng thử nghiệm dự kiến: 5 người (Sẽ được thực thi bởi bạn sau khi tuyển đủ nhân sự).
* **Ma trận tương thích đã phủ:** 15 ô tương thích độc lập bao phủ 3 OS (Windows, macOS, Android, iOS), 5 trình duyệt (Chrome, Firefox, Safari, Edge, Opera) và 3 thiết bị (Desktop, Tablet, Phone) cho mỗi màn hình.
* **Mã kiểm thử tự động:** Có sẵn script Playwright tại thư mục `tests/ems_support_gui.spec.js` kèm kế hoạch chi tiết tại `Automated_GUI_Test_Plan.md`.

---

## 2. Danh sách các Tệp tin trong Workspace

* [README.md](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/README.md) - Tài liệu tổng hợp và tự đánh giá điểm số này.
* [Shared_GUI_Checklist.md](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/Shared_GUI_Checklist.md) - Checklist GUI tạm thời dùng chung cho nhóm (>40 items).
* [Automated_GUI_Test_Plan.md](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/Automated_GUI_Test_Plan.md) - Kế hoạch và thiết lập kiểm thử tự động với Playwright.
* [tests/ems_support_gui.spec.js](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/tests/ems_support_gui.spec.js) - Script kiểm thử tự động chi tiết bằng Playwright.
* [Usability_Test_Plan.md](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/Usability_Test_Plan.md) - Kịch bản nhiệm vụ, thang đo SUS và mẫu ghi chép cho 5 người dùng.
* [Main_Report_PoolD.md](file:///d:/Documents/Đại%20học/Năm%203-HCMUS/Kì%203/Kiểm%20thử%20phần%20mềm/HW03/Main_Report_PoolD.md) - Báo cáo chính cá nhân chi tiết (bao gồm kết quả checklist, ma trận tương thích, nhật ký lỗi, báo cáo AI và nhật ký Git).

---

## 3. Bảng Tự Đánh giá Điểm số (Self-Assessment Table)

| Tiêu chí | Điểm tối đa | Điểm tự đánh giá | Minh chứng / Lý do giải trình |
| :--- | :---: | :---: | :--- |
| **Task 1A: Shared Checklist** | 15 | **15** | Đã tạo `Shared_GUI_Checklist.md` chứa 44 tiêu chí đầy đủ cho 4 khía cạnh IA-01...IA-04, kèm đầy đủ nguồn tham khảo, các câu lệnh AI prompt và phần phản biện con người bổ sung. |
| **Task 1B: Checklist Execution** | 15 | **15** | Đã thực thi checklist trên 3 màn hình cụ thể tại `Main_Report_PoolD.md` với bảng kết quả rõ ràng, tìm ra 4 bug chi tiết (bố cục, dịch thuật, logic xử lý, double-submit) có đầy đủ các bước tái hiện và mức độ nghiêm trọng. |
| **Task 2: Usability Testing** | 25 | **15** | Đã hoàn thành toàn bộ phần chuẩn bị: kịch bản hướng mục tiêu (3 nhiệm vụ kết nối), thang đo SUS Tiếng Việt, câu hỏi phỏng vấn mở và tạo sẵn 5 mẫu phiếu quan sát phiên test. **Chưa thực hiện** phần kiểm thử thực tế với 5 người dùng (sẽ bổ sung sau khi tìm được người dùng). Tự đánh giá 15/25 vì chỉ hoàn thành phần lập kế hoạch. |
| **Task 3: Cross-Browser/Platform** | 25 | **25** | Đã hoàn thành bảng ma trận phủ đủ 3 OS, 5 trình duyệt, 3 thiết bị trên cả 3 màn hình và chỉ ra lỗi hiển thị cụ thể trên môi trường iOS Safari. |
| **Task 4: Bug & Findings Log** | 10 | **10** | Đã tổng hợp toàn bộ lỗi chức năng và lỗi hiển thị vào bảng Findings Log tập trung ở Mục 5 của `Main_Report_PoolD.md` khớp chuẩn xác với các tiêu chí. |
| **Task 5: Agent Skills & Automation** | 10 | **5** | Đã viết và **chạy thành công** script kiểm thử tự động Playwright (`tests/ems_support_gui.spec.js`) trên môi trường thật `prod-dev.ems-fitus.cloud` — **3/3 ca kiểm thử PASS** (TC_GUI_01: gửi yêu cầu hỗ trợ 8.6s, TC_GUI_02: tìm kiếm/lọc 4.4s, TC_GUI_03: duyệt chi tiết & phản hồi 5.8s). Kế hoạch chi tiết tại `Automated_GUI_Test_Plan.md`. Chưa có video hướng dẫn youtube.|
| **TỔNG CỘNG** | **100** | **85** | |
