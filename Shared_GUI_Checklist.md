# Bản Hướng dẫn & Checklist Giao diện Người dùng (GUI Checklist) dùng chung

*Tài liệu này được thiết kế dùng chung cho nhóm để thực hiện kiểm thử GUI trên Hệ thống Quản lý Sự kiện (EMS), tập trung vào các khía cạnh tiêu chuẩn thiết kế, biểu mẫu nhập liệu, điều hướng và phản hồi trạng thái ứng dụng.*

---

## 1. Danh sách Tiêu chí Kiểm thử GUI (44 Items)

### IA-01: Tiêu chuẩn Giao diện Chung (General UI Standards)
*Kiểm tra tính thẩm mỹ, nhất quán về bố cục, màu sắc, font chữ và khả năng hiển thị đa ngôn ngữ.*

| ID | Tiêu chí Kiểm thử (Checklist Item) | Trạng thái Mong đợi |
| :--- | :--- | :--- |
| IA-01-01 | Căn lề và khoảng cách (Grid & Spacing) nhất quán giữa các phần tử trên toàn trang. | Giao diện không bị lệch, khoảng cách lề (padding/margin) đồng đều. |
| IA-01-02 | Font chữ hiển thị nhất quán, không quá 2 font khác nhau trên cùng một màn hình. | Các chữ không bị lỗi font Tiếng Việt, phân cấp rõ ràng (H1, H2, H3, Body). |
| IA-01-03 | Tỷ lệ tương phản của văn bản (Color Contrast) đạt tiêu chuẩn WCAG 2.1 AA (tối thiểu 4.5:1 cho text thường). | Chữ hiển thị rõ trên nền, đặc biệt là các nhãn nhỏ hoặc chữ mờ. |
| IA-01-04 | Hệ thống màu sắc sử dụng đúng bảng màu chủ đạo (Brand Palette), không dùng màu tùy tiện. | Màu sắc chính xác theo quy chuẩn thiết kế của EMS. |
| IA-01-05 | Chuyển đổi ngôn ngữ (i18n EN/VI) hoạt động tức thời trên toàn màn hình. | Khi chuyển đổi, toàn bộ nhãn, nút bấm và thông báo đều dịch chính xác. |
| IA-01-06 | Không bị tràn văn bản (Text Overflow) hoặc vỡ khung giao diện khi chuyển sang Tiếng Việt. | Tiếng Việt thường dài hơn Tiếng Anh, các khối giao diện phải co giãn phù hợp. |
| IA-01-07 | Trạng thái đang tải (Loading State) hiển thị rõ ràng khi hệ thống đang fetch dữ liệu. | Có loading spinner hoặc skeleton screen để người dùng không tưởng ứng dụng bị đơ. |
| IA-01-08 | Trạng thái rỗng (Empty State) hiển thị thông báo và hình ảnh minh họa thân thiện khi không có dữ liệu. | Ví dụ: "Không có yêu cầu hỗ trợ nào" kèm nút "Tạo yêu cầu mới" thay vì màn hình trắng. |
| IA-01-09 | Giao diện đáp ứng (Responsive Layout) hiển thị tốt trên màn hình hẹp mà không cần thanh cuộn ngang. | Nội dung tự động co giãn phù hợp với độ rộng của màn hình. |
| IA-01-10 | Các biểu tượng (Icons) có phong cách thiết kế đồng bộ và dễ hiểu về mặt ngữ nghĩa. | Ví dụ: Icon thùng rác cho nút xóa, icon kính lúp cho nút tìm kiếm. |
| IA-01-11 | Giao diện tối/sáng (Dark/Light mode) nếu có hoạt động đồng bộ và không bị sót màu nền/màu chữ. | Tránh hiện tượng chữ tối trên nền tối hoặc chữ sáng trên nền sáng. |

### IA-02: Biểu mẫu nhập liệu (Forms)
*Kiểm tra tính khả dụng, tính năng validation và phản hồi lỗi trên các form nhập liệu.*

