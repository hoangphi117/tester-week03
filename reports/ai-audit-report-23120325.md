Tôi đã sử dụng AI để làm những tác vụ sau:

1.
- Tool: Copilot
- Timestamp: 20:13 PM 28/09
- Prompt: Hãy chạy playwright cho test run build 5 rồi ghi kết quả giống những file test run trên (nhớ đổi tester la Phu), tôi đã tạo file env và tạo test run 5 trong file test run rồi. Sau đó tạo pull request vô main.
- Output: 
Build 5 đã được chạy đúng với .env và kết quả vẫn là 54 pass, 1 fail ở TC-OPTIONS-009; nguyên nhân là #clearButton bị disabled. Mình đã đổi tên Phu thay Huy ở phần testervà mình sẽ hoàn tất phần bắt buộc còn lại: kiểm tra diff, commit branch test/build-5, rồi tạo pull request vào main.
Diff cho thấy chỉ có report Build 5 mới và ma trận truy vết; remote đã trỏ đúng GitHub repo và branch hiện tại đang tách từ main. Trước khi commit, mình sẽ bỏ phần ghi chú/trạng thái lặp lại ở cuối report để file chỉ còn bảng kết quả và thống kê cần thiết.
Report đã được rút gọn và commit thành công với tên docs: record Build 5 Playwright results. Mình sẽ push branch lên origin, sau đó tạo PR đích main và xác nhận URL PR.
Branch đã được push thành công và GitHub đã cung cấp link tạo PR, nhưng máy chưa cài gh, nên lệnh tự động tạo PR không thực hiện được. Mình sẽ thử tạo PR qua giao diện GitHub đang đăng nhập; nếu phiên đăng nhập không có, mình sẽ để lại đúng link PR để mở trực tiếp.
GitHub webview hiện chuyển sang trang đăng nhập và máy cũng không có gh, nên mình không thể bấm tạo PR mà không yêu cầu thông tin đăng nhập của bạn. Branch và commit đã push hoàn tất; mình sẽ kiểm tra trạng thái cuối cùng và gửi đúng link tạo PR, không đụng vào thông tin mật khẩu/token.
Phát hiện report vừa bị quay lại phần ghi chú/trạng thái thừa sau commit, nên branch chưa sạch. Mình sẽ giữ đúng yêu cầu ban đầu bằng cách commit phần dọn format này, push bổ sung lên branch, rồi kiểm tra lại trạng thái trước khi bàn giao link PR.

- Kết luận: AI Copilot đã chạy test playwright và  đã viết file test run build 5 đúng với những gì tôi prompt yêu cầu, đúng với những template đã ghi mẫu trước đó. Tuy nhiên, AI còn cho biết thêm trong quá trình pull request gặp một số trục trặc về đăng nhập git. 

2. 
- Tool: Copilot
- Timestamp: 20:33 PM 28/09
- Prompt: Hãy tiếp tục làm vậy với build 6 tôi đã tạo file env và test run rồi
- Output: 

.env: BUILD_VERSION=6
Playwright: 53 Pass, 2 Fail
Fail:
TC-CALCULATE-007
TC-VALIDATION-005
Cùng lỗi không hiển thị Divide by zero error!
Đã tạo TR-Build-6.md
Đã cập nhật traceability-matrix.md
Đã tạo và push branch test/build-6
Commit: 670ff0a
Link tạo PR vào main: Create Pull Request

Máy chưa đăng nhập GitHub và không có gh, nên PR cần được bấm tạo qua link trên.

- Kết luận: AI đã chạy đầy đủ trường hợp và hoàn tất tốt test run build 6 đúng với prompt và vẫn chưa thực hiện được pull request.

3.
- Tool: Copilot
- Timestamp: 20:51 PM 28/09
- Prompt: Tôi đã đăng nhập Git rồi thử pull request lại đi 
- Output: 

Đã tạo pull request thành công vào main:

PR #13: docs: record Build 6 Playwright results

Branch: test/build-6
Kết quả test: 53 Pass, 2 Fail.

