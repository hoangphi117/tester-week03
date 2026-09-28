# TC-CALC-OPR-001: Chọn phép toán Cộng (Add)

## Requirement ID
FR-OPERATION-01

## Module / Test type / Technique
Chọn phép toán (Operation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| Operation     | Add   |

## Test steps
1. Click vào dropdown **Operation** (`id="selectOperationDropdown"`)
2. Chọn tùy chọn **Add**
3. Quan sát dropdown Operation

## Expected result
- Dropdown **Operation** hiển thị giá trị đã chọn là **Add**
- Tùy chọn Add được đánh dấu là selected

## Status / Related bugs
Not Run / None
