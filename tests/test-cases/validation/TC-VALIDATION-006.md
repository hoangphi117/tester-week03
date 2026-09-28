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
- Ô First number mặc định có giá trị là 0
- Ô Answer hiển thị kết quả là 5

## Status / Related bugs
Fail (Build 2) / [#9](../../bugs/BUG-003.md)
