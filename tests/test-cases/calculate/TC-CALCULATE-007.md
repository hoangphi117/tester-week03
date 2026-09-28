# TC-CALC-CAL-007: Tính phép chia cho 0

## Requirement ID
FR-CALCULATE-07

## Module / Test type / Technique
Tính toán (Calculate) / Negative / Boundary Value Analysis

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
1. Nhập `10` vào ô **First number** (`id="number1Field"`)
2. Nhập `0` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Divide**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi chia cho 0 (ví dụ: "Divide by zero error")
- Ô **Answer** không hiển thị kết quả hợp lệ

## Status / Related bugs
Not Run / None
