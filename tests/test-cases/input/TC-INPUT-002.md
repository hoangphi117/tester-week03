# TC-CALC-INP-002: Nhập số nguyên dương hợp lệ vào Second Number

## Requirement ID
FR-INPUT-02

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| Second number | 10    |

## Test steps
1. Click vào ô **Second number** (`id="number2Field"`)
2. Nhập giá trị `10`
3. Quan sát ô Second number

## Expected result
- Ô **Second number** hiển thị đúng giá trị `10`
- Không có thông báo lỗi nào xuất hiện

## Status / Related bugs
Not Run / None
