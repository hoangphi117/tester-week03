# TC-CALC-VAL-005: Validate khi thực hiện phép chia cho 0

## Requirement ID
FR-VALIDATION-05

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value  |
|---------------|--------|
| First number  | 10     |
| Second number | 0      |
| Operation     | Divide |

## Test steps
1. Nhập `10` vào ô **First number**
2. Nhập `0` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi: "Divide by zero error" hoặc tương đương
- Ô **Answer** không hiển thị kết quả số (hoặc hiển thị "Infinity / NaN")

## Status / Related bugs
Not Run / None
