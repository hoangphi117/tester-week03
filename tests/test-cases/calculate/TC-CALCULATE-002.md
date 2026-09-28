# TC-CALC-CAL-002: Tính phép trừ cho kết quả dương

## Requirement ID
FR-CALCULATE-02

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | 20       |
| Second number | 7        |
| Operation     | Subtract |

## Test steps
1. Nhập `20` vào ô **First number** (`id="number1Field"`)
2. Nhập `7` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Subtract**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `13`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
