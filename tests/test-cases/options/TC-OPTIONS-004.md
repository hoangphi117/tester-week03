# TC-OPTIONS-004: Tính phép chia ra số thập phân khi bật Integers only

## Requirement ID
FR-OPTIONS-04

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
| Integers only | ✓ (checked) |

## Test steps
1. Nhập `5` vào ô **First number** (`id="number1Field"`)
2. Nhập `2` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Tích chọn checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả là số nguyên `2` (phần thập phân `.5` bị cắt bỏ hoặc kết quả được làm tròn thành số nguyên theo đặc tả)
- Không có phần chấm thập phân xuất hiện trong kết quả

## Status / Related bugs
Not Run / None
