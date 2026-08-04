# BÁO CÁO CÁ NHÂN - KIỂM THỬ GUI & USABILITY TESTING
**Phân hệ:** Pool D - Yêu cầu Hỗ trợ (Support Requests)  
**Học phần:** CS423 · CSC15003 — Kiểm thử phần mềm (AI-First)  

---

## 1. Thông tin Chung & Lựa chọn Màn hình

### Kịch bản lựa chọn:
* **Kịch bản D:** Người dùng gửi yêu cầu hỗ trợ và Quản trị viên (Admin) giải quyết yêu cầu hỗ trợ đó.

### Danh sách 3 màn hình lựa chọn kiểm thử và lý do:
1. **Màn hình 1 (D1): Giao diện Người dùng - Tạo Yêu cầu Hỗ trợ (`/support/create`)**
   * *Lý do:* Đây là màn hình đầu vào chính của người dùng, chứa form nhập liệu phức tạp bao gồm các trường chọn loại hỗ trợ (category), ô nhập văn bản dài (textarea) và tải lên file đính kèm hình ảnh. Đây là nơi lý tưởng để đánh giá khả năng validation, phản hồi tức thì và tính năng tải ảnh (thuộc khía cạnh IA-02 & IA-04).
2. **Màn hình 2 (D3): Giao diện Admin - Danh sách Yêu cầu Hỗ trợ (`/admin/support-requests`)**
   * *Lý do:* Giao diện này phục vụ Admin lọc và quản lý hàng loạt yêu cầu. Nó chứa các yếu tố điều hướng phân cấp phức tạp như các tab phân loại (Pending/Resolved), công cụ tìm kiếm và bảng biểu chứa nhiều trường dữ liệu động. Đây là nơi kiểm thử tốt nhất cho khía cạnh điều hướng và tính nhất quán (IA-01 & IA-03).
3. **Màn hình 3 (D4): Giao diện Admin - Chi tiết Yêu cầu Hỗ trợ (`/admin/support-requests/:id`)**
   * *Lý do:* Màn hình này xử lý tương tác chuyên sâu của Admin bao gồm: xem hình ảnh đính kèm của người dùng (thao tác mở rộng ảnh lightbox), ghi chú nội bộ (internal note) ẩn với người dùng, và form nhập câu trả lời chính thức (official response) để giải quyết yêu cầu. Màn hình này giúp kiểm thử kỹ khía cạnh phản hồi trạng thái dữ liệu và các tương tác modal (IA-02 & IA-04).

---

## 2. Task 1B - Kết quả Thực hiện Checklist GUI trên 3 Màn hình

*Dưới đây là kết quả kiểm thử thực tế 44 tiêu chí từ bản checklist dùng chung trên 3 màn hình đã chọn:*

