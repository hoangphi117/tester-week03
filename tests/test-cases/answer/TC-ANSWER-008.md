# TC-CALC-ANS-008: Ô Answer là readonly (không cho phép chỉnh sửa trực tiếp)

## Requirement ID
FR-ANSWER-08

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value |
|---------------|-------|
| First number  | 5     |
| Second number | 3     |
| Operation     | Add   |

## Test steps
1. Nhập `5` vào ô **First number**
2. Nhập `3` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate**
5. Click vào ô **Answer** (`id="numberAnswerField"`)
6. Thử nhập hoặc thay đổi nội dung ô Answer

## Expected result
- Ô **Answer** có thuộc tính `readonly` — người dùng không thể gõ vào hoặc thay đổi nội dung
- Kết quả `8` vẫn được giữ nguyên sau khi thử chỉnh sửa

## Status / Related bugs
Not Run / None
