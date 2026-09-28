# TC-OPTIONS-007: Tính toán phép chia hết khi bật Integers only

## Requirement ID
FR-OPTIONS-07

## Module / Test type / Technique
Tùy chọn (Options) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| First number | 6 |
| Second number | 2 |
| Operation | Divide |
| Integers only | ✓ (checked) |

## Test steps
1. Nhập `6` vào ô **First number** (`id="number1Field"`)
2. Nhập `2` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Tích chọn checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate** (`id="calculateButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị kết quả chính xác là số nguyên `3`
- Không có lỗi hiển thị hay phát sinh ký tự `.0` không cần thiết

## Status / Related bugs
Not Run / None
