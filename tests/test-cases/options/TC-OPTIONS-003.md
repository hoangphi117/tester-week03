# TC-OPTIONS-003: Kiểm tra tương tác click vào nhãn (label) Integers only

## Requirement ID
FR-OPTIONS-03

## Module / Test type / Technique
Tùy chọn (Options) / Usability & Accessibility / Interaction Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field | Value |
|---|---|
| Label target | "Integers only" text |

## Test steps
1. Click trực tiếp vào dòng chữ nhãn **Integers only** đứng cạnh ô checkbox
2. Quan sát trạng thái của ô checkbox (`id="integerSelect"`)

## Expected result
- Trạng thái checkbox **Integers only** được chuyển đổi tương ứng (từ unchecked sang checked hoặc ngược lại)

## Status / Related bugs
Not Run / None