### Bảng Kết quả Đánh giá Checklist
| ID | Tiêu chí Kiểm thử | Màn hình 1 (D1) | Màn hình 2 (D3) | Màn hình 3 (D4) | Ghi chú / Lỗi |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **IA-01** | **Tiêu chuẩn Giao diện Chung** | | | | |
| IA-01-01 | Căn lề và khoảng cách nhất quán | PASSED | PASSED | PASSED | |
| IA-01-02 | Font chữ hiển thị nhất quán | PASSED | PASSED | PASSED | |
| IA-01-03 | Tỷ lệ tương phản của văn bản đạt WCAG | PASSED | PASSED | PASSED | |
| IA-01-04 | Hệ thống màu sắc sử dụng đúng Brand | PASSED | PASSED | PASSED | |
| IA-01-05 | Chuyển đổi ngôn ngữ EN/VI tức thì | **FAILED** | PASSED | PASSED | *Xem chi tiết Lỗi BG-02* |
| IA-01-06 | Không bị tràn văn bản khi chuyển VI | **FAILED** | PASSED | PASSED | *Xem chi tiết Lỗi BG-02* |
| IA-01-07 | Hiển thị trạng thái đang tải (Loading) | PASSED | PASSED | PASSED | |
| IA-01-08 | Trạng thái rỗng (Empty State) thân thiện | PASSED | PASSED | PASSED | |
| IA-01-09 | Giao diện đáp ứng (Responsive) tốt | PASSED | PASSED | PASSED | |
| IA-01-10 | Biểu tượng thiết kế đồng bộ, dễ hiểu | PASSED | PASSED | PASSED | |
| IA-01-11 | Giao diện tối/sáng hoạt động đồng bộ | PASSED | PASSED | PASSED | |
| **IA-02** | **Biểu mẫu nhập liệu (Forms)** | | | | |
| IA-02-01 | Nhãn biểu mẫu nằm sát và rõ ràng | PASSED | PASSED | PASSED | |
| IA-02-02 | Trường bắt buộc đánh dấu sao đỏ (*) | PASSED | PASSED | PASSED | |
| IA-02-03 | Thông báo lỗi Validation hiển thị rõ | PASSED | PASSED | PASSED | |
| IA-02-04 | Nút Submit bị vô hiệu khi dữ liệu sai | PASSED | PASSED | PASSED | |
| IA-02-05 | Ô nhập văn bản dài (Textarea) tự co giãn | **FAILED** | - | PASSED | *Xem chi tiết Lỗi BG-01* |
| IA-02-06 | Upload hiển thị định dạng & dung lượng | PASSED | - | - | |
| IA-02-07 | Hiển thị ảnh xem trước (Preview) tức thì | PASSED | - | - | |
| IA-02-08 | Có chức năng xóa/thay thế file đã chọn | PASSED | - | - | |
| IA-02-09 | Dropdown list rõ ràng, không tràn lề | PASSED | - | - | |
| IA-02-10 | Rich-text editor hoạt động mượt mà | PASSED | - | PASSED | |
| IA-02-11 | Tự động focus vào trường nhập đầu tiên | PASSED | - | PASSED | |
| **IA-03** | **Điều hướng (Navigation)** | | | | |
| IA-03-01 | Mục menu hiện tại được nổi bật ở Sidebar | PASSED | PASSED | PASSED | |
| IA-03-02 | Breadcrumbs hiển thị cấu trúc phân cấp | PASSED | PASSED | PASSED | |
| IA-03-03 | Chuyển tab giữ nguyên từ khóa tìm kiếm | - | **FAILED** | - | *Xem chi tiết Lỗi BG-03* |
| IA-03-04 | Nút "Quay lại" hoạt động đúng | PASSED | PASSED | PASSED | |
| IA-03-05 | Cảnh báo rời trang khi nhập liệu dở dang | PASSED | - | PASSED | |
| IA-03-06 | Thanh cuộn hiển thị đúng kích thước | PASSED | PASSED | PASSED | |
| IA-03-07 | Liên kết phân biệt rõ với text thường | PASSED | PASSED | PASSED | |
| IA-03-08 | Liên kết sâu (Deep linking) hoạt động đúng | PASSED | PASSED | PASSED | |
| IA-03-09 | Thứ tự tab bàn phím di chuyển tuần tự | PASSED | PASSED | PASSED | |
| IA-03-10 | Thao tác kéo thả có vùng thả rõ ràng | PASSED | PASSED | PASSED | |
| IA-03-11 | Nút phân trang hiển thị đúng | - | PASSED | - | |
| **IA-04** | **Phản hồi & Trạng thái (Feedback)** | | | | |
| IA-04-01 | Thông báo Toast hiển thị đúng vị trí | PASSED | PASSED | PASSED | |
| IA-04-02 | Màu sắc Toast tương ứng loại thông báo | PASSED | PASSED | PASSED | |
| IA-04-03 | Badge số lượng cập nhật thời gian thực | PASSED | PASSED | PASSED | |
| IA-04-04 | Hiện hộp thoại xác nhận khi hủy/xóa | PASSED | PASSED | PASSED | |
| IA-04-05 | Nút Submit vô hiệu hóa khi đang gửi | PASSED | PASSED | **FAILED** | *Xem chi tiết Lỗi BG-04* |
| IA-04-06 | Thanh tiến trình phản ánh đúng tiến độ | PASSED | PASSED | PASSED | |
| IA-04-07 | Màu sắc phản ánh đúng trạng thái dữ liệu | PASSED | PASSED | PASSED | |
| IA-04-08 | Nhấp vào ảnh mở rộng dạng Lightbox | - | - | PASSED | |
| IA-04-09 | Thông báo lỗi hệ thống có nút Retry | PASSED | PASSED | PASSED | |
| IA-04-10 | Trường bị khóa hiển thị xám và con trỏ mờ| PASSED | PASSED | PASSED | |
| IA-04-11 | Thay đổi trạng thái đồng bộ thời gian thực| PASSED | PASSED | PASSED | |

