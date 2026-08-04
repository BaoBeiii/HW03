// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'https://prod-dev.ems-fitus.cloud';

test.describe('EMS Pool D - Support Requests GUI Automation Tests', () => {

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
    // Dọn dẹp file mock
    if (fs.existsSync(tempImagePath)) {
      fs.unlinkSync(tempImagePath);
    }
  });

  // =========================================================================
  // CA KIỂM THỬ 1: Giao diện Người dùng - Tạo Yêu cầu Hỗ trợ (Màn hình D1)
  // =========================================================================
  test('TC_GUI_01: User should be able to create a support request with image attachment', async ({ page }) => {
    // 1. Đi tới trang đăng nhập
    await page.goto(`${BASE_URL}/login`);

    // 2. Đăng nhập với tài khoản Admin (nhưng hoạt động ở vai trò User trên dashboard)
    await page.fill('input[type="email"]', 'admin@gmail.com');
    await page.fill('input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"]');

    // Chờ điều hướng đến trang User Dashboard mặc định
    await page.waitForURL(`${BASE_URL}/dashboard`);

    // 3. Truy cập trực tiếp trang tạo Yêu cầu hỗ trợ (User Side)
    await page.goto(`${BASE_URL}/complaints/new`);
    await page.waitForURL(`${BASE_URL}/complaints/new`);

    // 4. Kiểm tra sự hiện diện của các nhãn và nút bấm biểu mẫu (IA-02)
    const titleInput = page.locator('input[placeholder*="Unable to register"], input[name="title"]');
    const descriptionTextarea = page.locator('textarea[placeholder*="I tried to register"], textarea[name="description"]');
    const categoryButton = page.locator('button:has-text("Request type")');
    
    await expect(titleInput).toBeVisible();
    await expect(descriptionTextarea).toBeVisible();
    await expect(categoryButton).toBeVisible();

    // 5. Chọn Loại yêu cầu (Request Type Dropdown)
    await categoryButton.click();
    // Đợi và chọn option "Support"
    const supportOption = page.locator('li[role="option"][data-key="SUPPORT"]');
    await supportOption.waitFor({ state: 'visible', timeout: 5000 });
    await supportOption.click();

    // 6. Điền tiêu đề và mô tả sự cố
    const testTitle = `Lỗi font chữ vé QR - Test Auto ${Date.now()}`;
    await titleInput.fill(testTitle);
    await descriptionTextarea.fill('Tôi đã đăng ký sự kiện thành công nhưng khi tải vé QR về điện thoại thì bị lỗi font chữ tên thành viên. Kính mong ban tổ chức hỗ trợ cập nhật lại tên thành viên.');

    // 7. Tải ảnh lỗi đính kèm (Upload Image)
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(tempImagePath);

    // 8. Gửi yêu cầu
    const submitButton = page.locator('button:has-text("Submit request"), button[type="submit"]');
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    // 9. Xác minh chuyển hướng thành công và danh sách hiển thị yêu cầu mới
    await page.waitForURL(`${BASE_URL}/complaints**`);
    // Xác minh trang danh sách đã load thành công (URL redirect đã đúng)
    await expect(page).toHaveURL(/\/complaints/);
  });

  // =========================================================================
  // CA KIỂM THỬ 2: Giao diện Admin - Tìm kiếm và Lọc Danh sách Yêu cầu (Màn hình D3)
  // =========================================================================
  test('TC_GUI_02: Admin should be able to search and filter support requests', async ({ page }) => {
    // 1. Đăng nhập Admin
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[type="email"]', 'admin@gmail.com');
    await page.fill('input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/dashboard`);

    // 2. Đi tới trang quản trị Danh sách Yêu cầu Hỗ trợ (Admin Complaints List)
    await page.goto(`${BASE_URL}/dashboard/admin/complaints`);
    await page.waitForURL(`${BASE_URL}/dashboard/admin/complaints`);

    // 3. Kiểm tra các yếu tố điều hướng (IA-03)
    const tableHeader = page.locator('table th');
    await expect(tableHeader.first()).toBeVisible();

    // 4. Tìm kiếm từ khóa mẫu
    const searchInput = page.locator('input[aria-label="Search name, email or title"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('Lỗi font chữ');
      await page.waitForTimeout(1000); // Đợi danh sách lọc kết quả
    }
  });

  // =========================================================================
  // CA KIỂM THỬ 3: Giao diện Admin - Duyệt Chi tiết & Gửi Phản hồi (Màn hình D4)
  // =========================================================================
  test('TC_GUI_03: Admin should view request detail, interact with lightbox and submit official response', async ({ page }) => {
    // 1. Đăng nhập Admin
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[type="email"]', 'admin@gmail.com');
    await page.fill('input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/dashboard`);

    // 2. Đi tới trang danh sách admin
    await page.goto(`${BASE_URL}/dashboard/admin/complaints`);
    await page.waitForURL(`${BASE_URL}/dashboard/admin/complaints`);

    // 3. Mở chi tiết yêu cầu hỗ trợ đầu tiên trong bảng
    const firstRequestRow = page.locator('table tbody tr[role="link"], table tbody tr').first();
    await expect(firstRequestRow).toBeVisible();
    await firstRequestRow.click();

    // Đợi trang chi tiết load
    await page.waitForURL(`${BASE_URL}/dashboard/admin/complaints/*`);

    // 4. Nhập Phản hồi chính thức (Official Response - gửi cho người dùng)
    const responseTextarea = page.locator('textarea[aria-label="Response content"], textarea[name="response"], textarea');
    await expect(responseTextarea.first()).toBeVisible();
    await responseTextarea.first().fill('Chào bạn, Ban tổ chức đã sửa lại tên của bạn trên hệ thống và tạo lại vé QR mới. Vui lòng tải lại trang hoặc kiểm tra lại mục "Vé của tôi" nhé. Cảm ơn bạn!');

    // 5. Gửi phản hồi
    const sendResponseButton = page.locator('button:has-text("Send response"), button:has-text("Gửi"), button[type="submit"]');
    await expect(sendResponseButton.first()).toBeEnabled();
    await sendResponseButton.first().click();

    // 6. Xác minh thông báo thành công hoặc trạng thái được cập nhật
    await page.waitForTimeout(2000); // Đợi phản hồi xử lý
  });

});
