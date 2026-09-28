# TC-CALC-VAL-002: Validate khi nhập chữ cái vào First Number

## Requirement ID
FR-VALIDATION-02

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | hello |
| Second number | 5     |
| Operation     | Add   |

## Test steps
1. Nhập `hello` vào ô **First number** (`id="number1Field"`)
2. Nhập `5` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi: "First number is not a number" hoặc tương đương
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Fail / [#1](../../bugs/BUG-001.md)
