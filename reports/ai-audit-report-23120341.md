# AI Audit Report

Tôi sử dụng các công cụ AI cho những tác vụ sau:

## Lần tương tác 1: Chạy test run Build 9 và xử lý lỗi Blocked

- **Tên công cụ AI:** Kimi K3 / Claude
- **Ngày và giờ:** 28/09/2026 - 21:00
- **Câu lệnh (prompt):**
  Sử dụng playwright để tiến hành chạy test run cho build 9, sau đó viết vào file tests\test-runs\TR-Build-9.md tuân theo template của tests\test-runs\TR-Build-1.md dựa trên kết quả chạy test cases, các test cases để chạy test run nằm ở thư mục tests\test-cases. Các test cases nào mà lỗi thì cần tạo github issue theo template sau:
  Title: [BUG][Login] Hệ thống cho phép đăng nhập với password sai

  ## Found by Test Case

  TC-LOGIN-003

  ## Requirement liên quan

  FR-LOGIN-02

  ## Severity / Priority

  Major / P1

  ## Environment

  Browser, OS, URL, build/commit

  ## Steps to reproduce
  1. Mở trang Login
  2. Nhập email hợp lệ
  3. Nhập password sai
  4. Bấm Login

  ## Expected result

  Không cho đăng nhập và hiển thị lỗi.

  ## Actual result

  Hệ thống vẫn đăng nhập thành công.

  ## Evidence

  Screenshot / video / console log

- **Kết quả do AI tạo ra:** Thực thi test suite 55 test cases trên Build 9 bằng Playwright, phát hiện lỗi timeout do các ô input bị hidden/disabled, tạo file `tests/test-runs/TR-Build-9.md` với trạng thái Blocked cho 55 test cases và lập file báo cáo lỗi `tests/bugs/BUG-004.md`.
