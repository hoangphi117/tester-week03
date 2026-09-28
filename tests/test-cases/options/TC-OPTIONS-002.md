# TC-OPTIONS-002: Kiểm tra thao tác bật/tắt (toggle) checkbox Integers only

## Requirement ID
FR-OPTIONS-02

## Module / Test type / Technique
Tùy chọn (Options) / Functional / State Transition Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| Integers only | Click toggle |

## Test steps
1. Click vào checkbox **Integers only** (`id="integerSelect"`) lần 1
2. Quan sát trạng thái của checkbox
3. Click vào checkbox **Integers only** (`id="integerSelect"`) lần 2
4. Quan sát trạng thái của checkbox

## Expected result
- Sau bước 1: Checkbox chuyển sang trạng thái đã được tích chọn (checked)
- Sau bước 3: Checkbox chuyển về trạng thái không được tích chọn (unchecked)
- Checkbox phản hồi ngay lập tức, không bị giật lag hay treo giao diện

## Status / Related bugs
Not Run / None
