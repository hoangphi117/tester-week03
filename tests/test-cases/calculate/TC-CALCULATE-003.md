# TC-CALC-CAL-003: Tính phép trừ cho kết quả âm

## Requirement ID
FR-CALCULATE-03

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | 3        |
| Second number | 10       |
| Operation     | Subtract |

## Test steps
1. Nhập `3` vào ô **First number** (`id="number1Field"`)
2. Nhập `10` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Subtract**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `-7`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
