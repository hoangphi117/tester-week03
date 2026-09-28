# TC-OPTIONS-005: Tính phép chia ra số thập phân khi tắt Integers only

## Requirement ID
FR-OPTIONS-05

## Module / Test type / Technique
Tùy chọn (Options) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| First number | 5 |
| Second number | 2 |
| Operation | Divide |
| Integers only | (unchecked) |

## Test steps
1. Nhập `5` vào ô **First number** (`id="number1Field"`)
2. Nhập `2` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Đảm bảo checkbox **Integers only** (`id="integerSelect"`) không được tích
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả đầy đủ có phần thập phân: `2.5`
- Kết quả không bị làm tròn thành số nguyên

## Status / Related bugs
Not Run / None
