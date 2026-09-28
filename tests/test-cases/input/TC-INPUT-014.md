# TC-CALC-INP-014: Nhập số vượt quá giới hạn 10 ký tự vào First Number

## Requirement ID
FR-INPUT-14

## Module / Test type / Technique
Nhập liệu (Input) / Negative / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value         |
|---------------|---------------|
| First number  | 99999999999   |
| Second number | 1             |
| Operation     | Add           |

## Test steps
1. Click vào ô **First number** (`id="number1Field"`)
2. Nhập giá trị `99999999999` (11 ký tự — vượt quá giới hạn)
3. Quan sát nội dung hiển thị trong ô **First number**

## Expected result
- Ô **First number** chỉ chấp nhận tối đa 10 ký tự
- Ký tự thứ 11 trở đi bị từ chối hoặc bị cắt bớt — ô chỉ hiển thị `9999999999`
- Không có cơ chế nào cho phép nhập quá 10 ký tự (maxlength hoặc logic frontend)

## Status / Related bugs
Not Run / None