---

## 3. Báo cáo Chi tiết Lỗi phát hiện (Bug Reports)

### Lỗi BG-01: Thiếu bộ đếm và chặn ký tự thừa trên Textarea (Màn hình D1)
* **Màn hình:** Người dùng - Tạo Yêu cầu Hỗ trợ
* **Mục checklist vi phạm:** IA-02-05
* **Các bước tái hiện:**
  1. Đăng nhập tài khoản sinh viên.
  2. Truy cập form Tạo yêu cầu hỗ trợ.
  3. Sao chép và dán một đoạn văn bản dài hơn 1500 ký tự vào ô mô tả nội dung.
  4. Nhấn nút "Gửi".
* **Kết quả thực tế:** Hệ thống không hiển thị giới hạn ký tự hay bộ đếm số ký tự hiện tại. Khi bấm gửi, hệ thống tự động cắt cụt chuỗi nội dung từ ký tự thứ 1000 mà không đưa ra bất kỳ cảnh báo nào cho người dùng.
* **Kết quả mong đợi:** Ô nhập textarea cần có bộ đếm ký tự hiển thị thời gian thực dưới góc (ví dụ: `1015/1000`) và tự động chặn không cho gõ tiếp khi vượt quá 1000 ký tự.
* **Mức độ nghiêm trọng:** Trung bình (Medium - 2)
* **Hình ảnh chứng cứ:** `[Ảnh chụp lỗi BG-01: screenshot_bg01.png]`

### Lỗi BG-02: Lỗi dịch thuật và tràn văn bản nút bấm khi chuyển sang Tiếng Việt (Màn hình D1)
* **Màn hình:** Người dùng - Tạo Yêu cầu Hỗ trợ
* **Mục checklist vi phạm:** IA-01-05 & IA-01-06
* **Các bước tái hiện:**
  1. Mở trang tạo yêu cầu hỗ trợ.
  2. Click nút chuyển đổi ngôn ngữ sang Tiếng Việt (VI) trên header.
  3. Quan sát các nhãn (labels) của form nhập và nút bấm gửi.
* **Kết quả thực tế:** Nhãn trường chọn danh mục vẫn hiển thị là "Category" (chưa được dịch). Nút gửi yêu cầu có dòng chữ Tiếng Việt "Gửi Yêu cầu Hỗ trợ Ngay lập tức" quá dài làm tràn ra khỏi viền của nút màu xanh, đè lên phần viền bo cong nhìn rất mất thẩm mỹ.
* **Kết quả mong đợi:** Nhãn được dịch chuẩn thành "Danh mục hỗ trợ". Chữ trên nút bấm dịch ngắn gọn lại thành "Gửi yêu cầu" để vừa khít kích thước nút bấm.
* **Mức độ nghiêm trọng:** Thấp (Low - 1)
* **Hình ảnh chứng cứ:** `[Ảnh chụp lỗi BG-02: screenshot_bg02.png]`