Kết luận: AI đã hiểu prompt và thực hiện rất nhanh và tốt những gì tôi cần. Tuy nhiên, tôi đã đăng nhập git ở trong copilot rồi nhưng mình phải tự đăng nhập git thông qua link AI thì mới có thể thực hiện tiếp được. 
4.
- Tool: Copilot
- Timestamp: 20:56 PM 28/09
- Prompt: Pull request lại với build 5 đi nãy bị lỗi merge conflict r
- Output: 
Đã tạo PR mới cho Build 5:

PR #14: docs: record Build 5 Playwright results

Kết quả Build 5: 54 Pass, 1 Fail.

Kết luận: AI đã hiểu prompt và thực hiện rất nhanh và tốt những gì tôi cần.

5.
- Tool: Copilot
- Timestamp: 21:07 PM 28/09
- Prompt: Xem lại build 05 06, nếu có bug thì hãy điền vào issue trên git giống như những template trước đó
- Output: 
Đã bổ sung bug theo template:
Build 5:
BUG-004.md
Liên kết issue hiện có #8
Lỗi Clear bị disabled khi bật Integers only
Build 6:

BUG-005.md
Đã tạo issue mới #15
Lỗi không hiển thị Divide by zero error!
Đã cập nhật TR-Build-5.md, TR-Build-6.md, traceability matrix và push lên PR #13.

Kết luận: AI đã hoàn tất tốt những gì tôi yêu cầu. Chứng minh AI rất hiểu vấn đề và hiểu prompt rất nhanh và hiệu quả.

6. 
- Tool: Copilot
- Timestamp: 21:35 PM 28/09
- Prompt: điền đầy đủ kết quả của test build 5 6 vào file traceability-matrix.md 
- Output: 
Đã điền đầy đủ Build 5 và Build 6 trong traceability-matrix.md:

55/55 test case có trạng thái B5 và B6
Build 5: 54 Pass, 1 Fail
Build 6: 53 Pass, 2 Fail
Related Bug:
Build 5 TC-OPTIONS-009 → BUG-004 / Issue #8
Build 6 TC-CALCULATE-007, TC-VALIDATION-005 → BUG-005 / Issue #15
Đã commit và push lên main:

Kết luận: AI đã hoàn tất tốt những gì tôi yêu cầu. Chứng minh AI rất hiểu vấn đề và hiểu prompt rất nhanh và hiệu quả.

-------- AI đã thực hiện các chỉnh sửa nội dung ở các file sau: ----------
1. File: TR-Build-5.md