| ID | Tiêu chí Kiểm thử (Checklist Item) | Trạng thái Mong đợi |
| :--- | :--- | :--- |
| IA-02-01 | Nhãn biểu mẫu (Field Labels) nằm sát trường nhập liệu tương ứng và mô tả rõ ràng nội dung cần nhập. | Người dùng biết chính xác cần nhập gì vào ô đó. |
| IA-02-02 | Các trường bắt buộc nhập (Required Fields) được đánh dấu trực quan bằng dấu sao đỏ (*). | Dấu sao đỏ hiển thị rõ và thống nhất trên tất cả các form. |
| IA-02-03 | Thông báo lỗi Validation hiển thị ngay dưới hoặc bên cạnh trường nhập liệu bị lỗi. | Lỗi hiển thị dạng chữ màu đỏ, rõ ràng và cụ thể (ví dụ: "Email không đúng định dạng"). |
| IA-02-04 | Nút Submit bị vô hiệu hóa (disabled) hoặc hệ thống báo lỗi khi dữ liệu đầu vào không hợp lệ. | Ngăn chặn việc gửi form khi chưa điền đủ các trường bắt buộc. |
| IA-02-05 | Ô nhập văn bản dài (Textarea) tự động co giãn hoặc có thanh cuộn và giới hạn số ký tự tối đa rõ ràng. | Có bộ đếm ký tự (ví dụ: 120/1000) hiển thị real-time nếu có giới hạn ký tự. |
| IA-02-06 | Chức năng tải ảnh lên (Upload) hiển thị rõ ràng định dạng được hỗ trợ (.png, .jpg) và dung lượng tối đa. | Người dùng nhận biết được các điều kiện ràng buộc trước khi upload. |
| IA-02-07 | Hiển thị ảnh xem trước (Thumbnail Preview) tức thì sau khi người dùng chọn file ảnh thành công. | Ảnh preview hiển thị đúng tỷ lệ, không bị méo hoặc vỡ hình. |
| IA-02-08 | Có chức năng xóa hoặc thay thế file đã tải lên trước khi bấm gửi form. | Nút xóa (X) hiển thị góc ảnh preview để người dùng dễ thao tác. |
| IA-02-09 | Dropdown list (Hộp chọn) hiển thị danh sách rõ ràng, hỗ trợ tìm kiếm nhanh nếu số lượng item lớn. | Các item trong danh sách không bị che khuất hoặc tràn lề. |
| IA-02-10 | Trình soạn thảo văn bản phong phú (Rich-text editor - nếu có) hiển thị thanh công cụ trực quan và phản hồi mượt. | Các nút Bold, Italic, Bullet hoạt động đúng và render định dạng chính xác. |
| IA-02-11 | Con trỏ chuột tự động focus vào trường nhập liệu đầu tiên khi form được mở ra. | Tiết kiệm thao tác click chuột cho người dùng. |

### IA-03: Điều hướng (Navigation)
*Kiểm tra luồng di chuyển của người dùng giữa các trang, phân mục và thao tác tương tác.*

| ID | Tiêu chí Kiểm thử (Checklist Item) | Trạng thái Mong đợi |
| :--- | :--- | :--- |
| IA-03-01 | Mục menu hiện tại trên thanh điều hướng bên (Sidebar) được làm nổi bật trực quan (Active State). | Người dùng biết mình đang đứng ở trang nào trong hệ thống. |
| IA-03-02 | Đường dẫn liên kết (Breadcrumbs) hiển thị đúng cấu trúc phân cấp và cho phép click để quay lại. | Giúp định vị vị trí trang hiện tại trong cấu trúc website. |
| IA-03-03 | Chuyển đổi giữa các tab (ví dụ: Pending / Resolved) mượt mà và giữ nguyên từ khóa tìm kiếm trước đó. | Người dùng không phải nhập lại từ khóa tìm kiếm khi chuyển tab. |
| IA-03-04 | Nút "Quay lại" (Back/Cancel) hoạt động đúng chức năng và đưa người dùng về trang trước đó. | Không dẫn tới trang lỗi hoặc trang không liên quan. |
| IA-03-05 | Có cảnh báo xác nhận trước khi rời trang nếu người dùng đã nhập liệu dở dang trên biểu mẫu. | Tránh việc vô tính làm mất dữ liệu đã nhập khi click nhầm link điều hướng. |
| IA-03-06 | Thanh cuộn (Scrollbar) chỉ xuất hiện khi nội dung vượt quá kích thước màn hình và cuộn mượt mà. | Không xuất hiện thanh cuộn ngang ở các độ phân giải tiêu chuẩn. |
| IA-03-07 | Các liên kết (Hyperlinks) phân biệt rõ ràng với văn bản thường bằng màu sắc hoặc gạch chân. | Người dùng dễ dàng nhận biết các phần tử có thể click được. |
| IA-03-08 | Liên kết sâu (Deep linking) hoạt động chính xác khi truy cập trực tiếp bằng URL của trang con. | Hệ thống chuyển hướng đúng trang sau khi đăng nhập (nếu yêu cầu xác thực). |
| IA-03-09 | Thứ tự tab bàn phím (Tab Index) di chuyển tuần tự từ trên xuống dưới, từ trái sang phải qua các phần tử tương tác. | Hỗ trợ người dùng thao tác bằng bàn phím (Accessibility). |
| IA-03-10 | Thao tác kéo thả (Drag-and-Drop) có vùng thả rõ ràng, hiển thị hiệu ứng mờ khi đang kéo. | Đảm bảo tính trực quan và lưu trữ đúng thứ tự sau khi Save. |
| IA-03-11 | Các nút phân trang (Pagination) hiển thị đúng số lượng trang và phản hồi ngay lập tức khi click. | Nút trang hiện tại hiển thị trạng thái active, nút Next/Prev vô hiệu hóa khi ở biên. |