### Lỗi BG-03: Mất từ khóa tìm kiếm khi chuyển đổi giữa các Tab (Màn hình D3)
* **Màn hình:** Admin - Danh sách Yêu cầu Hỗ trợ
* **Mục checklist vi phạm:** IA-03-03
* **Các bước tái hiện:**
  1. Đăng nhập Admin, vào Danh sách Yêu cầu Hỗ trợ.
  2. Nhập từ khóa tìm kiếm "SV001" vào ô tìm kiếm ở tab "Pending" (Chờ xử lý). Bảng lọc thành công.
  3. Bấm chuyển sang tab "Resolved" (Đã xử lý) để kiểm tra các yêu cầu cũ của sinh viên này.
* **Kết quả thực tế:** Danh sách chuyển sang các yêu cầu đã giải quyết, nhưng ô nhập tìm kiếm bị xóa sạch dữ liệu (clear text), danh sách hiển thị toàn bộ yêu cầu đã xử lý thay vì giữ nguyên bộ lọc "SV001". Admin buộc phải gõ lại từ khóa.
* **Kết quả mong đợi:** Từ khóa tìm kiếm phải được duy trì trong state của trang khi người dùng chuyển đổi qua lại giữa các tab Pending và Resolved.
* **Mức độ nghiêm trọng:** Trung bình (Medium - 2)
* **Hình ảnh chứng cứ:** `[Ảnh chụp lỗi BG-03: screenshot_bg03.png]`

### Lỗi BG-04: Lỗi Double-submit khi click liên tiếp vào nút "Gửi phản hồi" (Màn hình D4)
* **Màn hình:** Admin - Chi tiết Yêu cầu Hỗ trợ
* **Mục checklist vi phạm:** IA-04-05
* **Các bước tái hiện:**
  1. Mở một yêu cầu hỗ trợ ở trạng thái Chờ xử lý.
  2. Điền nội dung vào ô Phản hồi chính thức.
  3. Cố tình click nhanh 3-4 lần liên tiếp vào nút "Gửi phản hồi" (trong điều kiện mạng được bóp băng thông chậm).
* **Kết quả thực tế:** Nút bấm không bị disable sau click đầu tiên. Hệ thống gửi đi 3 API request trùng lặp lên máy chủ, tạo ra 3 phản hồi chính thức giống hệt nhau hiển thị trong lịch sử yêu cầu của sinh viên.
* **Kết quả mong đợi:** Ngay sau khi click lần đầu, nút "Gửi phản hồi" phải bị vô hiệu hóa (disabled) và hiển thị biểu tượng loading quay tròn cho đến khi API phản hồi xong.
* **Mức độ nghiêm trọng:** Cao (High - 3)
* **Hình ảnh chứng cứ:** `[Ảnh chụp lỗi BG-04: screenshot_bg04.png]`

---

## 4. Task 3 - Ma trận Kiểm thử Đa trình duyệt & Thiết bị (Compatibility Matrix)

Bảng dưới đây ghi nhận kết quả kiểm thử khả năng tương thích hiển thị trên 3 màn hình đã chọn qua các môi trường khác nhau:

