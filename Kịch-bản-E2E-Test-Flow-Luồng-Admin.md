KỊCH BẢN E2E TEST FLOW - LUỒNG
ADMIN

WEB: https://promoter-starboard-prude.ngrok-free.dev/
LƯU Ý: Tài khoản được sử dụng để test phải được cấp quyền (role) là ADMIN trên hệ thống
EMS.
Tài khoản: admin@gmail.com | Mật khẩu: Admin@123
Mã luồng test: TC_E2E_ADMIN
Mục tiêu: Kiểm thử toàn diện và chi tiết các chức năng quản trị, từ quản lý dữ liệu nền, quản lý
người dùng, toàn bộ vòng đời sự kiện (đặc biệt các ràng buộc về validation), xử lý check-in
phức tạp, giải quyết Support Requests và trích xuất báo cáo chuyên sâu.
Sau khi hoàn thành, vui lòng điền vào bảng E2E Test Flow và gửi về link Biểu mẫu phản hồi:
https://forms.gle/CJQFQCAXcsDbXDMM9
Link nhom support: https://zalo.me/g/rupogxlykt3yxd3snodl

GIAI ĐOẠN 1: THIẾT LẬP HỆ THỐNG VÀ QUẢN LÝ
NGƯỜI DÙNG

Bước 1: Đăng nhập & Kiểm tra Dashboard

●  Hành động: Truy cập hệ thống -> Đăng nhập bằng tài khoản Admin. Thử chuyển đổi

ngôn ngữ EN/VI trên thanh header. Thử bấm nút "Quay lại Dashboard người dùng".
●  Kết quả mong đợi: Đăng nhập thành công, có thể chuyển hướng giữa Dashboard quản
trị và giao diện người dùng. Hiển thị 4 thông số tổng quan: Total Events, Total Checkins,
Attendance Rate, Total Users. Ngôn ngữ thay đổi tức thì và được lưu lại.

Bước 2: Quản lý Người dùng (Users) - Bổ sung chi tiết

●  Hành động: Truy cập Users từ thanh bên.

○  Thử Assign Role (đổi vai trò tài khoản thành giảng viên/sinh viên).
○  Thử Block / Unblock một tài khoản đang hoạt động.
○  Thử Reset Password cho một tài khoản.
○  Bấm Export xuất danh sách ra file Excel.

●  Kết quả mong đợi: Thao tác thành công. Tài khoản bị Block không thể truy cập hệ

thống. Các thay đổi được ghi nhận trong audit log. File Excel tải xuống đầy đủ các cột
(Avatar + Name, Role, Member Code, Active, Audit).

GIAI ĐOẠN 2: QUẢN LÝ DỮ LIỆU NỀN (CATEGORIES,
CONTEXTS, CAMPUSES)

Bước 3: Khởi tạo & Ràng buộc dữ liệu nền

●  Hành động:

○  Academic Contexts: Tạo cấu trúc 3 cấp (Program -> Year -> Semester). Dùng

chuột kéo thả (Reorder) để đổi thứ tự. Thử tạo nhanh danh mục con từ chính dòng

cha.

○  Categories: Tạo danh mục cha và con. Chọn Icon từ bộ Icon Picker (~80 icon).

Thử kéo thả reorder danh mục cha và con độc lập.

○  Campuses: Tạo cơ sở mới. Thử xóa một Campus đang được tham chiếu bởi

một sự kiện đã có trong hệ thống.

●  Kết quả mong đợi: Tính năng kéo-thả (Reorder) hoạt động mượt (dòng kéo bị mờ

opacity-50, các nút khác bị vô hiệu hóa), lưu đúng thứ tự sau khi Save. Hệ thống chặn
(báo lỗi) không cho xóa Campus/Category/Academic Context nếu đang được tham
chiếu bởi sự kiện (chỉ có thể tắt cờ isEnabled).

GIAI ĐOẠN 3: TẠO VÀ CẤU HÌNH SỰ KIỆN CHUYÊN
SÂU

Bước 4: Tạo sự kiện & Validation Thời gian

●  Hành động: Vào Events -> Bấm Add Event. Tải lên Thumbnail (4:3) và Banner (24:9).

Soạn Content bằng RichTextEditor. Tại mục DateTime, cố tình nhập sai logic:

○  Ngày kết thúc sự kiện trước ngày bắt đầu.
○  Thời gian đóng đăng ký sau khi sự kiện kết thúc.

●  Kết quả mong đợi: Upload ảnh thành công, preview rõ nét. Hệ thống bắt lỗi validation

(báo đỏ), không cho phép lưu nếu các ràng buộc về thời gian không hợp lý.

Bước 5: Cấu hình Đăng ký, Vai trò (Roles) & Waitlist

●  Hành động: Tại form tạo sự kiện:

○  Bật allowStudentRegistration, allowLecturerRegistration,

allowGuestRegistration.

○  Tắt isUnlimited (Cho phép không giới hạn). Cố tình không nhập Max Slots rồi

bấm lưu. Sau đó bắt buộc nhập Max Slots cho từng vai trò.

○  Bật công tắc Waitlist (Danh sách chờ).
○  Bật Allow Additional Role (Vai trò phụ) và nhập tên.

