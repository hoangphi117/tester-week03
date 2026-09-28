# TC-OPTIONS-006: Tính toán ra kết quả số âm có phần thập phân khi bật Integers only

## Requirement ID
FR-OPTIONS-06

## Module / Test type / Technique
Tùy chọn (Options) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| First number | -7 |
| Second number | 2 |
| Operation | Divide |
| Integers only | ✓ (checked) |

## Test steps
1. Nhập `-7` vào ô **First number** (`id="number1Field"`)
2. Nhập `2` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Tích chọn checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả là số nguyên âm `-3` (hoặc `-4` tùy theo phương thức làm tròn của hệ thống)
- Kết quả giữ đúng dấu âm và không chứa phần thập phân

## Status / Related bugs
Not Run / None
