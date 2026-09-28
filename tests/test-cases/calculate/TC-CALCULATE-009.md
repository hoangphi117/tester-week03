# TC-CALC-CAL-009: Tính toán với tùy chọn Integers Only được bật

## Requirement ID
FR-CALCULATE-09

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field          | Value  |
|----------------|--------|
| First number   | 7      |
| Second number  | 2      |
| Operation      | Divide |
| Integers only  | ✓ (checked) |

## Test steps
1. Nhập `7` vào ô **First number** (`id="number1Field"`)
2. Nhập `2` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Tích vào checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả là số nguyên `3` (phần thập phân bị loại bỏ)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
