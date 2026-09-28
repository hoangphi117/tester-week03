# Test Run: Basic Calculator - Build 7

## Bảng theo dõi thực thi Test Run

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| [TC-ANSWER-001](../test-cases/answer/TC-ANSWER-001.md) | Answer | Long | Fail | | Kết quả phép cộng không khớp expected |
| [TC-ANSWER-002](../test-cases/answer/TC-ANSWER-002.md) | Answer | Long | Fail | | Kết quả phép trừ không khớp expected |
| [TC-ANSWER-003](../test-cases/answer/TC-ANSWER-003.md) | Answer | Long | Fail | | Kết quả phép nhân không khớp expected |
| [TC-ANSWER-004](../test-cases/answer/TC-ANSWER-004.md) | Answer | Long | Fail | | Kết quả phép chia số nguyên không khớp expected |
| [TC-ANSWER-005](../test-cases/answer/TC-ANSWER-005.md) | Answer | Long | Fail | | Kết quả phép chia thập phân không khớp expected |
| [TC-ANSWER-006](../test-cases/answer/TC-ANSWER-006.md) | Answer | Long | Fail | | Kết quả phép Concatenate không khớp expected |
| [TC-ANSWER-007](../test-cases/answer/TC-ANSWER-007.md) | Answer | Long | Fail | | Integers Only trả về 0, expected 3 |
| [TC-ANSWER-008](../test-cases/answer/TC-ANSWER-008.md) | Answer | Long | Pass | | |
| [TC-ANSWER-009](../test-cases/answer/TC-ANSWER-009.md) | Answer | Long | Fail | | Expected 12, received 4 |
| [TC-CALCULATE-001](../test-cases/calculate/TC-CALCULATE-001.md) | Calculate | Long | Fail | | Expected 20, received 8 |
| [TC-CALCULATE-002](../test-cases/calculate/TC-CALCULATE-002.md) | Calculate | Long | Fail | | Expected 13, received -7 |
| [TC-CALCULATE-003](../test-cases/calculate/TC-CALCULATE-003.md) | Calculate | Long | Fail | | Expected -7, received -10 |
| [TC-CALCULATE-004](../test-cases/calculate/TC-CALCULATE-004.md) | Calculate | Long | Fail | | Expected 42, received 0 |
| [TC-CALCULATE-005](../test-cases/calculate/TC-CALCULATE-005.md) | Calculate | Long | Fail | | Expected 5, received 0 |
| [TC-CALCULATE-006](../test-cases/calculate/TC-CALCULATE-006.md) | Calculate | Long | Fail | | Expected 2.5, received 0 |
| [TC-CALCULATE-007](../test-cases/calculate/TC-CALCULATE-007.md) | Calculate | Long | Pass | | |
| [TC-CALCULATE-008](../test-cases/calculate/TC-CALCULATE-008.md) | Calculate | Long | Fail | [#9](../bugs/BUG-003.md) | Expected 1234, received 34 |
| [TC-CALCULATE-009](../test-cases/calculate/TC-CALCULATE-009.md) | Calculate | Long | Fail | | Integers Only trả về 0, expected 3 |
| [TC-CALCULATE-010](../test-cases/calculate/TC-CALCULATE-010.md) | Calculate | Long | Fail | | Expected 15, received 0 |
| [TC-INPUT-001](../test-cases/input/TC-INPUT-001.md) | Input | Long | Pass | | |
| [TC-INPUT-002](../test-cases/input/TC-INPUT-002.md) | Input | Long | Pass | | |
| [TC-INPUT-003](../test-cases/input/TC-INPUT-003.md) | Input | Long | Pass | | |
| [TC-INPUT-004](../test-cases/input/TC-INPUT-004.md) | Input | Long | Pass | | |
| [TC-INPUT-005](../test-cases/input/TC-INPUT-005.md) | Input | Long | Pass | | |
| [TC-INPUT-006](../test-cases/input/TC-INPUT-006.md) | Input | Long | Pass | | |
| [TC-INPUT-007](../test-cases/input/TC-INPUT-007.md) | Input | Long | Pass | | |
| [TC-INPUT-008](../test-cases/input/TC-INPUT-008.md) | Input | Long | Fail | | Expected 10, received 0 |
| [TC-INPUT-009](../test-cases/input/TC-INPUT-009.md) | Input | Long | Fail | [#4](../bugs/BUG-001.md) | Không hiển thị thông báo Number 1 is not a number |
| [TC-INPUT-010](../test-cases/input/TC-INPUT-010.md) | Input | Long | Pass | | |
| [TC-INPUT-011](../test-cases/input/TC-INPUT-011.md) | Input | Long | Fail | | Expected 10000000000, received 1; expected output 11 chữ số nhưng ô Answer giới hạn 10 ký tự, đề nghị rà soát test case |
| [TC-INPUT-012](../test-cases/input/TC-INPUT-012.md) | Input | Long | Pass | | |
| [TC-INPUT-013](../test-cases/input/TC-INPUT-013.md) | Input | Long | Fail | | Expected 15, received 5 |
| [TC-INPUT-014](../test-cases/input/TC-INPUT-014.md) | Input | Long | Pass | | |
| [TC-OPERATION-001](../test-cases/operation/TC-OPERATION-001.md) | Operation | Long | Pass | | |
| [TC-OPERATION-002](../test-cases/operation/TC-OPERATION-002.md) | Operation | Long | Pass | | |
| [TC-OPERATION-003](../test-cases/operation/TC-OPERATION-003.md) | Operation | Long | Pass | | |
| [TC-OPERATION-004](../test-cases/operation/TC-OPERATION-004.md) | Operation | Long | Pass | | |
| [TC-OPERATION-005](../test-cases/operation/TC-OPERATION-005.md) | Operation | Long | Pass | | |
| [TC-OPERATION-006](../test-cases/operation/TC-OPERATION-006.md) | Operation | Long | Pass | | |
| [TC-OPTIONS-001](../test-cases/options/TC-OPTIONS-001.md) | Options | Long | Pass | | |
| [TC-OPTIONS-002](../test-cases/options/TC-OPTIONS-002.md) | Options | Long | Pass | | |
| [TC-OPTIONS-003](../test-cases/options/TC-OPTIONS-003.md) | Options | Long | Pass | | |
| [TC-OPTIONS-004](../test-cases/options/TC-OPTIONS-004.md) | Options | Long | Fail | | Integers Only trả về 0, expected 2 |
| [TC-OPTIONS-005](../test-cases/options/TC-OPTIONS-005.md) | Options | Long | Fail | | Integers Only trả về 0, expected 2.5 |
| [TC-OPTIONS-006](../test-cases/options/TC-OPTIONS-006.md) | Options | Long | Fail | | Integers Only trả về 0, expected -3 |
| [TC-OPTIONS-007](../test-cases/options/TC-OPTIONS-007.md) | Options | Long | Fail | | Integers Only trả về 0, expected 3 |
| [TC-OPTIONS-008](../test-cases/options/TC-OPTIONS-008.md) | Options | Long | Pass | | |
| [TC-OPTIONS-009](../test-cases/options/TC-OPTIONS-009.md) | Options | Long | Pass | | |
| [TC-VALIDATION-001](../test-cases/validation/TC-VALIDATION-001.md) | Validation | Long | Pass | | |
| [TC-VALIDATION-002](../test-cases/validation/TC-VALIDATION-002.md) | Validation | Long | Fail | [#4](../bugs/BUG-001.md) | Không hiển thị thông báo Number 1 is not a number |
| [TC-VALIDATION-003](../test-cases/validation/TC-VALIDATION-003.md) | Validation | Long | Pass | | |
| [TC-VALIDATION-004](../test-cases/validation/TC-VALIDATION-004.md) | Validation | Long | Fail | [#4](../bugs/BUG-001.md) | Không hiển thị thông báo Number 1 is not a number |
| [TC-VALIDATION-005](../test-cases/validation/TC-VALIDATION-005.md) | Validation | Long | Pass | | |
| [TC-VALIDATION-006](../test-cases/validation/TC-VALIDATION-006.md) | Validation | Long | Pass | | |
| [TC-VALIDATION-007](../test-cases/validation/TC-VALIDATION-007.md) | Validation | Long | Fail | | Expected 1234, received 34 |

## Thống kê kết quả (Summary)

| Trạng thái | Số lượng | Tỷ lệ |
| --- | ---: | ---: |
| Pass | 27 | 49.09% |
| Fail | 28 | 50.91% |
| Blocked | 0 | 0% |
| Not Run | 0 | 0% |
| **Tổng** | **55** | **100%** |