# TC-CALC-CAL-008: Thực hiện phép nối chuỗi (Concatenate) hai số

## Requirement ID
FR-CALCULATE-08

## Module / Test type / Technique
Tính toán (Calculate) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value       |
|---------------|-------------|
| First number  | 12          |
| Second number | 34          |
| Operation     | Concatenate |

## Test steps
1. Nhập `12` vào ô **First number** (`id="number1Field"`)
2. Nhập `34` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Concatenate**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô **Answer** (`id="numberAnswerField"`) hiển thị chuỗi nối `1234` (không phải phép cộng `46`)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
