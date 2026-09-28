# TC-OPTIONS-008: Kiểm tra tùy chọn Integers only với phép toán Concatenate

## Requirement ID
FR-OPTIONS-08

## Module / Test type / Technique
Tùy chọn (Options) / Functional / Special Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| First number | 1.5 |
| Second number | 2.5 |
| Operation | Concatenate |
| Integers only | ✓ (checked) |

## Test steps
1. Nhập `1.5` vào ô **First number** (`id="number1Field"`)
2. Nhập `2.5` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Concatenate**
4. Kiểm tra hiển thị checkbox **Integers only** (`id="integerSelect"`)

## Expected result
- CheckboxIntegers only bị ẩn đi

## Status / Related bugs
Not Run / None
