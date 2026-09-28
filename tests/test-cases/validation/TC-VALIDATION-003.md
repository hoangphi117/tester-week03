# TC-CALC-VAL-003: Validate khi nhập chữ cái vào Second Number

## Requirement ID
FR-VALIDATION-03

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 10    |
| Second number | xyz   |
| Operation     | Add   |

## Test steps
1. Nhập `10` vào ô **First number**
2. Nhập `xyz` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi: "Second number is not a number" hoặc tương đương
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Fail (B1, B2) / [#5](../../bugs/BUG-002.md), [#9](../../bugs/BUG-003.md)
