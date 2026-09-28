# TC-CALC-ANS-006: Hiển thị kết quả phép nối chuỗi (Concatenate)

## Requirement ID
FR-ANSWER-06

## Module / Test type / Technique
Hiển thị kết quả (Answer) / Functional / Use Case Testing

## Preconditions
- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data
| Field         | Value       |
|---------------|-------------|
| First number  | 56          |
| Second number | 78          |
| Operation     | Concatenate |

## Test steps
1. Nhập `56` vào ô **First number** (`id="number1Field"`)
2. Nhập `78` vào ô **Second number** (`id="number2Field"`)
3. Chọn Operation = **Concatenate**
4. Click nút **Calculate** (`id="calculateButton"`)
5. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result
- Ô **Answer** hiển thị chuỗi nối `5678` (không phải tổng `134`)
- Không có thông báo lỗi

## Status / Related bugs
Not Run / None
