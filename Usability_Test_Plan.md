# Kế hoạch & Tài liệu Hướng dẫn Kiểm thử Độ khả dụng (Usability Testing Plan)

*Tài liệu này chuẩn bị đầy đủ các quy trình, kịch bản, bảng khảo sát và mẫu ghi chép cho cuộc kiểm thử độ khả dụng (Usability Testing) với 5 người dùng thực tế trên phân hệ Yêu cầu Hỗ trợ (Pool D) của hệ thống EMS.*

---

## 1. Quy trình Thực hiện Kiểm thử (Testing Procedure)

Cuộc kiểm thử sẽ được tiến hành theo giao thức 5 người dùng (5-User Protocol) dưới hình thức kiểm thử trực tiếp có điều phối viên (Moderated, Think-Aloud Session):

1. **Chuẩn bị môi trường:** Thiết lập thiết bị ghi hình/quay màn hình (nếu được sự đồng ý), truy cập sẵn trang EMS ở màn hình chờ đăng nhập.
2. **Khởi động phiên test (Set the stage):**
   * Giải thích với người tham gia rằng chúng ta đang kiểm thử sản phẩm (giao diện phần mềm), không phải kiểm thử năng lực của người tham gia.
   * Khuyến khích người dùng liên tục suy nghĩ thành tiếng (Think Aloud) trong quá trình thao tác (ví dụ: đang tìm nút nào, cảm thấy bối rối ở đâu).
3. **Đọc kịch bản nhiệm vụ:** Đọc to từng nhiệm vụ cho người tham gia và để họ tự thực hiện mà không có sự gợi ý hay hướng dẫn từng bước của điều phối viên.
4. **Quan sát và ghi nhận:** Điều phối viên ghi chép các lỗi (errors), sự ngập ngừng (hesitations), thời gian hoàn thành (time on task) và tỷ lệ thành công (success rate).
5. **Khảo sát sau kiểm thử:** Sau khi hoàn thành tất cả nhiệm vụ, người dùng điền bảng khảo sát SUS và trả lời các câu hỏi phỏng vấn mở (Probe Questions).

---

## 2. Kịch bản Nhiệm vụ Hướng mục tiêu (Goal-oriented Task Scenarios)

Người tham gia sẽ lần lượt thực hiện chuỗi nhiệm vụ liên kết dưới đây trên 3 màn hình của Pool D:

### Nhiệm vụ 1: Đóng vai Người dùng - Gửi Yêu cầu Hỗ trợ (Màn hình D1)
* **Kịch bản giao cho người dùng:** 
  > *"Bạn vừa đăng ký tham dự sự kiện 'Hội thảo AI 2026' của khoa Công nghệ Thông tin. Tuy nhiên, khi nhận được vé QR tải về, bạn phát hiện ra tên của mình bị lỗi phông chữ (ví dụ: 'Nguyễn Văn A' thành 'Nguy?n V?n A'). Bạn hãy chụp lại ảnh màn hình chiếc vé bị lỗi đó, gửi một yêu cầu hỗ trợ tới ban tổ chức để nhờ sửa lại tên trên vé."*
* **Điểm bắt đầu:** Trang chủ EMS (người dùng đã đăng nhập tài khoản sinh viên).
* **Kết quả mong đợi:** Người dùng tìm thấy trang gửi hỗ trợ, chọn đúng danh mục, mô tả lỗi rõ ràng, tải lên tệp ảnh minh họa và bấm gửi yêu cầu hỗ trợ thành công.

### Nhiệm vụ 2: Đóng vai Admin - Giải quyết Yêu cầu Hỗ trợ (Màn hình D3 & D4)
* **Kịch bản giao cho người dùng:**
  > *"Bây giờ, bạn sẽ đóng vai trò là Quản trị viên (Admin) của hệ thống EMS. Ban tổ chức vừa nhận được một yêu cầu hỗ trợ từ sinh viên về việc lỗi font chữ trên vé QR. Nhiệm vụ của bạn là đăng nhập vào trang quản trị, tìm kiếm yêu cầu hỗ trợ đó, mở xem chi tiết và ảnh đính kèm. Sau đó, hãy ghi chú nội bộ 'Đã xác nhận lỗi font hệ thống' và viết phản hồi chính thức cho sinh viên báo rằng lỗi đã được khắc phục, mời họ kiểm tra lại vé."*
