# TC-CALC-ANS-004: Hiển thị kết quả phép chia ra số nguyên

## Requirement ID
FR-ANSWER-04

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value  |
|---------------|--------|
| First number  | 100    |
| Second number | 5      |
| Operation     | Divide |

## Test steps
1. Nhập `100` vào ô **First number** (`id="number1Field"`)
2. Nhập `5` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Click nút **Calculate** (`id="calculateButton"`)
5. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả `20`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
