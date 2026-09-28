# TC-CALC-CAL-005: Tính phép chia cho kết quả là số nguyên

## Requirement ID
FR-CALCULATE-05

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value  |
|---------------|--------|
| First number  | 20     |
| Second number | 4      |
| Operation     | Divide |

## Test steps
1. Nhập `20` vào ô **First number** (`id="number1Field"`)
2. Nhập `4` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `5`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