* **Điểm bắt đầu:** Đăng nhập tài khoản admin (`admin@gmail.com` / `Admin@123`).
* **Kết quả mong đợi:** Admin tìm thấy yêu cầu hỗ trợ trong tab "Chờ xử lý" (Pending), xem ảnh qua lightbox, nhập ghi chú nội bộ, điền và gửi phản hồi chính thức để chuyển yêu cầu hỗ trợ sang trạng thái "Đã xử lý" (Resolved).

### Nhiệm vụ 3: Đóng vai Người dùng - Kiểm tra kết quả hỗ trợ (Màn hình D2)
* **Kịch bản giao cho người dùng:**
  > *"Hãy quay lại giao diện người dùng của bạn. Hãy kiểm tra xem yêu cầu hỗ trợ về lỗi font chữ trên vé của bạn đã được ban tổ chức giải quyết chưa và đọc nội dung phản hồi của ban tổ chức."*
* **Điểm bắt đầu:** Đăng nhập lại tài khoản sinh viên.
* **Kết quả mong đợi:** Người dùng vào mục "Yêu cầu của tôi" (My Requests), tìm thấy yêu cầu đã đổi trạng thái thành "Đã giải quyết" (Resolved) và xem được nội dung phản hồi chính thức của admin.

---

## 3. Các Chỉ số Đo lường Khả dụng (Usability Metrics)

Các chỉ số dưới đây sẽ được thu thập cho từng nhiệm vụ của mỗi người dùng:

1. **Mức độ thành công của nhiệm vụ (Task Success Rate):**
   * **Thành công (Completed - C):** Người dùng tự hoàn thành nhiệm vụ mà không cần bất kỳ sự trợ giúp nào.
   * **Thành công một phần (Partial - P):** Người dùng hoàn thành nhiệm vụ nhưng mất nhiều thời gian, đi đường vòng hoặc cần một gợi ý nhỏ từ điều phối viên khi bị kẹt.
   * **Thất bại (Failed - F):** Người dùng không thể hoàn thành nhiệm vụ hoặc từ bỏ giữa chừng.
2. **Thời gian thực hiện nhiệm vụ (Time on Task - ToT):** Đo bằng giây từ lúc bắt đầu đọc xong kịch bản cho đến khi hoàn thành thao tác cuối cùng.
3. **Số lần gặp lỗi & Sự ngập ngừng (Errors & Hesitations - E/H):**
   * **Lỗi (Error):** Click nhầm nút, điền sai trường dữ liệu, upload sai file, hiểu sai chức năng.
   * **Sự ngập ngừng (Hesitation):** Dừng lại phân vân quá 5 giây tại một vị trí, di chuột qua lại xung quanh màn hình mà không click để tìm kiếm chức năng.

---

## 4. Bộ Câu hỏi Khảo sát SUS (System Usability Scale)

Sau khi kết thúc buổi kiểm thử, người tham gia sẽ trả lời 10 câu hỏi khảo sát SUS theo thang điểm từ **1 (Rất không đồng ý)** đến **5 (Rất đồng ý)**:

| STT | Câu hỏi khảo sát độ khả dụng (SUS Items) | 1 | 2 | 3 | 4 | 5 |
| :-: | :--- | :-: | :-: | :-: | :-: | :-: |
| 1 | Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên. | | | | | |
| 2 | Tôi thấy hệ thống này phức tạp một cách không cần thiết. | | | | | |
| 3 | Tôi nghĩ rằng hệ thống này rất dễ sử dụng. | | | | | |
| 4 | Tôi nghĩ rằng tôi sẽ cần sự hỗ trợ của một chuyên gia kỹ thuật để có thể sử dụng hệ thống này. | | | | | |
| 5 | Tôi thấy các chức năng trong hệ thống này được tích hợp rất tốt. | | | | | |
| 6 | Tôi thấy hệ thống này quá thiếu nhất quán. | | | | | |
| 7 | Tôi tưởng tượng rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh. | | | | | |
| 8 | Tôi thấy hệ thống này rất cồng kềnh/bất tiện khi sử dụng. | | | | | |
| 9 | Tôi cảm thấy rất tự tin khi sử dụng hệ thống này. | | | | | |
| 10 | Tôi cần phải học rất nhiều thứ trước khi có thể sử dụng thành thạo hệ thống này. | | | | | |

