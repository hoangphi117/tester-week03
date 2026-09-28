---
name: Bug Report
about: Tạo báo cáo lỗi chuẩn từ kết quả kiểm thử (Test Run / Automation)
title: "[BUG][Module]: "
labels: ["type: bug", "status: new", "found-by: test-case"]
assignees: ""
---

## 1. Mô tả tóm tắt lỗi (Description)
<!-- Tóm tắt ngắn gọn lỗi là gì, xảy ra ở tính năng nào -->

## 2. Thông tin truy vết (Traceability)
- **Found by Test Case**: <!-- Ví dụ: TC-VALIDATION-002, TC-INPUT-009 -->
- **Requirement liên quan**: <!-- Ví dụ: FR-VALIDATION-02 -->
- **Phân hệ (Module)**: <!-- input | operation | validation | calculate | answer | options -->

## 3. Mức độ nghiêm trọng & Mức ưu tiên (Severity & Priority)
- **Severity**: <!-- blocker | critical | major | minor | trivial -->
- **Priority**: <!-- P0 (Ngay lập tức) | P1 (Cao) | P2 (Trung bình) | P3 (Thấp) -->

## 4. Môi trường kiểm thử (Environment)
- **Application URL**: https://testsheepnz.github.io/BasicCalculator.html?build=1
- **Build Version**: Build 1
- **Browser**: Chrome / Chromium (Playwright)
- **OS**: Windows 11

## 5. Các bước tái hiện (Steps to Reproduce)
1. Truy cập vào trang web theo URL và build đã chọn.
2. Nhập dữ liệu:
   - First number: `...`
   - Second number: `...`
3. Chọn phép toán (Operation): `...`
4. Nhấn nút **Calculate**.

## 6. Kết quả mong đợi (Expected Result)
<!-- Hệ thống đúng phải hoạt động như thế nào theo Requirement/Test Case? -->

## 7. Kết quả thực tế (Actual Result)
<!-- Hệ thống đang hoạt động sai ra sao? -->

## 8. Bằng chứng kiểm thử (Evidence)
- **Log lỗi Playwright**: <!-- Code block chứa thông báo lỗi / trace -->
- **Screenshot / Video**: <!-- Đường dẫn hoặc hình ảnh đính kèm -->

## 9. Labels đề xuất
- `type: bug`
- `module: <module_name>`
- `severity: <severity_level>`
- `priority: <priority_level>`
- `status: new`
- `found-by: test-case`
