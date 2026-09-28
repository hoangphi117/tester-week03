# TC-CALC-ANS-002: Hiển thị kết quả phép trừ chính xác

## Requirement ID
FR-ANSWER-02

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value    |
|---------------|----------|
| First number  | 50       |
| Second number | 18       |
| Operation     | Subtract |

## Test steps
1. Nhập `50` vào ô **First number** (`id="number1Field"`)
2. Nhập `18` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Subtract**
4. Click nút **Calculate** (`id="calculateButton"`)
5. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả `32`
- Kết quả xuất hiện ngay sau khi nhấn Calculate

## Status / Related bugs
Not Run / None
