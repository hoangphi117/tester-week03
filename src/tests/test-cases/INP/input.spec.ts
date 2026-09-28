import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Input (INP)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-INPUT-001: Nhập số nguyên dương hợp lệ vào First Number', async () => {
    await calcPage.enterFirstNumber('25');
    await expect(calcPage.number1Field).toHaveValue('25');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-INPUT-002: Nhập số nguyên dương hợp lệ vào Second Number', async () => {
    await calcPage.enterSecondNumber('10');
    await expect(calcPage.number2Field).toHaveValue('10');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-INPUT-003: Nhập số thập phân vào First Number', async () => {
    await calcPage.enterFirstNumber('3.14');
    await expect(calcPage.number1Field).toHaveValue('3.14');
  });

  test('TC-INPUT-004: Nhập số thập phân vào Second Number', async () => {
    await calcPage.enterSecondNumber('2.5');
    await expect(calcPage.number2Field).toHaveValue('2.5');
  });

  test('TC-INPUT-005: Nhập số âm vào First Number', async () => {
    await calcPage.enterFirstNumber('-7');
    await expect(calcPage.number1Field).toHaveValue('-7');
  });

  test('TC-INPUT-006: Nhập số âm vào Second Number', async () => {
    await calcPage.enterSecondNumber('-3');
    await expect(calcPage.number2Field).toHaveValue('-3');
  });

  test('TC-INPUT-007: Để trống ô First Number', async () => {
    await calcPage.enterFirstNumber('');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('5');
  });

  test('TC-INPUT-008: Để trống ô Second Number', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('10');
  });

  test('TC-INPUT-009: Nhập ký tự chữ cái vào First Number', async () => {
    await calcPage.enterFirstNumber('abc');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Number 1 is not a number');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-INPUT-010: Nhập ký tự đặc biệt vào Second Number', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('@#$');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Number 2 is not a number');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-INPUT-011: Nhập số có độ dài tối đa (10 ký tự) vào First Number', async () => {
    await calcPage.enterFirstNumber('9999999999');
    await calcPage.enterSecondNumber('1');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('');
    await expect(calcPage.numberAnswerField).toHaveValue('10000000000');
  });

  test('TC-INPUT-012: Nhập số 0 vào cả hai ô nhập liệu', async () => {
    await calcPage.enterFirstNumber('0');
    await calcPage.enterSecondNumber('0');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('');
    await expect(calcPage.numberAnswerField).toHaveValue('0');
  });

  test('TC-INPUT-013: Click nút Clear để xóa dữ liệu', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('15');

    await calcPage.clickClear();
    await expect(calcPage.numberAnswerField).toHaveValue('');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-INPUT-014: Nhập số vượt quá giới hạn 10 ký tự vào First Number', async () => {
    // Sử dụng page.locator để type lần lượt hoặc fill
    await calcPage.number1Field.pressSequentially('99999999999');
    const val = await calcPage.number1Field.inputValue();
    // Do maxlength = 10 nên chỉ chấp nhận tối đa 10 ký tự
    expect(val.length).toBeLessThanOrEqual(10);
    expect(val).toBe('9999999999');
  });
});
