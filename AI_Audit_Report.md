# Báo cáo Kiểm toán AI (AI Audit Report)

Tài liệu này ghi nhận chi tiết nhật ký tương tác từng bước giữa học viên và trợ lý AI trong suốt bài tập HW03. Để tuân thủ đúng nguyên lý **AI-First**, quá trình làm việc không sử dụng một câu lệnh chung chung mà đi qua các bước hướng dẫn, phản biện và tinh chỉnh chi tiết.

---

## PHIÊN LÀM VIỆC 1: Thiết kế Bản Checklist GUI Dùng Chung
* **Công cụ AI sử dụng:** Gemini 3.5 Flash (High-performance model)
* **Thời gian thực hiện:** Ngày 04/08/2026
* **Mục tiêu:** Thiết kế bản checklist giao diện chuẩn hóa (> 40 tiêu chí) bám sát lý thuyết kiểm thử và đặc thù của EMS.

### Bước 1.1: Khởi tạo khung lý thuyết và liên kết khía cạnh giao diện (IA)
* **Prompt của tôi:**
  > "Tôi đang thực hiện bài tập lớn kiểm thử phần mềm cho hệ thống Event Management System (EMS). Tôi cần thiết kế một bản GUI Checklist dùng chung cho nhóm. Trước tiên, hãy phân tích các nguyên lý thiết kế tương tác kinh điển của Nielsen (10 heuristics), Norman (6 principles) và Shneiderman (8 golden rules). Sau đó, hãy ánh xạ (map) các nguyên lý này vào 4 khía cạnh giao diện bắt buộc của bài tập: IA-01 (General UI standards), IA-02 (Forms), IA-03 (Navigation), và IA-04 (Feedback/State)."
* **Tóm tắt câu trả lời của AI:**
  AI đã tóm tắt các nguyên lý cốt lõi và thực hiện ánh xạ logic:
  * *IA-01 (Tiêu chuẩn chung)*: Ánh xạ với nguyên lý Nhất quán (Consistency) của Shneiderman và Nielsen.
  * *IA-02 (Biểu mẫu)*: Ánh xạ với Ngăn ngừa lỗi (Error prevention) của Nielsen và Ràng buộc (Constraints) của Norman.
  * *IA-03 (Điều hướng)*: Ánh xạ với Khả kiến (Visibility) của Norman và Kiểm soát của người dùng (User control) của Nielsen.
  * *IA-04 (Phản hồi/Trạng thái)*: Ánh xạ với Phản hồi (Feedback) của Norman và Hiển thị trạng thái hệ thống (Visibility of system status) của Nielsen.

### Bước 1.2: Sinh checklist chi tiết dạng bảng (40 tiêu chí ban đầu)
* **Prompt của tôi:**
  > "Dựa trên khung ánh xạ ở Bước 1.1, hãy xây dựng cho tôi một checklist GUI chi tiết bằng Tiếng Việt gồm đúng 40 tiêu chí cụ thể (mỗi khía cạnh IA-01...IA-04 có đúng 10 tiêu chí). Trình bày dưới dạng bảng Markdown gồm các cột: ID, Tiêu chí kiểm thử, và Trạng thái mong đợi (Expected State) khi kiểm thử thực tế."
* **Tóm tắt câu trả lời của AI:**
  AI đã tạo ra một bảng checklist hoàn chỉnh gồm 40 tiêu chí kiểm thử (được đánh mã từ `IA-01-01` đến `IA-04-10`). Bản checklist bao gồm các khía cạnh thực tế như khoảng cách lề (padding/margin), font chữ, độ tương phản màu sắc WCAG, dấu sao bắt buộc trên form, nút cancel quay lại, thứ tự nhấn phím Tab, hiển thị Toast message và trạng thái vô hiệu hóa (disabled) của nút bấm.

### Bước 1.3: Tinh chỉnh checklist theo đặc thù phân hệ Yêu cầu Hỗ trợ (Pool D)
* **Prompt của tôi:**
  > "Checklist chung này đã rất tốt. Tuy nhiên phân hệ tôi chọn kiểm thử là Pool D (Yêu cầu hỗ trợ) có các chức năng đặc thù như: tải tệp ảnh lỗi đính kèm, xem ảnh phóng to bằng Lightbox (ở phía Admin), và tính năng chuyển đổi đa ngôn ngữ Anh/Việt. Hãy cập nhật và bổ sung các tiêu chí kiểm thử cụ thể cho các chức năng này vào bảng checklist để tăng tính thực tế."
