# TC-CALC-INP-006: Nhập số âm vào Second Number

## Requirement ID
FR-INPUT-06

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| Second number | -3    |

## Test steps
1. Click vào ô **Second number** (`id="number2Field"`)
2. Nhập giá trị `-3`
3. Quan sát ô Second number

## Expected result
- Ô **Second number** hiển thị đúng giá trị `-3`
- Không có thông báo lỗi nào xuất hiện

## Status / Related bugs
Not Run / None
