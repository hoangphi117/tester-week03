# Basic Calculator Automation Testing with Playwright

Bộ kiểm thử tự động (Automation Test Suite) cho ứng dụng [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) được xây dựng bằng **Playwright** và **TypeScript**, tuân thủ mô hình **Page Object Model (POM)**.

---

## 📁 Cấu trúc thư mục `src/`

```text
src/
├── pages/
│   └── calculator.page.ts           # Page Object Model quản lý tương tác giao diện Basic Calculator
└── tests/
    └── test-cases/
        ├── INP/
        │   └── input.spec.ts        # 14 Test Cases: TC-INPUT-001 -> TC-INPUT-014
        ├── OPR/
        │   └── operation.spec.ts    # 6 Test Cases:  TC-OPERATION-001 -> TC-OPERATION-006
        ├── VAL/
        │   └── validation.spec.ts   # 7 Test Cases:  TC-VALIDATION-001 -> TC-VALIDATION-007
        ├── CAL/
        │   └── calculate.spec.ts    # 10 Test Cases: TC-CALCULATE-001 -> TC-CALCULATE-010
        ├── ANS/
        │   └── answer.spec.ts       # 9 Test Cases:  TC-ANSWER-001 -> TC-ANSWER-009
        └── OPT/
            └── options.spec.ts      # 9 Test Cases:  TC-OPTIONS-001 -> TC-OPTIONS-009
```

**Tổng cộng:** **55 Test Cases** tự động hóa đầy đủ 6 module.

---

## 🚀 Hướng dẫn cài đặt & Chạy Test

### 1. Cài đặt dependencies (nếu chưa có)
```bash
npm install
npx playwright install chromium
```

### 2. Chạy toàn bộ Test Suite
```bash
npm test
# hoặc
npx playwright test
```

### 3. Chạy theo từng module riêng lẻ
```bash
# Chạy module Input (INP)
npx playwright test src/tests/test-cases/INP/

# Chạy module Operation (OPR)
npx playwright test src/tests/test-cases/OPR/

# Chạy module Validation (VAL)
npx playwright test src/tests/test-cases/VAL/

# Chạy module Calculate (CAL)
npx playwright test src/tests/test-cases/CAL/

# Chạy module Answer (ANS)
npx playwright test src/tests/test-cases/ANS/

# Chạy module Options (OPT)
npx playwright test src/tests/test-cases/OPT/
```

### 4. Chạy có giao diện trình duyệt (Headed mode / UI mode)
```bash
# Chạy hiển thị trình duyệt Chrome
npm run test:headed

# Mở giao diện tương tác Playwright UI Mode
npm run test:ui
```

### 5. Kiểm thử với phiên bản Build khác (Build 1, Build 2,...)
Có thể truyền biến môi trường `BUILD_VERSION`:
```bash
# Trên Windows PowerShell:
$env:BUILD_VERSION="1"; npm test; Remove-Item Env:\BUILD_VERSION

# Trên Bash / Linux / macOS:
BUILD_VERSION=1 npm test
```

### 6. Xem báo cáo kiểm thử HTML (Test Report)
```bash
npm run test:report
```
