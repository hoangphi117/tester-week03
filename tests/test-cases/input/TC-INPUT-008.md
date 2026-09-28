# TC-CALC-INP-008: Để trống ô Second Number

## Requirement ID
FR-INPUT-08

## Module / Test type / Technique
Nhập liệu (Input) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value   |
|---------------|---------|
| First number  | 10      |
| Second number | (trống) |
| Operation     | Add     |

## Test steps
1. Nhập `10` vào ô **First number**
2. Để trống ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate**

## Expected result
- Ô Second number mặc định có giá trị là 0
- Ô **Answer** hiển thị kết quả là 10

## Status / Related bugs
Not Run / None
