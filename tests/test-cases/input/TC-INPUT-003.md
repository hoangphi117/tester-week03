# TC-CALC-INP-003: Nhập số thập phân vào First Number

## Requirement ID
FR-INPUT-03

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field        | Value |
|--------------|-------|
| First number | 3.14  |

## Test steps
1. Đảm bảo checkbox **Integers only** không được tích
2. Click vào ô **First number** (`id="number1Field"`)
3. Nhập giá trị `3.14`
4. Quan sát ô First number

## Expected result
- Ô **First number** hiển thị đúng giá trị `3.14`
- Không có thông báo lỗi nào xuất hiện

## Status / Related bugs
Not Run / None
