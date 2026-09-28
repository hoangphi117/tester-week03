# TC-CALC-CAL-004: Tính phép nhân hai số nguyên dương

## Requirement ID
FR-CALCULATE-04

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | 6        |
| Second number | 7        |
| Operation     | Multiply |

## Test steps
1. Nhập `6` vào ô **First number** (`id="number1Field"`)
2. Nhập `7` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Multiply**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `42`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
