# TC-CALC-OPR-002: Chọn phép toán Trừ (Subtract)

## Requirement ID
FR-OPERATION-02

## Module / Test type / Technique
Chọn phép toán (Operation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field     | Value    |
|-----------|----------|
| Operation | Subtract |

## Test steps
1. Click vào dropdown **Operation** (`id="selectOperationDropdown"`)
2. Chọn tùy chọn **Subtract**
3. Quan sát dropdown Operation

## Expected result
- Dropdown **Operation** hiển thị giá trị đã chọn là **Subtract**
- Tùy chọn Subtract được đánh dấu là selected

## Status / Related bugs
Not Run / None
