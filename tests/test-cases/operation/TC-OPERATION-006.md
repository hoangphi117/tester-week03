# TC-CALC-OPR-006: Kiểm tra giá trị mặc định của Operation dropdown

## Requirement ID
FR-OPERATION-06

## Module / Test type / Technique
Chọn phép toán (Operation) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|-------|-------|
| (none) | - |

## Test steps
1. Không tương tác với bất kỳ phần tử nào
2. Quan sát dropdown **Operation** (`id="selectOperationDropdown"`)

## Expected result
- Dropdown **Operation** hiển thị giá trị mặc định là **Add**
- Dropdown chứa đầy đủ 5 tùy chọn: Add, Subtract, Multiply, Divide, Concatenate

## Status / Related bugs
Not Run / None
