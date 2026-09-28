# TC-CALC-VAL-006: Validate khi nhập khoảng trắng vào First Number

## Requirement ID
FR-VALIDATION-06

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value       |
|---------------|-------------|
| First number  | " " (space) |
| Second number | 5           |
| Operation     | Add         |

## Test steps
1. Click vào ô **First number** (`id="number1Field"`)
2. Nhập duy nhất một ký tự khoảng trắng (Space)
3. Nhập `5` vào ô **Second number**
4. Chọn Operation = **Add**
5. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Hệ thống hiển thị thông báo lỗi: First number không hợp lệ (khoảng trắng không được xem là số)
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Not Run / None