* **Tóm tắt câu trả lời của AI:**
  AI đã bổ sung thêm 4 tiêu chí đặc thù:
  * `IA-01-06`: Kiểm tra không bị tràn văn bản Unicode tiếng Việt khi đổi ngôn ngữ (do tiếng Việt thường dài hơn tiếng Anh 30%).
  * `IA-02-06`: Kiểm tra hiển thị ràng buộc dung lượng và định dạng file cho phép khi tải ảnh lên.
  * `IA-02-07` & `IA-02-08`: Kiểm tra xem trước ảnh thumbnail tức thì và nút hủy chọn file ảnh.
  * `IA-04-08`: Nhấp vào ảnh đính kèm mở rộng dạng Lightbox rõ nét ở giao diện xem chi tiết của Admin.
  Checklist chính thức được nâng lên thành 44 tiêu chí.

---

## PHIÊN LÀM VIỆC 2: Phát triển Kịch Bản Kiểm Thử Tự Động Playwright
* **Công cụ AI sử dụng:** Gemini 3.5 Flash (High-performance model)
* **Thời gian thực hiện:** Ngày 04/08/2026
* **Mục tiêu:** Viết và tối ưu hóa mã kiểm thử tự động Playwright (JavaScript) chạy trên môi trường thực tế không bị lỗi.

### Bước 2.1: Viết cấu trúc Test Suite và Luồng Đăng nhập
* **Prompt của tôi:**
  > "Hãy viết một file script kiểm thử giao diện tự động bằng Playwright (JavaScript) cho phân hệ Yêu cầu hỗ trợ (Pool D) trên hệ thống EMS. URL thử nghiệm: `https://prod-dev.ems-fitus.cloud/`. Cấu trúc mã nguồn cần có 3 ca kiểm thử tương ứng với 3 màn hình đã chọn:
  > 1. `TC_GUI_01`: Người dùng đăng nhập, tạo yêu cầu hỗ trợ mới (chọn Request type, nhập Title, Description và gửi thành công).
  > 2. `TC_GUI_02`: Admin đăng nhập, vào danh sách yêu cầu, thực hiện tìm kiếm/lọc.
  > 3. `TC_GUI_03`: Admin xem chi tiết yêu cầu hỗ trợ đầu tiên và gửi phản hồi chính thức."
* **Tóm tắt câu trả lời của AI:**
  AI đã cung cấp cấu trúc mã Playwright cơ bản sử dụng cú pháp `require('@playwright/test')`. Script chứa các bước điều hướng `page.goto('/login')`, nhập thông tin đăng nhập `admin@gmail.com` / `Admin@123`, điền biểu mẫu hỗ trợ, click chọn dropdown, và kiểm tra chuyển hướng URL thành công sau khi gửi.

### Bước 2.2: Tích hợp xử lý Tệp đính kèm (File Upload) và Dropdown động
* **Prompt của tôi:**
  > "Ở ca kiểm thử tạo yêu cầu hỗ trợ (`TC_GUI_01`), tôi cần tải lên một file ảnh minh họa lỗi. Đồng thời, ô chọn danh mục (Request type) là một combostateless dropdown, cần phải click vào nút rồi chọn item có chứa data-key là 'SUPPORT'. Hãy bổ sung mã nguồn giải quyết hai tương tác này một cách an toàn."
* **Tóm tắt câu trả lời của AI:**
  AI đã bổ sung:
  * Trong hook `beforeAll`, sử dụng thư viện `fs` của Node.js để tự động tạo một tệp ảnh mock nhỏ tên `mock_ticket_error.png` tại thư mục kiểm thử, và xóa tệp này trong hook `afterAll`.
  * Dùng hàm `page.setInputFiles('input[type="file"]', filePath)` để thực hiện tải ảnh đính kèm.
  * Cấu trúc click vào nút chọn dropdown, dùng `locator('li[role="option"][data-key="SUPPORT"]')` và thêm lệnh `waitFor` hiển thị trước khi click để tránh lỗi đồng bộ.