●  Kết quả mong đợi: Form hiển thị động đúng theo công tắc. Hệ thống chặn Publish nếu

thiếu Max Slots khi isUnlimited = false.

Bước 6: Phát hành, Cập nhật quan trọng & Xóa sự kiện

●  Hành động:

○  Bấm Save Draft -> Kiểm tra list có trạng thái DRAFT.
○  Bấm Edit -> Publish. Bấm Preview xem trước.
○  Nhấn nút Important Update, nhập nội dung đổi địa điểm và gửi.
○  Thử Delete sự kiện đã có người đăng ký.

●  Kết quả mong đợi: Sự kiện chuyển sang PUBLISHED. Cảnh báo Important Update xuất
hiện và gửi thông báo tới người đăng ký. Hệ thống chặn việc xóa sự kiện nếu đã có dữ
liệu đăng ký quan trọng.

GIAI ĐOẠN 4: DUYỆT ĐĂNG KÝ VÀ XỬ LÝ YÊU CẦU
HỖ TRỢ (SUPPORT REQUESTS)

Bước 7: Phê duyệt danh sách đăng ký (Participants & Reviews)

●  Hành động:

○  Tìm sự kiện có chấm đỏ thông báo trên icon View. Mở tab Lecturer/Student

Review.

○  Duyệt Approve/Reject một số đăng ký. Chú ý: Cố tình chỉ duyệt 1 role trong đăng
ký giảng viên có nhiều role rồi bấm Apply. Sau đó phải quyết định hết các role rồi
mới Apply lại. Thử tính năng Approve All.

○  Vào tab Participants, kiểm tra màu sắc trạng thái (Xanh lá, Vàng, Đỏ, Xanh

dương, Tím, Xám) và bộ lọc Target Type. Thử Export file Excel.

●  Kết quả mong đợi: Progress bar cập nhật. Phải duyệt/từ chối tất cả các role của một
giảng viên trong cùng 1 đăng ký mới được Apply. File Excel danh sách người tham gia
xuất ra chuẩn xác.

Bước 8: Xử lý Support Requests (Tính năng Bổ sung)

●  Hành động:

○  Vào Support requests trên sidebar. Lọc theo tab Pending, search theo mã số

thành viên hoặc Category.

○  Bấm vào một request để xem. Kiểm tra ảnh đính kèm (lightbox).
○  Nhập Internal note (ghi chú nội bộ) và Nội dung phản hồi chính thức. Bấm Gửi

phản hồi.

○  Ra ngoài danh sách, chuyển sang tab Resolved kiểm tra.

●  Kết quả mong đợi: Request chuyển từ PENDING sang RESOLVED. Phản hồi được lưu,

thông báo cho người dùng, internal note chỉ Admin nhìn thấy.

GIAI ĐOẠN 5: VẬN HÀNH CHECK-IN ĐA KỊCH BẢN

Bước 9: Test luồng quét Barcode/Mã số (Tab Checkin)

●  Hành động: Vào tab Checkin. Lần lượt test các kịch bản:

○  Quét mã hợp lệ: Trả về SUCCESS.
○  Quét lại mã vừa quét: Trả về ALREADY_CHECKED_IN.
○  Đổi giờ hệ thống để quét ngoài khung giờ: Trả về OUTSIDE_CHECKIN_WINDOW.
○  Quét mã người chưa đăng ký nhưng có trong hệ thống: Trả về

PENDING_REVIEW. Admin bấm Accept (duyệt cho vào) hoặc Decline (kèm lý
do).

●  Kết quả mong đợi: Hệ thống bắt đúng các logic trạng thái. Nhật ký quét cập nhật real-

time. Nút xuất Excel lịch sử quét hoạt động.

GIAI ĐOẠN 6: BÁO CÁO THỐNG KÊ VÀ CẤU HÌNH
GIAO DIỆN

Bước 10: Phân tích số liệu (Analytics) & Đánh giá (Reviews)

●  Hành động:

○  Analytics: Kiểm tra Overview, Events Stats (test sub-tab CAMPUS), Checkins

Stats (kiểm tra breakdown nguồn check-in và Waitlist conversion rate). Test bộ lọc

DateRangeFilter ở tab User Growth.

○  Reviews: Mở sự kiện có TimeStatus = ENDED. Vào tab Reviews, lọc thử số sao

(1-5 sao).

●  Kết quả mong đợi: Biểu đồ Recharts hiển thị đúng. Bộ lọc DateRangeFilter phải bấm

Apply mới fetch dữ liệu. Tab Reviews read-only hiển thị chính xác.

Bước 11: Cài đặt hệ thống (Settings)

●  Hành động:

○  Featured Event: Chọn sự kiện đưa lên Carousel trang chủ. Thử nút "Disable all".
○  Social Media: Thêm 1 nền tảng tùy chỉnh (tự đặt key). Nhập URL sai định dạng để

test lỗi. Thử kéo thả Reorder.

○  System Settings: Sửa nội dung Footer/Contact (EN/VI) bằng RichTextEditor,

chỉnh sửa Footer Links.

●  Kết quả mong đợi: Carousel xoay tự động sau 7s (chỉ hiển thị event PUBLISHED +

UPCOMING/ONGOING). Social Media chặn URL sai, chặn trùng key. Footer cập nhật
đúng trên toàn hệ thống.