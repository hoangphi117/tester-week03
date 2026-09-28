# TC-CALC-CAL-006: Tính phép chia cho kết quả là số thập phân

## Requirement ID
FR-CALCULATE-06

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field          | Value  |
|----------------|--------|
| First number   | 5      |
| Second number  | 2      |
| Operation      | Divide |
| Integers only  | (unchecked) |

## Test steps
1. Đảm bảo checkbox **Integers only** không được tích
2. Nhập `5` vào ô **First number** (`id="number1Field"`)
3. Nhập `2` vào ô **Second number** (`id="number2Field"`)
4. Chọn Operation = **Divide**
5. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả `2.5`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