### Bước 2.3: Tối ưu hóa đa trình duyệt (WebKit Timeout) và Giao diện Responsive Mobile
* **Prompt của tôi:**
  > "Tôi đang chạy thử nghiệm đa trình duyệt. Trên WebKit (Safari di động), test suite liên tục bị lỗi Timeout 30 giây khi chờ chuyển hướng trang đăng nhập sang `/dashboard`. Hơn thế nữa, trên thiết bị Phone giả lập (như Pixel 5 hay iPhone 14), giao diện danh sách của Admin không dùng thẻ `table` nữa mà responsive tự động đổi thành dạng thẻ dọc `div` làm câu lệnh click dòng đầu tiên `table tbody tr` bị lỗi. Làm thế nào để sửa script cho chạy mượt mà trên 15 cells của ma trận tương thích?"
* **Tóm tắt câu trả lời của AI:**
  AI đã đề xuất thiết kế lại luồng chạy thông qua 2 kỹ thuật nâng cao:
  1. **Tách luồng Đăng nhập (Storage State)**: Đăng nhập duy nhất một lần trên trình duyệt Chromium ở đầu file kiểm thử. Lưu trạng thái phiên làm việc (cookies và localStorage) vào file tạm `state.json` thông qua `context.storageState()`. Khi khởi tạo các trình duyệt sau (WebKit, Firefox), nạp trực tiếp file `state.json` vào cấu hình ngữ cảnh (`browser.newContext({ storageState })`). Việc này giúp tất cả các trình duyệt và thiết bị giả lập bỏ qua hẳn trang login, loại bỏ 100% lỗi timeout chuyển hướng.
  2. **Giải quyết Responsive Mobile cho trang Chi tiết (D4)**: Thay vì cố gắng tìm kiếm dòng `tr` trong bảng danh sách (vốn bị ẩn hoặc đổi cấu trúc trên mobile), hãy viết một hàm phụ `fetchD4DetailUrl` chạy trước trên Chrome Desktop để bấm vào dòng đầu tiên và lấy URL trang chi tiết thực tế (ví dụ: `/dashboard/admin/complaints/63`). Sau đó, ở các ca kiểm thử tương thích thiết bị di động, Playwright chỉ cần điều hướng trực tiếp (`page.goto(resolvedD4Url)`) để chụp ảnh màn hình chi tiết D4 mà không sợ bị vỡ luồng do thay đổi layout danh sách.

---

## PHIÊN LÀM VIỆC 3: Dọn dẹp và Đồng bộ hóa Kho lưu trữ Git (Git Repository Cleanup)
* **Công cụ AI sử dụng:** Gemini 3.5 Flash (High-performance model)
* **Thời gian thực hiện:** Ngày 05/08/2026
* **Mục tiêu:** Loại bỏ các tệp tin cấu hình và thư mục kiểm thử khỏi hệ thống kiểm soát phiên bản Git (nhưng giữ lại ở máy cục bộ).

### Lượt tương tác 1:
* **Prompt của tôi:**
  > "Tôi đã thêm `tests/`, `package.json`, và `package-lock.json` vào `.gitignore` để tránh đẩy chúng lên GitHub. Tuy nhiên, các tệp này đã được commit từ trước nên Git vẫn tiếp tục theo dõi chúng. Hãy hướng dẫn tôi cách xóa chúng khỏi Git index để khi push lên GitHub chúng sẽ biến mất, nhưng vẫn giữ nguyên vẹn các tệp này ở máy local."
* **Tóm tắt câu trả lời của AI:**
  AI đã hướng dẫn sử dụng lệnh `git rm --cached` kết hợp với tham số `-r` cho thư mục. Cụ thể là chạy các lệnh:
  1. `git rm -r --cached tests`
  2. `git rm --cached package-lock.json`
  3. `git rm --cached package.json`
  Lệnh này sẽ xóa các tệp khỏi index của Git (staging area) để đánh dấu xóa trên kho lưu trữ từ xa, nhưng hoàn toàn giữ nguyên dữ liệu vật lý ở máy local.

