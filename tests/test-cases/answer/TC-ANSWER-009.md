# TC-CALC-ANS-009: Nút Clear xóa kết quả trong ô Answer

## Requirement ID

FR-ANSWER-09

## Module / Test type / Technique

Hiển thị kết quả (Answer) / Functional / Use Case Testing

## Preconditions

- Build được chọn là build cần test
- Các trường nhập liệu đang trống

## Test data

| Field         | Value |
| ------------- | ----- |
| First number  | 8     |
| Second number | 4     |
| Operation     | Add   |

## Test steps

1. Nhập `8` vào ô **First number**
2. Nhập `4` vào ô **Second number**
3. Chọn Operation = **Add**
4. Click nút **Calculate** — ô Answer hiển thị `12`
5. Click nút **Clear** (`id="clearButton"`)
6. Quan sát ô **Answer** (`id="numberAnswerField"`)

## Expected result

- Ô **Answer** trở về trống (không còn giá trị `12`)

## Status / Related bugs
Fail (Build 2) / [#9](../../bugs/BUG-003.md)
