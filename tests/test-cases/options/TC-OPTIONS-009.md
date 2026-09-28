# TC-OPTIONS-009: Kiểm tra trạng thái checkbox Integers only khi nhấn nút Clear

## Requirement ID
FR-OPTIONS-09

## Module / Test type / Technique
Tùy chọn (Options) / Functional / State Transition Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| Integers only | ✓ (checked) |
| Action | Click Clear |

## Test steps
1. Tích chọn checkbox **Integers only** (`id="integerSelect"`)
2. Click nút **Clear** (`id="clearButton"`)
3. Quan sát trạng thái của checkbox **Integers only**

## Expected result
- Checkbox **Integers only** được reset về trạng thái mặc định ban đầu là không được tích (unchecked)
- Các trường liên quan đều được dọn dẹp sạch sẽ

## Status / Related bugs
Not Run / None
