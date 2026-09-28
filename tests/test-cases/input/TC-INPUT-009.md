# TC-CALC-INP-009: Nhập ký tự chữ cái vào First Number

## Requirement ID
FR-INPUT-09

## Module / Test type / Technique
Nhập liệu (Input) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field        | Value |
|--------------|-------|
| First number | abc   |
| Second number| 5     |
| Operation    | Add   |

## Test steps
1. Click vào ô **First number** (`id="number1Field"`)
2. Nhập chuỗi ký tự `abc`
3. Nhập `5` vào ô **Second number**
4. Chọn Operation = **Add**
5. Click nút **Calculate**

## Expected result
- Hệ thống hiển thị thông báo lỗi: giá trị First number không hợp lệ (không phải số)
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Not Run / None
