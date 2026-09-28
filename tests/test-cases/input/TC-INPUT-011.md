# TC-CALC-INP-011: Nhập số rất lớn vào First Number

## Requirement ID
FR-INPUT-11

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field        | Value        |
|--------------|--------------|
| First number | 999999999999 |
| Second number| 1            |
| Operation    | Add          |

## Test steps
1. Click vào ô **First number** (`id="number1Field"`)
2. Nhập giá trị `999999999999`
3. Nhập `1` vào ô **Second number**
4. Chọn Operation = **Add**
5. Click nút **Calculate**

## Expected result
- Hệ thống chấp nhận giá trị và tính toán bình thường
- Ô **Answer** hiển thị kết quả `1000000000000`

## Status / Related bugs
Not Run / None