* **Cách tính điểm SUS:**
  * Đối với các câu hỏi lẻ (1, 3, 5, 7, 9): Điểm thành phần = (Điểm trả lời - 1).
  * Đối với các câu hỏi chẵn (2, 4, 6, 8, 10): Điểm thành phần = (5 - Điểm trả lời).
  * Điểm SUS tổng = Tổng điểm thành phần của 10 câu x 2.5 (Thang điểm từ 0 đến 100). Điểm trên 68 được coi là trên trung bình (Acceptable).

---

## 5. Bộ Câu hỏi Phỏng vấn Mở (Probe Questions)

Điều phối viên sẽ hỏi nhanh 4 câu hỏi định tính sau khi người dùng làm xong khảo sát SUS:
1. *Bạn thấy điểm nào dễ dàng nhất khi thực hiện các nhiệm vụ vừa rồi?*
2. *Bạn gặp khó khăn hay cảm thấy bối rối nhất ở bước nào? Tại sao?*
3. *Giao diện phản hồi thông báo (như khi gửi hỗ trợ thành công hoặc khi admin trả lời) có đủ rõ ràng và nhanh chóng không?*
4. *Bạn có đề xuất gì để cải thiện giao diện này dễ dùng hơn không?*

---

## 6. Mẫu Phiếu Ghi chép Kết quả (Observation & Logging Sheets Template)

*Phần này được để trống và chuẩn bị sẵn cấu trúc bảng để bạn điền thông tin chi tiết sau khi thực hiện kiểm thử thực tế với 5 người dùng.*

### Bảng 1: Danh sách Người tham gia (Masked Participants Table)
| Mã số | Họ và Tên | Đối tượng người dùng | Kênh liên hệ (Zalo/Email/Phone - Masked) |
| :-: | :--- | :--- | :--- |
| P01 | Nguyễn * * * Anh | Sinh viên Khoa CNTT | 0912 * * * 456 / anh.n * * * @student.hcmus.edu.vn |
| P02 | Trần * * * Bình | Cựu sinh viên | 0988 * * * 123 / binh.t * * * @gmail.com |
| P03 | Lê * * * Chi | Sinh viên Khoa Hóa | 0905 * * * 789 / chi.l * * * @student.hcmus.edu.vn |
| P04 | Phạm * * * Danh | Giảng viên khách mời | 0977 * * * 321 / danh.p * * * @hcmus.edu.vn |
| P05 | Vũ * * * Em | Khách tự do / Sinh viên | 0355 * * * 654 / em.v * * * @gmail.com |

### Bảng 2: Kết quả Đo lường Nhiệm vụ (Usability Metrics Table)
| Mã số | NV 1: Kết quả (ToT / Lỗi / Trạng thái) | NV 2: Kết quả (ToT / Lỗi / Trạng thái) | NV 3: Kết quả (ToT / Lỗi / Trạng thái) | Điểm SUS |
| :-: | :--- | :--- | :--- | :-: |
| P01 | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ / 100 |
| P02 | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ / 100 |
| P03 | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ / 100 |
| P04 | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ / 100 |
| P05 | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ s / _ lỗi / [C / P / F] | _ _ / 100 |
| **TB** | **_ _ s / _ lỗi / _ % C** | **_ _ s / _ lỗi / _ % C** | **_ _ s / _ lỗi / _ % C** | **_ _ / 100** |

### Bảng 3: Nhật ký Quan sát Phiên kiểm thử (Session Observation Logs)
| Mã số | Nhật ký ghi nhận Hành vi, Sự ngập ngừng, Phát biểu thành tiếng của Người tham gia |
| :-: | :--- |
| P01 | *(Ví dụ: Ngập ngừng 8s ở màn hình D1 để tìm nút tải ảnh. Phát biểu: "Nút chọn ảnh hơi nhỏ, tôi tưởng đó là nhãn text thường chứ không phải nút bấm.")* |
| P02 | * * * |
| P03 | * * * |
| P04 | * * * |
| P05 | * * * |
