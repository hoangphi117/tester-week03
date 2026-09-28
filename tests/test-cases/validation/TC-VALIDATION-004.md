# TC-CALC-VAL-004: Validate khi nhập ký tự đặc biệt vào First Number

## Requirement ID
FR-VALIDATION-04

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value   |
|---------------|---------|
| First number  | !@#$%   |
| Second number | 5       |
| Operation     | Multiply|

## Test steps
1. Nhập `!@#$%` vào ô **First number** (`id="number1Field"`)
2. Nhập `5` vào ô **Second number**
3. Chọn Operation = **Multiply**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi: giá trị First number không hợp lệ
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Fail / [#4](../../bugs/BUG-001.md)
