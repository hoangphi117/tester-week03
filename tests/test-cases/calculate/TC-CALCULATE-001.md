# TC-CALC-CAL-001: Tính phép cộng hai số nguyên dương

## Requirement ID
FR-CALCULATE-01

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 12    |
| Second number | 8     |
| Operation     | Add   |

## Test steps
1. Nhập `12` vào ô **First number** (`id="number1Field"`)
2. Nhập `8` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `20`
- Không có thông báo lỗi

## Status / Related bugs
Fail (Build 2) / [#9](../../bugs/BUG-003.md)
