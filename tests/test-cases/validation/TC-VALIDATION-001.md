# TC-CALC-VAL-001: Validate khi để trống cả hai ô nhập liệu

## Requirement ID
FR-VALIDATION-01

## Module / Test type / Technique
Kiểm tra dữ liệu (Validation) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value   |
|---------------|---------|
| First number  | (trống) |
| Second number | (trống) |
| Operation     | Add     |

## Test steps
1. Không nhập gì vào ô **First number**
2. Không nhập gì vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate** (`id="calculateButton"`)

## Expected result
- Ô First number và Second number mặc định có giá trị là 0
- Ô **Answer** (`id="numberAnswerField"`) hiển thị kết quả là 0

## Status / Related bugs
Not Run / None