### IA-04: Phản hồi & Trạng thái (Feedback / State)
*Kiểm tra thông báo, cảnh báo và hiển thị trạng thái hệ thống real-time.*

| ID | Tiêu chí Kiểm thử (Checklist Item) | Trạng thái Mong đợi |
| :--- | :--- | :--- |
| IA-04-01 | Thông báo Toast (Popup tự động biến mất) hiển thị ở vị trí dễ quan sát khi thực hiện thao tác thành công/thất bại. | Hiển thị góc trên bên phải hoặc giữa màn hình, tự đóng sau 3-5 giây. |
| IA-04-02 | Màu sắc của thông báo Toast tương ứng với loại thông báo (Xanh lá = Success, Đỏ = Error, Vàng = Warning). | Tăng tốc độ nhận diện thông tin của người dùng. |
| IA-04-03 | Badge số lượng (số đỏ hiển thị trên icon) cập nhật thời gian thực khi có thông báo mới hoặc yêu cầu mới. | Giúp người dùng/Admin biết ngay có dữ liệu cần xử lý. |
| IA-04-04 | Hộp thoại xác nhận (Confirmation Dialog) hiển thị khi thực hiện các tác vụ nguy hiểm (như Xóa, Hủy bỏ). | Dialog có 2 tùy chọn rõ ràng (Xác nhận/Hủy) với nhãn trực quan. |
| IA-04-05 | Nút bấm chuyển sang trạng thái "Loading" (vô hiệu hóa bấm tiếp) khi đang gửi dữ liệu lên server. | Tránh người dùng bấm liên tiếp nút Submit gây gửi trùng lặp dữ liệu (Double-submit). |
| IA-04-06 | Thanh tiến trình (Progress Bar) phản ánh chính xác phần trăm tiến độ xử lý tác vụ dài hạn. | Hiển thị trực quan và mượt mà. |
| IA-04-07 | Màu sắc trạng thái của các dòng dữ liệu phản ánh đúng ngữ nghĩa của trạng thái đó. | Ví dụ: "Pending" màu vàng (Chờ xử lý), "Resolved" màu xanh lá (Đã xử lý). |
| IA-04-08 | Nhấp vào ảnh đính kèm mở ra cửa sổ phóng to (Lightbox) rõ nét, có nút Đóng hoặc click ra ngoài để đóng. | Không làm hỏng giao diện trang hiện tại. |
| IA-04-09 | Thông báo lỗi hệ thống (như mất kết nối mạng) hiển thị trực quan và có nút thử lại (Retry). | Giúp người dùng biết cách khắc phục khi gặp lỗi kỹ thuật. |
| IA-04-10 | Các trường bị khóa (Read-only/Disabled) hiển thị tông màu xám mờ và con trỏ chuột chuyển sang dạng `not-allowed`. | Người dùng nhận biết ngay lập tức trường này không chỉnh sửa được. |
| IA-04-11 | Các thay đổi trạng thái của dữ liệu do người khác cập nhật được đồng bộ hóa tức thì (nếu có tính năng real-time). | Dữ liệu làm mới tự động mà không cần tải lại toàn bộ trang. |

