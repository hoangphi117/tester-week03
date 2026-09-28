# TC-CALC-VAL-007: Validate Integers Only không áp dụng cho Concatenate

## Requirement ID
FR-VALIDATION-07

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field          | Value       |
|----------------|-------------|
| First number   | 12          |
| Second number  | 34          |
| Operation      | Concatenate |
| Integers only  | (checked)   |

## Test steps
1. Nhập `12` vào ô **First number**
2. Nhập `34` vào ô **Second number**
3. Chọn Operation = **Concatenate**
4. Quan sát trạng thái của checkbox **Integers only** (`id="integerSelect"`)
5. Click nút **Calculate**

## Expected result
- Khi Operation = Concatenate, checkbox **Integers only** bị vô hiệu hóa (disabled) hoặc ẩn đi
- Hệ thống không áp dụng kiểm tra Integers only khi thực hiện Concatenate
- Ô **Answer** hiển thị kết quả là chuỗi nối `1234`

## Status / Related bugs
Not Run / None