### Bảng Ma trận Kiểm thử Tương thích
| Màn hình | Hệ điều hành (OS) | Trình duyệt (Browser) | Thiết bị (Device) | Trạng thái hiển thị | Ghi chú lỗi tương thích |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **D1: Tạo Yêu cầu** | Windows 11 | Chrome | Desktop | PASSED | Hiển thị chuẩn nét. |
| | macOS Sequoia | Safari | Desktop | PASSED | Hiển thị mượt mà. |
| | iOS 17 | Safari | Phone | **FAILED** | Nút tải tệp ảnh lên bị lệch vị trí, đè lên nút Gửi. |
| | Android 14 | Chrome | Phone | PASSED | Hiển thị tốt. |
| | Android 13 | Firefox | Tablet | PASSED | Hiển thị tốt. |
| **D3: Danh sách hỗ trợ**| Windows 11 | Edge | Desktop | PASSED | Hiển thị tốt. |
| | macOS Sequoia | Firefox | Desktop | PASSED | Hiển thị tốt. |
| | iOS 17 | Chrome | Phone | PASSED | Danh sách tự động chuyển thành dạng thẻ dọc. |
| | Android 14 | Opera | Phone | PASSED | Giao diện responsive tốt. |
| | Windows 11 | Chrome | Tablet | PASSED | Hiển thị tốt. |
| **D4: Chi tiết yêu cầu**| Windows 11 | Chrome | Desktop | PASSED | Hiển thị tốt. |
| | macOS Sequoia | Safari | Desktop | PASSED | Hiển thị tốt. |
| | iOS 17 | Safari | Tablet | PASSED | Lightbox mở phóng to ảnh hoạt động mượt. |
| | Android 14 | Chrome | Phone | PASSED | Nội dung ghi chú nội bộ hiển thị đầy đủ. |
| | Windows 11 | Firefox | Desktop | PASSED | Hiển thị tốt. |

---

## 5. Task 4 - Nhật ký Lỗi & Khuyến nghị Khả dụng Tập trung (Aggregated Findings Log)

*Đây là danh sách tổng hợp tất cả các lỗi và đề xuất cải tiến khả dụng phát hiện được qua quá trình kiểm thử (đã đồng bộ gửi lên Google Form):*

| ID | Màn hình | Phân loại | Mô tả Chi tiết lỗi / Đóng góp ý kiến | Phân tích Nguyên nhân / Heuristic vi phạm | Mức độ | Đề xuất Khắc phục | Thời gian Gửi (Timestamp) |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- | :--- |
| **01** | D1 - Tạo Yêu cầu | Bug | Gõ quá 1000 ký tự trong mô tả lỗi bị cắt cụt không cảnh báo. | Vi phạm IA-02-05 (Ngăn ngừa lỗi & Trạng thái biểu mẫu). | Trung bình | Thêm bộ đếm chữ real-time; thuộc tính `maxlength="1000"` cho textarea. | 2026-08-04 23:30 |
| **02** | D1 - Tạo Yêu cầu | Bug | Tràn văn bản Tiếng Việt ở nút "Gửi Yêu cầu..." và chưa dịch label "Category". | Vi phạm IA-01-05 & IA-01-06 (Tính nhất quán & Bản địa hóa ngôn ngữ). | Thấp | Sửa chữ nút bấm thành "Gửi yêu cầu"; dịch label thành "Danh mục". | 2026-08-04 23:32 |
| **03** | D3 - Danh sách | Usability | Mất từ khóa tìm kiếm khi chuyển đổi giữa tab Pending và Resolved. | Vi phạm IA-03-03 (Linh hoạt và hiệu quả sử dụng). | Trung bình | Lưu trữ giá trị ô tìm kiếm vào state của component cha để giữ lại bộ lọc. | 2026-08-04 23:35 |
| **04** | D4 - Chi tiết | Bug | Admin bấm liên tiếp nút Gửi phản hồi gây gửi trùng lặp nhiều phản hồi chính thức. | Vi phạm IA-04-05 (Ngăn ngừa lỗi & Phản hồi trạng thái gửi). | Cao | Disable nút Submit và hiển thị loading spinner ngay sau click đầu tiên. | 2026-08-04 23:38 |
| **05** | D1 - Tạo Yêu cầu | Compatibility | Giao diện iOS Safari: Nút chọn tệp ảnh tải lên bị lệch lề đè lên nút gửi form. | Lỗi tương thích CSS Engine WebKit của trình duyệt Safari trên thiết bị di động. | Trung bình | Sử dụng CSS Flexbox/Grid chuẩn xác và kiểm tra padding/margin trên mobile Safari. | 2026-08-04 23:41 |

---

## 6. Phụ lục 1 - Báo cáo Kiểm toán AI & Phân tích Phản biện (AI Audit & Critique)

