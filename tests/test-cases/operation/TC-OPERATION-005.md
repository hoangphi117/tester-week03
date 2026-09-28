# TC-CALC-OPR-005: Chọn phép toán Nối chuỗi (Concatenate)

## Requirement ID
FR-OPERATION-05

## Module / Test type / Technique
Chọn phép toán (Operation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field     | Value       |
|-----------|-------------|
| Operation | Concatenate |

## Test steps
1. Click vào dropdown **Operation** (`id="selectOperationDropdown"`)
2. Chọn tùy chọn **Concatenate**
3. Quan sát dropdown Operation và checkbox Integers only

## Expected result
- Dropdown **Operation** hiển thị giá trị đã chọn là **Concatenate**
- Checkbox **Integers only** bị ẩn hoặc bị disable (vì Concatenate không hỗ trợ tùy chọn này)

## Status / Related bugs
Not Run / None
