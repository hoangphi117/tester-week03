# TC-CALC-INP-004: Nhập số thập phân vào Second Number

## Requirement ID
FR-INPUT-04

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Equivalence Partitioning

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| Second number | 2.5   |

## Test steps
1. Đảm bảo checkbox **Integers only** không được tích
2. Click vào ô **Second number** (`id="number2Field"`)
3. Nhập giá trị `2.5`
4. Quan sát ô Second number

## Expected result
- Ô **Second number** hiển thị đúng giá trị `2.5`
- Không có thông báo lỗi nào xuất hiện

## Status / Related bugs
Not Run / None