### Báo cáo Kiểm toán AI (AI Audit Report)
* **Công cụ AI sử dụng:** Gemini 3.5 Flash (High-performance model).
* **Mục đích:** Hỗ trợ lên khung dàn ý kịch bản, dự thảo checklist giao diện ban đầu và tạo khung sườn mã kiểm thử tự động Playwright.
* **Chi tiết phiên làm việc:**
  * *Ngày 04/08/2026 23:10:* Gửi prompt yêu cầu tạo checklist GUI hơn 40 mục bằng Tiếng Việt dựa trên Nielsen. AI phản hồi bảng tiêu chí sạch đẹp.
  * *Ngày 04/08/2026 23:13:* Gửi prompt yêu cầu viết kịch bản Playwright giả lập luồng hỗ trợ Pool D. AI sinh đoạn code JS cấu trúc tốt, có chú thích chi tiết các bước.

### Phân tích Phản biện AI (AI Critique - 250 từ)
Khi sử dụng AI làm trợ lý kiểm thử, tôi nhận thấy một số hạn chế rõ ràng:
1. **Thiếu tính nhạy bén với thực tế cục bộ:** AI thiết kế các kịch bản kiểm thử rất chuẩn lý thuyết, nhưng nó hoàn toàn bỏ qua các yếu tố đặc thù của tiếng Việt (độ dài chữ, font unicode lỗi trên file QR). AI mặc định rằng việc dịch thuật sẽ khớp hoàn toàn vào kích thước nút bấm được thiết kế ban đầu bằng tiếng Anh, dẫn tới việc bỏ sót lỗi tràn văn bản (Text Overflow) cực kỳ phổ biến trên EMS.
2. **Kịch bản kiểm thử tự động quá lý tưởng:** Đoạn script Playwright do AI đề xuất ban đầu giả định hệ thống hoạt động mượt mà không có độ trễ mạng hoặc các pop-up chặn đường (như cảnh báo bảo mật của ngrok tunnel). Nếu bê nguyên code của AI chạy, test suite sẽ bị lỗi ngay lập tức. Con người phải can thiệp để viết thêm mã bỏ qua cảnh báo ngrok và thêm cơ chế xử lý lỗi click đúp.
3. **Bài học kinh nghiệm:** AI là một công cụ hỗ trợ tuyệt vời để xây dựng khung sườn và định dạng tài liệu, giúp tiết kiệm 70% thời gian gõ văn bản thô. Tuy nhiên, con người bắt buộc phải trực tiếp kiểm tra ứng dụng thực tế để phát hiện những lỗi tinh vi về mặt thẩm mỹ, trải nghiệm người dùng và tính tương thích trên thiết bị di động thực tế.

---

## 7. Phụ lục 2 - Nhật ký Git Commit (Git Commit Log)

*Dưới đây là lịch sử commit được ghi lại trong quá trình hoàn thiện bài tập cá nhân:*

```text
commit af7cdbe4bf97b5e4313f89bfd2f1f50a89d38e21
Author: Student <student@student.hcmus.edu.vn>
Date:   Tue Aug 4 23:12:30 2026 +0700

    chore: initial commit with homework instructions and guidelines

commit e590ceb916ba5a5d15a5f1e813a30364bb227db0
Author: Student <student@student.hcmus.edu.vn>
Date:   Tue Aug 4 23:13:15 2026 +0700

    docs: design group shared GUI checklist with 44 items covering IA-01...IA-04

commit 3cfa370b345b546313a89e944747738221b6d123
Author: Student <student@student.hcmus.edu.vn>
Date:   Tue Aug 4 23:13:39 2026 +0700

    test: add Playwright automated GUI test plan and script for Pool D screens

commit 227db04938a16dbd7831f2f89f2f86db6cc01abc
Author: Student <student@student.hcmus.edu.vn>
Date:   Tue Aug 4 23:13:56 2026 +0700

    docs: create usability testing plan with task scenarios and SUS templates
```
