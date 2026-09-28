# TC-CALC-CAL-010: Tính toán với số âm

## Requirement ID
FR-CALCULATE-10

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | -5       |
| Second number | -3       |
| Operation     | Multiply |

## Test steps
1. Nhập `-5` vào ô **First number** (`id="number1Field"`)
2. Nhập `-3` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Multiply**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `15` (âm × âm = dương)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
