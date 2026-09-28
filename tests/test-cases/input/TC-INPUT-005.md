# TC-CALC-INP-005: Nhập số âm vào First Number

## Requirement ID
FR-INPUT-05

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field        | Value |
|--------------|-------|
| First number | -7    |

## Test steps
1. Click vào ô **First number** (`id="number1Field"`)
2. Nhập giá trị `-7`
3. Quan sát ô First number

## Expected result
- Ô **First number** hiển thị đúng giá trị `-7`
- Không có thông báo lỗi nào xuất hiện

## Status / Related bugs
Not Run / None
