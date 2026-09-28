# TC-CALC-OPR-004: Chọn phép toán Chia (Divide)

## Requirement ID
FR-OPERATION-04

## Module / Test type / Technique
Chọn phép toán (Operation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field     | Value  |
|-----------|--------|
| Operation | Divide |

## Test steps
1. Click vào dropdown **Operation** (`id="selectOperationDropdown"`)
2. Chọn tùy chọn **Divide**
3. Quan sát dropdown Operation

## Expected result
- Dropdown **Operation** hiển thị giá trị đã chọn là **Divide**
- Tùy chọn Divide được đánh dấu là selected

## Status / Related bugs
Not Run / None
