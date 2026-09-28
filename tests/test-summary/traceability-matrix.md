# Ma trận truy vết đa phiên bản (Multi-Build Traceability Matrix)

> Bảng theo dõi và truy vết hai chiều xuyên suốt 9 phiên bản (**Build 1 ➔ Build 9**):
> `Requirement` ↔ `Test Case` ↔ `Kết quả qua các Build (B1 → B9)` ↔ `Bug Issue` ↔ `Current Status`

## 1. Tiến độ chất lượng qua các Build (Quality Progress Summary)

| Chỉ số | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ **Pass** | 50 (90.91%) | 40 (72.73%) | 53 (96.36%) | 49 (89.09%) | 54 (98.18%) | 53 (96.36%) | - | - | - |
| ❌ **Fail** | 5 (9.09%) | 15 (27.27%) | 2 (3.64%) | 6 (10.91%) | 1 (1.82%) | 2 (3.64%) | - | - | - |
| ⏳ **Not Run** | 0 | 0 | 0 | 0 | 0 | 0 | 55 | 55 | 55 |
| 🪲 **Active Bugs** | 2 Open | - | 1 Open | 3 Open | - | - | - | - | - |

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
