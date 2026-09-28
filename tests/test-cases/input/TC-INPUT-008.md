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
- Hệ thống hiển thị thông báo lỗi yêu cầu nhập giá trị cho Second number
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Not Run / None
