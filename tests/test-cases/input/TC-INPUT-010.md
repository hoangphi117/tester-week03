# TC-CALC-INP-010: Nhập ký tự đặc biệt vào Second Number

## Requirement ID
FR-INPUT-10

## Module / Test type / Technique
Nhập liệu (Input) / Negative / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 10    |
| Second number | @#$   |
| Operation     | Add   |

## Test steps
1. Nhập `10` vào ô **First number**
2. Click vào ô **Second number** (`id="number2Field"`)
3. Nhập chuỗi ký tự đặc biệt `@#$`
4. Chọn Operation = **Add**
5. Click nút **Calculate**

## Expected result
- Hệ thống hiển thị thông báo lỗi: giá trị Second number không hợp lệ (không phải số)
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Not Run / None