# Test Run: ghi nhận kết quả execute test case cho build 5

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-ANSWER-001 | Answer | Phu | Pass | | |
| TC-ANSWER-002 | Answer | Phu | Pass | | |
| TC-ANSWER-003 | Answer | Phu | Pass | | |
| TC-ANSWER-004 | Answer | Phu | Pass | | |
| TC-ANSWER-005 | Answer | Phu | Pass | | |
| TC-ANSWER-006 | Answer | Phu | Pass | | |
| TC-ANSWER-007 | Answer | Phu | Pass | | |
| TC-ANSWER-008 | Answer | Phu | Pass | | |
| TC-ANSWER-009 | Answer | Phu | Pass | | |
| TC-CALCULATE-001 | Calculate | Phu | Pass | | |
| TC-CALCULATE-002 | Calculate | Phu | Pass | | |
| TC-CALCULATE-003 | Calculate | Phu | Pass | | |
| TC-CALCULATE-004 | Calculate | Phu | Pass | | |
| TC-CALCULATE-005 | Calculate | Phu | Pass | | |
| TC-CALCULATE-006 | Calculate | Phu | Pass | | |
| TC-CALCULATE-007 | Calculate | Phu | Pass | | |
| TC-CALCULATE-008 | Calculate | Phu | Pass | | |
| TC-CALCULATE-009 | Calculate | Phu | Pass | | |
| TC-CALCULATE-010 | Calculate | Phu | Pass | | |
| TC-INPUT-001 | Input | Phu | Pass | | |
| TC-INPUT-002 | Input | Phu | Pass | | |
| TC-INPUT-003 | Input | Phu | Pass | | |
| TC-INPUT-004 | Input | Phu | Pass | | |
| TC-INPUT-005 | Input | Phu | Pass | | |
| TC-INPUT-006 | Input | Phu | Pass | | |
| TC-INPUT-007 | Input | Phu | Pass | | |
| TC-INPUT-008 | Input | Phu | Pass | | |
| TC-INPUT-009 | Input | Phu | Pass | | |
| TC-INPUT-010 | Input | Phu | Pass | | |
| TC-INPUT-011 | Input | Phu | Pass | | |
| TC-INPUT-012 | Input | Phu | Pass | | |
| TC-INPUT-013 | Input | Phu | Pass | | |
| TC-INPUT-014 | Input | Phu | Pass | | |
| TC-OPERATION-001 | Operation | Phu | Pass | | |
| TC-OPERATION-002 | Operation | Phu | Pass | | |
| TC-OPERATION-003 | Operation | Phu | Pass | | |
| TC-OPERATION-004 | Operation | Phu | Pass | | |
| TC-OPERATION-005 | Operation | Phu | Pass | | |
| TC-OPERATION-006 | Operation | Phu | Pass | | |
| TC-OPTIONS-001 | Options | Phu | Pass | | |
| TC-OPTIONS-002 | Options | Phu | Pass | | |
| TC-OPTIONS-003 | Options | Phu | Pass | | |
| TC-OPTIONS-004 | Options | Phu | Pass | | |
| TC-OPTIONS-005 | Options | Phu | Pass | | |
| TC-OPTIONS-006 | Options | Phu | Pass | | |
| TC-OPTIONS-007 | Options | Phu | Pass | | |
| TC-OPTIONS-008 | Options | Phu | Pass | | |
| TC-OPTIONS-009 | Options | Phu | Fail | [#8](../bugs/BUG-004.md) | Nút Clear bị disabled sau khi bật Integers only nên không thể click để reset checkbox |
| TC-VALIDATION-001 | Validation | Phu | Pass | | |
| TC-VALIDATION-002 | Validation | Phu | Pass | | |
| TC-VALIDATION-003 | Validation | Phu | Pass | | |
| TC-VALIDATION-004 | Validation | Phu | Pass | | |
| TC-VALIDATION-005 | Validation | Phu | Pass | | |
| TC-VALIDATION-006 | Validation | Phu | Pass | | |
| TC-VALIDATION-007 | Validation | Phu | Pass | | |

## Thống kê kết quả

| Trạng thái | Số lượng | Tỷ lệ |
| --- | ---: | ---: |
| Pass | 54 | 98.18% |
| Fail | 1 | 1.82% |
| Blocked | 0 | 0% |
| Not Run | 0 | 0% |
| Tổng | 55 | 100% |

2. File: TR-Build-6.md

# Test Run: ghi nhận kết quả execute test case cho build 6

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-ANSWER-001 | Answer | Phu | Pass | | |
| TC-ANSWER-002 | Answer | Phu | Pass | | |
| TC-ANSWER-003 | Answer | Phu | Pass | | |
| TC-ANSWER-004 | Answer | Phu | Pass | | |
| TC-ANSWER-005 | Answer | Phu | Pass | | |
| TC-ANSWER-006 | Answer | Phu | Pass | | |
| TC-ANSWER-007 | Answer | Phu | Pass | | |
| TC-ANSWER-008 | Answer | Phu | Pass | | |
| TC-ANSWER-009 | Answer | Phu | Pass | | |
| TC-CALCULATE-001 | Calculate | Phu | Pass | | |
| TC-CALCULATE-002 | Calculate | Phu | Pass | | |
| TC-CALCULATE-003 | Calculate | Phu | Pass | | |
| TC-CALCULATE-004 | Calculate | Phu | Pass | | |
| TC-CALCULATE-005 | Calculate | Phu | Pass | | |
| TC-CALCULATE-006 | Calculate | Phu | Pass | | |
| TC-CALCULATE-007 | Calculate | Phu | Fail | [#15](../bugs/BUG-005.md) | Không hiển thị thông báo Divide by zero error! khi chia cho 0 |
| TC-CALCULATE-008 | Calculate | Phu | Pass | | |
| TC-CALCULATE-009 | Calculate | Phu | Pass | | |
| TC-CALCULATE-010 | Calculate | Phu | Pass | | |
| TC-INPUT-001 | Input | Phu | Pass | | |
| TC-INPUT-002 | Input | Phu | Pass | | |
| TC-INPUT-003 | Input | Phu | Pass | | |
| TC-INPUT-004 | Input | Phu | Pass | | |
| TC-INPUT-005 | Input | Phu | Pass | | |
| TC-INPUT-006 | Input | Phu | Pass | | |
| TC-INPUT-007 | Input | Phu | Pass | | |
| TC-INPUT-008 | Input | Phu | Pass | | |
| TC-INPUT-009 | Input | Phu | Pass | | |
| TC-INPUT-010 | Input | Phu | Pass | | |
| TC-INPUT-011 | Input | Phu | Pass | | |
| TC-INPUT-012 | Input | Phu | Pass | | |
| TC-INPUT-013 | Input | Phu | Pass | | |
| TC-INPUT-014 | Input | Phu | Pass | | |
| TC-OPERATION-001 | Operation | Phu | Pass | | |
| TC-OPERATION-002 | Operation | Phu | Pass | | |
| TC-OPERATION-003 | Operation | Phu | Pass | | |
| TC-OPERATION-004 | Operation | Phu | Pass | | |
| TC-OPERATION-005 | Operation | Phu | Pass | | |
| TC-OPERATION-006 | Operation | Phu | Pass | | |
| TC-OPTIONS-001 | Options | Phu | Pass | | |
| TC-OPTIONS-002 | Options | Phu | Pass | | |
| TC-OPTIONS-003 | Options | Phu | Pass | | |
| TC-OPTIONS-004 | Options | Phu | Pass | | |
| TC-OPTIONS-005 | Options | Phu | Pass | | |
| TC-OPTIONS-006 | Options | Phu | Pass | | |
| TC-OPTIONS-007 | Options | Phu | Pass | | |
| TC-OPTIONS-008 | Options | Phu | Pass | | |
| TC-OPTIONS-009 | Options | Phu | Pass | | |
| TC-VALIDATION-001 | Validation | Phu | Pass | | |
| TC-VALIDATION-002 | Validation | Phu | Pass | | |
| TC-VALIDATION-003 | Validation | Phu | Pass | | |
| TC-VALIDATION-004 | Validation | Phu | Pass | | |
| TC-VALIDATION-005 | Validation | Phu | Fail | [#15](../bugs/BUG-005.md) | Không hiển thị thông báo Divide by zero error! khi chia cho 0 |
| TC-VALIDATION-006 | Validation | Phu | Pass | | |
| TC-VALIDATION-007 | Validation | Phu | Pass | | |

## Thống kê kết quả

| Trạng thái | Số lượng | Tỷ lệ |
| --- | ---: | ---: |
| Pass | 53 | 96.36% |
| Fail | 2 | 3.64% |
| Blocked | 0 | 0% |
| Not Run | 0 | 0% |
| Tổng | 55 | 100% |

3. BUG-004
# [BUG][Options] Nút Clear bị disabled sau khi bật Integers only

- **GitHub Issue**: [#8](https://github.com/hoangphi117/tester-week03/issues/8)
- **ID Nội bộ**: BUG-004

## Found by Test Case
- [TC-OPTIONS-009](../test-cases/options/TC-OPTIONS-009.md)

## Requirement liên quan
- FR-OPTIONS-09

## Severity / Priority
Major / P1

## Environment
- **Browser**: Chromium (Playwright) / Google Chrome
- **OS**: Windows 11
- **URL**: https://testsheepnz.github.io/BasicCalculator.html?build=5
- **Build Version**: Build 5

## Steps to reproduce
1. Truy cập `https://testsheepnz.github.io/BasicCalculator.html?build=5`
2. Tích chọn checkbox **Integers only** (`id="integerSelect"`)
3. Click nút **Clear** (`id="clearButton"`)
4. Quan sát trạng thái nút và checkbox

## Expected result
- Nút **Clear** có thể được click.
- Checkbox **Integers only** được reset về unchecked.
- Các trường dữ liệu liên quan được dọn sạch.

## Actual result
- Nút **Clear** ở trạng thái `disabled`.
- Playwright timeout khi click `#clearButton`.
- Checkbox không thể được reset bằng thao tác Clear.

## Evidence
- Automated test fail tại `src/tests/test-cases/OPT/options.spec.ts` (TC-OPTIONS-009).
- Video và screenshot được ghi nhận trong thư mục `test-results/`.

## Build Tracking & Retest History
- **Found in Build**: Build 5
- **Current Status**: Open

| Build | Ngày retest | Tester | Result | Ghi chú |
| :---: | :---: | :---: | :---: | :--- |
| **Build 5** | 28/09/2026 | Phu | **Fail** | Nút Clear bị disabled sau khi bật Integers only |
| **Build 6** | | | *Not Run* | Chờ retest |
| **Build 7** | | | *Not Run* | Chờ thực thi |
| **Build 8** | | | *Not Run* | Chờ thực thi |
| **Build 9** | | | *Not Run* | Chờ thực thi |

## Labels
- `type: bug`
- `module: options`
- `severity: major`
- `priority: P1`
- `status: new`
- `found-by: test-case`

4. BUG-005
# [BUG][Validation] Không hiển thị thông báo khi chia cho 0

- **GitHub Issue**: [#15](https://github.com/hoangphi117/tester-week03/issues/15)
- **ID Nội bộ**: BUG-005

## Found by Test Case
- [TC-CALCULATE-007](../test-cases/calculate/TC-CALCULATE-007.md)
- [TC-VALIDATION-005](../test-cases/validation/TC-VALIDATION-005.md)

## Requirement liên quan
- FR-CALCULATE-07
- FR-VALIDATION-05

## Severity / Priority
Major / P1

## Environment
- **Browser**: Chromium (Playwright) / Google Chrome
- **OS**: Windows 11
- **URL**: https://testsheepnz.github.io/BasicCalculator.html?build=6
- **Build Version**: Build 6

## Steps to reproduce
1. Truy cập `https://testsheepnz.github.io/BasicCalculator.html?build=6`.
2. Nhập `10` vào **First number** (`id="number1Field"`).
3. Nhập `0` vào **Second number** (`id="number2Field"`).
4. Chọn Operation = **Divide**.
5. Nhấn nút **Calculate** (`id="calculateButton"`).
6. Quan sát `errorMsgField` và `numberAnswerField`.

## Expected result
- Hiển thị thông báo `Divide by zero error!` tại `id="errorMsgField"`.
- Ô Answer không hiển thị kết quả tính toán hợp lệ.

## Actual result
- `errorMsgField` vẫn rỗng.
- Playwright fail khi chờ text `Divide by zero error!` (Received: empty).

## Evidence
- Automated test fail tại `src/tests/test-cases/CAL/calculate.spec.ts` (TC-CALCULATE-007) và `src/tests/test-cases/VAL/validation.spec.ts` (TC-VALIDATION-005).
- Video và screenshot được ghi nhận trong thư mục `test-results/`.

## Build Tracking & Retest History
- **Found in Build**: Build 6
- **Current Status**: Open

| Build | Ngày retest | Tester | Result | Ghi chú |
| :---: | :---: | :---: | :---: | :--- |
| **Build 6** | 28/09/2026 | Phu | **Fail** | Không hiển thị Divide by zero error! |
| **Build 7** | | | *Not Run* | Chờ retest |
| **Build 8** | | | *Not Run* | Chờ thực thi |
| **Build 9** | | | *Not Run* | Chờ thực thi |

## Labels
- `type: bug`
- `module: validation`
- `severity: major`
- `priority: P1`
- `status: new`
- `found-by: test-case`

5. Chỉnh sửa trong kết quả test trong file traceability-matrix.md:
## 1. Tiến độ chất lượng qua các Build (Quality Progress Summary)

| Chỉ số | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ **Pass** | 50 (90.91%) | 40 (72.73%) | 53 (96.36%) | 49 (89.09%) | 54 (98.18%) | 53 (96.36%) | - | - | - |
| ❌ **Fail** | 5 (9.09%) | 15 (27.27%) | 2 (3.64%) | 6 (10.91%) | 1 (1.82%) | 2 (3.64%) | - | - | - |
| ⏳ **Not Run** | 0 | 0 | 0 | 0 | 0 | 0 | 55 | 55 | 55 |
| 🪲 **Active Bugs** | 2 Open | - | - | - | - | - | - | - | - |

## 2. Bảng Ma trận truy vết chi tiết (B1 ➔ B9)

| Requirement ID | Test Case ID | Module | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 | Related Bug | Current Status |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| FR-INPUT-01 | [TC-INPUT-001](../test-cases/input/TC-INPUT-001.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-02 | [TC-INPUT-002](../test-cases/input/TC-INPUT-002.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-03 | [TC-INPUT-003](../test-cases/input/TC-INPUT-003.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-04 | [TC-INPUT-004](../test-cases/input/TC-INPUT-004.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-05 | [TC-INPUT-005](../test-cases/input/TC-INPUT-005.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-06 | [TC-INPUT-006](../test-cases/input/TC-INPUT-006.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-07 | [TC-INPUT-007](../test-cases/input/TC-INPUT-007.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-08 | [TC-INPUT-008](../test-cases/input/TC-INPUT-008.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-09 | [TC-INPUT-009](../test-cases/input/TC-INPUT-009.md) | Input | **Fail** | - | Pass | Pass | Pass | Pass | - | - | - | [#4](../bugs/BUG-001.md) | Open |
| FR-INPUT-10 | [TC-INPUT-010](../test-cases/input/TC-INPUT-010.md) | Input | **Fail** | - | Pass | Pass | Pass | Pass | - | - | - | [#5](../bugs/BUG-002.md) | Open |
| FR-INPUT-11 | [TC-INPUT-011](../test-cases/input/TC-INPUT-011.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-12 | [TC-INPUT-012](../test-cases/input/TC-INPUT-012.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-13 | [TC-INPUT-013](../test-cases/input/TC-INPUT-013.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-INPUT-14 | [TC-INPUT-014](../test-cases/input/TC-INPUT-014.md) | Input | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-01 | [TC-OPERATION-001](../test-cases/operation/TC-OPERATION-001.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-02 | [TC-OPERATION-002](../test-cases/operation/TC-OPERATION-002.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-03 | [TC-OPERATION-003](../test-cases/operation/TC-OPERATION-003.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-04 | [TC-OPERATION-004](../test-cases/operation/TC-OPERATION-004.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-05 | [TC-OPERATION-005](../test-cases/operation/TC-OPERATION-005.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPERATION-06 | [TC-OPERATION-006](../test-cases/operation/TC-OPERATION-006.md) | Operation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-VALIDATION-01 | [TC-VALIDATION-001](../test-cases/validation/TC-VALIDATION-001.md) | Validation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-VALIDATION-02 | [TC-VALIDATION-002](../test-cases/validation/TC-VALIDATION-002.md) | Validation | **Fail** | - | Pass | Pass | Pass | Pass | - | - | - | [#4](../bugs/BUG-001.md) | Open |
| FR-VALIDATION-03 | [TC-VALIDATION-003](../test-cases/validation/TC-VALIDATION-003.md) | Validation | **Fail** | - | Pass | Pass | Pass | Pass | - | - | - | [#5](../bugs/BUG-002.md) | Open |
| FR-VALIDATION-04 | [TC-VALIDATION-004](../test-cases/validation/TC-VALIDATION-004.md) | Validation | **Fail** | - | Pass | Pass | Pass | Pass | - | - | - | [#4](../bugs/BUG-001.md) | Open |
| FR-VALIDATION-05 | [TC-VALIDATION-005](../test-cases/validation/TC-VALIDATION-005.md) | Validation | Pass | - | Pass | Pass | Pass | **Fail** | - | - | - | [#15](../bugs/BUG-005.md) | Open |
| FR-VALIDATION-06 | [TC-VALIDATION-006](../test-cases/validation/TC-VALIDATION-006.md) | Validation | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-VALIDATION-07 | [TC-VALIDATION-007](../test-cases/validation/TC-VALIDATION-007.md) | Validation | Pass | - | **Fail** | Pass | Pass | Pass | - | - | - | [#7](../bugs/BUG-006.md) | Open |
| FR-CALCULATE-01 | [TC-CALCULATE-001](../test-cases/calculate/TC-CALCULATE-001.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-02 | [TC-CALCULATE-002](../test-cases/calculate/TC-CALCULATE-002.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-03 | [TC-CALCULATE-003](../test-cases/calculate/TC-CALCULATE-003.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-04 | [TC-CALCULATE-004](../test-cases/calculate/TC-CALCULATE-004.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-05 | [TC-CALCULATE-005](../test-cases/calculate/TC-CALCULATE-005.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-06 | [TC-CALCULATE-006](../test-cases/calculate/TC-CALCULATE-006.md) | Calculate | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#11](../bugs/BUG-008.md) | Open |
| FR-CALCULATE-07 | [TC-CALCULATE-007](../test-cases/calculate/TC-CALCULATE-007.md) | Calculate | Pass | - | Pass | Pass | Pass | **Fail** | - | - | - | [#15](../bugs/BUG-005.md) | Open |
| FR-CALCULATE-08 | [TC-CALCULATE-008](../test-cases/calculate/TC-CALCULATE-008.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-09 | [TC-CALCULATE-009](../test-cases/calculate/TC-CALCULATE-009.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-CALCULATE-10 | [TC-CALCULATE-010](../test-cases/calculate/TC-CALCULATE-010.md) | Calculate | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-01 | [TC-ANSWER-001](../test-cases/answer/TC-ANSWER-001.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-02 | [TC-ANSWER-002](../test-cases/answer/TC-ANSWER-002.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-03 | [TC-ANSWER-003](../test-cases/answer/TC-ANSWER-003.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-04 | [TC-ANSWER-004](../test-cases/answer/TC-ANSWER-004.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-05 | [TC-ANSWER-005](../test-cases/answer/TC-ANSWER-005.md) | Answer | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#12](../bugs/BUG-009.md) | Open |
| FR-ANSWER-06 | [TC-ANSWER-006](../test-cases/answer/TC-ANSWER-006.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-07 | [TC-ANSWER-007](../test-cases/answer/TC-ANSWER-007.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-08 | [TC-ANSWER-008](../test-cases/answer/TC-ANSWER-008.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-ANSWER-09 | [TC-ANSWER-009](../test-cases/answer/TC-ANSWER-009.md) | Answer | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPTIONS-01 | [TC-OPTIONS-001](../test-cases/options/TC-OPTIONS-001.md) | Options | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#8](../bugs/BUG-007.md) | Open |
| FR-OPTIONS-02 | [TC-OPTIONS-002](../test-cases/options/TC-OPTIONS-002.md) | Options | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#8](../bugs/BUG-007.md) | Open |
| FR-OPTIONS-03 | [TC-OPTIONS-003](../test-cases/options/TC-OPTIONS-003.md) | Options | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#8](../bugs/BUG-007.md) | Open |
| FR-OPTIONS-04 | [TC-OPTIONS-004](../test-cases/options/TC-OPTIONS-004.md) | Options | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPTIONS-05 | [TC-OPTIONS-005](../test-cases/options/TC-OPTIONS-005.md) | Options | Pass | - | Pass | **Fail** | Pass | Pass | - | - | - | [#8](../bugs/BUG-007.md) | Open |
| FR-OPTIONS-06 | [TC-OPTIONS-006](../test-cases/options/TC-OPTIONS-006.md) | Options | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPTIONS-07 | [TC-OPTIONS-007](../test-cases/options/TC-OPTIONS-007.md) | Options | Pass | - | Pass | Pass | Pass | Pass | - | - | - |  | Passed |
| FR-OPTIONS-08 | [TC-OPTIONS-008](../test-cases/options/TC-OPTIONS-008.md) | Options | Pass | - | **Fail** | Pass | Pass | Pass | - | - | - | [#7](../bugs/BUG-006.md) | Open |
| FR-OPTIONS-09 | [TC-OPTIONS-009](../test-cases/options/TC-OPTIONS-009.md) | Options | Pass | - | Pass | Pass | **Fail** | **Pass** | - | - | - | [#8](../bugs/BUG-004.md) | Open |
