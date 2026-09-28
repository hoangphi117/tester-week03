# TC-CALC-ANS-001: Hiển thị kết quả phép cộng chính xác

## Requirement ID
FR-ANSWER-01

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 15    |
| Second number | 25    |
| Operation     | Add   |

## Test steps
1. Nhập `15` vào ô **First number** (`id="number1Field"`)
2. Nhập `25` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)
5. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả `40`
- Kết quả xuất hiện ngay sau khi nhấn Calculate
- Ô Answer là readonly (không thể chỉnh sửa trực tiếp)

## Status / Related bugs
Fail (Build 2) / [#9](../../bugs/BUG-003.md)
