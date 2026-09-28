# TC-CALC-INP-007: Để trống ô First Number

## Requirement ID
FR-INPUT-07

## Module / Test type / Technique
Nhập liệu (Input) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | (trống) |
| Second number | 5     |
| Operation     | Add   |

## Test steps
1. Để trống ô **First number**
2. Nhập `5` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate**

## Expected result
- Ô First number mặc định có giá trị là 0
- Ô Answer hiển thị kết quả là 5

## Status / Related bugs
Not Run / None
