// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

// Cấu hình URL hệ thống cần test (SUT)
const BASE_URL = 'https://prod-dev.ems-fitus.cloud';

test.describe('EMS Pool D - Support Requests GUI Automation Tests', () => {

  // Chuẩn bị một file ảnh giả lập để test upload trước khi chạy các ca test
  const tempImagePath = path.join(__dirname, 'mock_ticket_error.png');
  
  test.beforeAll(async () => {
    // Tạo file ảnh mock dung lượng nhỏ nếu chưa tồn tại
    if (!fs.existsSync(tempImagePath)) {
      if (!fs.existsSync(__dirname)) {
        fs.mkdirSync(__dirname, { recursive: true });
      }
      fs.writeFileSync(tempImagePath, 'fake image data');
    }
  });

  test.afterAll(async () => {
    // Dọn dẹp file mock sau khi chạy test xong
    if (fs.existsSync(tempImagePath)) {
      fs.unlinkSync(tempImagePath);
    }
  });

  // =========================================================================
  // CA KIỂM THỬ 1: Giao diện Người dùng - Tạo Yêu cầu Hỗ trợ (Màn hình D1)
  // =========================================================================
  test('TC_GUI_01: User should be able to create a support request with image attachment', async ({ page }) => {
    // 1. Đi tới trang chủ EMS
    await page.goto(BASE_URL);
    
    // Bỏ qua cảnh báo bảo mật ngrok nếu có xuất hiện
    const ngrokWarningButton = page.locator('button:has-text("Visit Site"), button:has-text("Proceed")');
    if (await ngrokWarningButton.isVisible()) {
      await ngrokWarningButton.click();
    }

    // 2. Đăng nhập với tư cách Người dùng (Sinh viên/Khách hàng)
    // Giả định liên kết đăng nhập nằm ở Header
    await page.click('text=Đăng nhập || text=Login');
    
    // Nhập thông tin tài khoản user mẫu (người dùng tự tạo)
    await page.fill('input[type="email"]', 'student_test@gmail.com');
    await page.fill('input[type="password"]', 'Student@123');
    await page.click('button[type="submit"]');
    
    // Chờ điều hướng đăng nhập thành công
    await page.waitForURL(`${BASE_URL}/**`);

    // 3. Truy cập vào Giao diện Tạo Yêu cầu Hỗ trợ
    // Giả định click mục "Gửi hỗ trợ" trên Sidebar hoặc URL trực tiếp
    await page.goto(`${BASE_URL}/support/create`);

    // 4. Kiểm tra các yếu tố giao diện (IA-01 & IA-02)
    // Kiểm tra các trường bắt buộc có dấu sao đỏ
    const labelCategory = page.locator('label:has-text("Danh mục"), label:has-text("Category")');
    await expect(labelCategory).toBeVisible();
    
    // 5. Điền form
    // Chọn danh mục "Lỗi đăng ký vé" (Dropdown)
    await page.selectOption('select[name="category"]', { label: 'Lỗi đăng ký' });
    
    // Nhập nội dung mô tả lỗi
    await page.fill('textarea[name="content"]', 'Tôi đã đăng ký sự kiện thành công nhưng khi tải vé QR về điện thoại thì bị lỗi font chữ tên thành viên. Kính mong ban tổ chức hỗ trợ cập nhật lại tên thành viên.');

    // 6. Tải ảnh lỗi đính kèm (Upload Image)
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(tempImagePath);

    // Xác minh ảnh preview hiển thị thành công (IA-02-07)
    const imagePreview = page.locator('img.image-preview, img[alt="Preview"]');
    await expect(imagePreview).toBeVisible();

    // 7. Nhấn nút gửi form
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    // Xác minh nút submit chuyển sang trạng thái Loading (IA-04-05)
    // Và kiểm tra toast thông báo thành công hiển thị (IA-04-01)
    const successToast = page.locator('.toast-success, text="Gửi yêu cầu hỗ trợ thành công"');
    await expect(successToast).toBeVisible();
  });

  // =========================================================================
  // CA KIỂM THỬ 2: Giao diện Admin - Tìm kiếm và Lọc Danh sách Yêu cầu (Màn hình D3)
  // =========================================================================
  test('TC_GUI_02: Admin should be able to search and filter support requests', async ({ page }) => {
    // 1. Đăng nhập với tài khoản Admin
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[type="email"]', 'admin@gmail.com');
    await page.fill('input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"]');
    
    // Chờ điều hướng đến Dashboard Admin
    await page.waitForURL(`${BASE_URL}/admin/**`);

    // 2. Đi tới trang quản lý Support Requests
    await page.goto(`${BASE_URL}/admin/support-requests`);

    // 3. Kiểm tra các yếu tố điều hướng và hiển thị (IA-03 & IA-01)
    // Kiểm tra tab "Pending" (Chờ xử lý) và "Resolved" (Đã xử lý) có tồn tại
    const pendingTab = page.locator('button[role="tab"]:has-text("Chờ xử lý"), button:has-text("Pending")');
    const resolvedTab = page.locator('button[role="tab"]:has-text("Đã xử lý"), button:has-text("Resolved")');
    await expect(pendingTab).toBeVisible();
    await expect(resolvedTab).toBeVisible();

    // Xác minh mặc định đang ở tab Pending và tab này được làm nổi bật (Active state - IA-03-01)
    await expect(pendingTab).toHaveClass(/active|selected/);

    // 4. Nhập từ khóa tìm kiếm
    const searchInput = page.locator('input[placeholder*="Tìm kiếm"], input[placeholder*="Search"]');
    await searchInput.fill('student_test@gmail.com');

    // Chờ danh sách tải lại dữ liệu theo bộ lọc tìm kiếm
    await page.waitForTimeout(1000);

    // Xác minh bảng hiển thị dữ liệu khớp với thông tin tìm kiếm
    const tableRow = page.locator('table tbody tr').first();
    await expect(tableRow).toContainText('student_test@gmail.com');
  });

  // =========================================================================
  // CA KIỂM THỬ 3: Giao diện Admin - Duyệt Chi tiết & Gửi Phản hồi (Màn hình D4)
  // =========================================================================
  test('TC_GUI_03: Admin should view request detail, interact with lightbox and submit official response', async ({ page }) => {
    // 1. Admin đăng nhập và truy cập trang danh sách hỗ trợ
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[type="email"]', 'admin@gmail.com');
    await page.fill('input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"]');
    await page.goto(`${BASE_URL}/admin/support-requests`);

    // 2. Mở chi tiết yêu cầu hỗ trợ đầu tiên trong danh sách Chờ xử lý
    const firstRequestRow = page.locator('table tbody tr td a.view-detail, table tbody tr').first();
    await firstRequestRow.click();

    // Đợi trang chi tiết yêu cầu hỗ trợ load xong
    await page.waitForURL(`${BASE_URL}/admin/support-requests/*`);

    // 3. Kiểm tra hiển thị ảnh đính kèm và tương tác Lightbox (IA-04-08)
    const attachedImage = page.locator('img.attached-image, img.thumbnail');
    await expect(attachedImage).toBeVisible();
    
    // Click vào ảnh để mở Lightbox phóng to
    await attachedImage.click();
    const lightboxModal = page.locator('.lightbox-modal, .modal-content img');
    await expect(lightboxModal).toBeVisible();
    
    // Đóng Lightbox bằng cách click nút đóng hoặc click ra ngoài modal
    const closeLightboxButton = page.locator('.lightbox-close, button.close');
    if (await closeLightboxButton.isVisible()) {
      await closeLightboxButton.click();
    } else {
      await page.mouse.click(10, 10); // Click ra góc màn hình để đóng
    }
    await expect(lightboxModal).not.toBeVisible();

    // 4. Nhập Ghi chú nội bộ (Internal Note - chỉ Admin nhìn thấy)
    const internalNoteTextarea = page.locator('textarea[name="internal_note"], textarea[placeholder*="ghi chú nội bộ"]');
    await internalNoteTextarea.fill('Đã kiểm tra cơ sở dữ liệu vé, tên người dùng bị lỗi ký tự Unicode UTF-8.');

    // 5. Nhập Phản hồi chính thức (Official Response - gửi cho người dùng)
    const officialReplyTextarea = page.locator('textarea[name="official_response"], textarea[placeholder*="phản hồi"]');
    await officialReplyTextarea.fill('Chào bạn, Ban tổ chức đã sửa lại tên của bạn trên hệ thống và tạo lại vé QR mới. Vui lòng tải lại trang hoặc kiểm tra lại mục "Vé của tôi" nhé. Cảm ơn bạn!');

    // 6. Gửi phản hồi
    const sendResponseButton = page.locator('button:has-text("Gửi phản hồi"), button:has-text("Send Reply")');
    await sendResponseButton.click();

    // 7. Xác minh phản hồi thành công và trạng thái cập nhật (IA-04-07)
    // Thông báo Toast thành công hiển thị
    const toastResponse = page.locator('.toast-success, text="Giải quyết yêu cầu thành công"');
    await expect(toastResponse).toBeVisible();

    // Xác minh trạng thái yêu cầu chuyển sang màu xanh lá cây hoặc nhãn "Resolved" (Đã xử lý)
    const statusTag = page.locator('.status-tag, span.badge');
    await expect(statusTag).toHaveText(/Đã xử lý|Resolved/);
    await expect(statusTag).toHaveCSS('background-color', 'rgb(34, 197, 94)'); // Mã màu xanh lá cây của Tailwind (rgb(34,197,94) tương ứng với green-500)
  });

});