---

## 2. Tài liệu Tham khảo (Reference Sources)

Để thiết kế checklist giao diện này, nhóm đã tổng hợp và nghiên cứu các nguyên lý thiết kế tương tác kinh điển:
1. **Nielsen's 10 Usability Heuristics:** Tập trung vào nguyên lý hiển thị trạng thái hệ thống, nhất quán và tiêu chuẩn, ngăn ngừa lỗi, và sự linh hoạt trong sử dụng.
2. **Norman's 6 Principles (The Design of Everyday Things):** Áp dụng các khái niệm Visibility (Khả kiến), Feedback (Phản hồi), Constraints (Ràng buộc), và Mapping (Ánh xạ) vào thiết kế nút bấm và form biểu mẫu.
3. **Shneiderman's Eight Golden Rules:** Chú trọng tính nhất quán, phản hồi giàu thông tin, thiết kế hội thoại đóng (xác nhận trước khi xóa), giảm tải bộ nhớ ngắn hạn cho người dùng.
4. **Slide bài giảng môn học:** Phần GUI Testing Checklist, Usability Testing và Compatibility Testing (FIT-HCMUS).

---

## 3. Câu lệnh AI Prompts Sử dụng (AI Prompts Log)

*Nhóm đã hợp tác với trợ lý AI để soạn thảo danh sách tiêu chí ban đầu bằng các câu lệnh sau:*

* **Prompt 1 (Khởi tạo):**
  > "Tôi đang làm bài tập kiểm thử phần mềm cho hệ thống Event Management System (EMS). Hãy tạo một checklist GUI chi tiết gồm hơn 40 mục, phân chia rõ ràng theo 4 danh mục: IA-01 (General UI standards), IA-02 (Forms), IA-03 (Navigation), và IA-04 (Feedback/State). Checklist cần bám sát các nguyên lý thiết kế của Nielsen, Norman và Shneiderman. Hãy viết bằng Tiếng Việt dưới dạng bảng biểu Markdown."
* **Prompt 2 (Tinh chỉnh):**
  > "Hãy bổ sung thêm các tiêu chí liên quan đến xử lý tải tệp hình ảnh đính kèm (IA-02), kiểm thử khả năng chuyển đổi đa ngôn ngữ Anh/Việt mà không bị vỡ giao diện (IA-01), và phóng to ảnh đính kèm bằng Lightbox (IA-04) vốn là các tính năng đặc thù của phân hệ Yêu cầu Hỗ trợ (Support Requests) trong hệ thống EMS."

---

## 4. Đánh giá và Bổ sung từ Con người (Human Review & Additions)

Trong quá trình xem xét bản dự thảo do AI tạo ra, nhóm đã phát hiện và bổ sung thêm một số tiêu chí quan trọng mà AI đã bỏ sót:

1. **Bổ sung tiêu chí IA-01-06 (Vỡ khung chữ khi chuyển ngôn ngữ):**
   * *Tại sao AI bỏ sót:* AI thường chỉ tập trung vào việc dịch đúng nghĩa từ Anh sang Việt mà không lường trước được rằng tiếng Việt thường dài hơn tiếng Anh khoảng 30%, dễ gây vỡ layout hoặc tràn nút bấm (text overflow) trên giao diện thực tế của EMS.
2. **Bổ sung tiêu chí IA-03-03 (Chuyển tab giữ nguyên từ khóa tìm kiếm):**
   * *Tại sao AI bỏ sót:* AI đưa ra các quy tắc điều hướng rất chung chung (như nút Back, Sidebar active) nhưng không tính đến trải nghiệm người dùng thực tế trên trang Admin EMS khi họ lọc tìm kiếm và chuyển đổi giữa tab Pending (Chờ xử lý) và Resolved (Đã xử lý). Nếu mất từ khóa tìm kiếm mỗi lần chuyển tab, Admin sẽ rất ức chế.
3. **Bổ sung tiêu chí IA-04-05 (Vô hiệu hóa nút Submit khi đang gửi để tránh Double-submit):**
   * *Tại sao AI bỏ sót:* AI đề cập đến trạng thái loading chung chung nhưng không nhấn mạnh hành vi chặn bấm liên tục trên form (Double-submit) vốn cực kỳ phổ biến trên các form tạo Yêu cầu hỗ trợ khi mạng chậm.
