# TC-CALC-ANS-007: Hiển thị kết quả là số nguyên khi bật Integers Only

## Requirement ID
FR-ANSWER-07

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field          | Value  |
|----------------|--------|
| First number   | 10     |
| Second number  | 3      |
| Operation      | Divide |
| Integers only  | ✓ (checked) |

## Test steps
1. Nhập `10` vào ô **First number** (`id="number1Field"`)
2. Nhập `3` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Tích vào checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị số nguyên `3` (phần thập phân bị cắt bỏ, không phải `3.333...`)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
