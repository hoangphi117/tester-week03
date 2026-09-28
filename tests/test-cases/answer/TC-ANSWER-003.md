# TC-CALC-ANS-003: Hiển thị kết quả phép nhân chính xác

## Requirement ID
FR-ANSWER-03

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | 9        |
| Second number | 9        |
| Operation     | Multiply |

## Test steps
1. Nhập `9` vào ô **First number** (`id="number1Field"`)
2. Nhập `9` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Multiply**
4. Click nút **Calculate** (`id="calculateButton"`)
5. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả `81`
- Kết quả xuất hiện ngay sau khi nhấn Calculate

## Status / Related bugs
Not Run / None
