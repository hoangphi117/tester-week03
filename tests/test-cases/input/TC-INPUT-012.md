# TC-CALC-INP-012: Nhập số 0 vào cả hai ô nhập liệu

## Requirement ID
FR-INPUT-12

## Module / Test type / Technique
Nhập liệu (Input) / Functional / Boundary Value Analysis

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 0     |
| Second number | 0     |
| Operation     | Add   |

## Test steps
1. Nhập `0` vào ô **First number**
2. Nhập `0` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate**

## Expected result
- Ô **Answer** hiển thị kết quả `0`
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
