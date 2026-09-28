# TC-CALC-INP-013: Click nút Clear để xóa toàn bộ dữ liệu

## Requirement ID
FR-INPUT-13

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 10    |
| Second number | 5     |
| Operation     | Add   |

## Test steps
1. Nhập `10` vào ô **First number**
2. Nhập `5` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate** để có kết quả
5. Click nút **Clear** (`id="clearButton"`)

## Expected result
- Ô **First number** trở về trống
- Ô **Second number** trở về trống
- Ô **Answer** trở về trống
- Form trở về trạng thái ban đầu

## Status / Related bugs
Fail (Build 2) / [#9](../../bugs/BUG-003.md)
