# TC-CALC-ANS-005: Hiển thị kết quả phép chia ra số thập phân

## Requirement ID
FR-ANSWER-05

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field          | Value  |
|----------------|--------|
| First number   | 1      |
| Second number  | 3      |
| Operation      | Divide |
| Integers only  | (unchecked) |

## Test steps
1. Đảm bảo checkbox **Integers only** không được tích
2. Nhập `1` vào ô **First number** (`id="number1Field"`)
3. Nhập `3` vào ô **Second number** (`id="number2Field"`)
4. Chọn Operation = **Divide**
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả thập phân (ví dụ: `0.3333333333333333` hoặc được làm tròn)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
