# TC-CALC-VAL-001: Validate khi để trống cả hai ô nhập liệu

## Requirement ID
FR-VALIDATION-01

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value   |
|---------------|---------|
| First number  | (trống) |
| Second number | (trống) |
| Operation     | Add     |

## Test steps
1. Không nhập gì vào ô **First number**
2. Không nhập gì vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi validation cho ô First number hoặc Second number
- Ô **Answer** (`id="numberAnswerField"`) không hiển thị kết quả

## Status / Related bugs
Not Run / None
