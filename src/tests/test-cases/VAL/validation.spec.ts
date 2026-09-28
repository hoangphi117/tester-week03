import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Validation (VAL)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-VALIDATION-001: Validate khi để trống cả hai ô nhập liệu', async () => {
    await calcPage.enterFirstNumber('');
    await calcPage.enterSecondNumber('');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    const errorMsg = await calcPage.getErrorMessage();
    const answer = await calcPage.getAnswerValue();
    // Kỳ vọng có lỗi validation và không hiển thị kết quả
    expect(errorMsg).not.toBe('');
    expect(answer).toBe('');
  });

  test('TC-VALIDATION-002: Validate khi nhập chữ cái vào First Number', async () => {
    await calcPage.enterFirstNumber('hello');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Number 1 is not a number');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-VALIDATION-003: Validate khi nhập chữ cái vào Second Number', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('xyz');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Number 2 is not a number');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-VALIDATION-004: Validate khi nhập ký tự đặc biệt vào First Number', async () => {
    await calcPage.enterFirstNumber('!@#$%');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Multiply');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Number 1 is not a number');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-VALIDATION-005: Validate khi thực hiện phép chia cho 0', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('0');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Divide by zero error!');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-VALIDATION-006: Validate khi nhập khoảng trắng vào First Number', async () => {
    await calcPage.enterFirstNumber('   ');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    const errorMsg = await calcPage.getErrorMessage();
    const answer = await calcPage.getAnswerValue();
    // Khoảng trắng không được coi là số hợp lệ
    expect(errorMsg).not.toBe('');
    expect(answer).toBe('');
  });

  test('TC-VALIDATION-007: Validate Integers Only không áp dụng cho Concatenate', async () => {
    // Khi chọn Concatenate, checkbox Integers only bị disabled / hidden
    await calcPage.selectOperation('Concatenate');

    await expect(calcPage.integerSelect).toBeDisabled();
    await expect(calcPage.integerSelect).toBeHidden();

    await calcPage.enterFirstNumber('12');
    await calcPage.enterSecondNumber('34');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('1234');
    await expect(calcPage.errorMsgField).toHaveText('');
  });
});
