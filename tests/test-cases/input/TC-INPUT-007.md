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
- Hệ thống hiển thị thông báo lỗi yêu cầu nhập giá trị cho First number
- Ô **Answer** không hiển thị kết quả

## Status / Related bugs
Not Run / None
