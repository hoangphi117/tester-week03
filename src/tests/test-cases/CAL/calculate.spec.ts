import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Calculate (CAL)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-CALCULATE-001: Tính phép cộng hai số nguyên dương', async () => {
    await calcPage.enterFirstNumber('12');
    await calcPage.enterSecondNumber('8');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('20');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-002: Tính phép trừ cho kết quả dương', async () => {
    await calcPage.enterFirstNumber('20');
    await calcPage.enterSecondNumber('7');
    await calcPage.selectOperation('Subtract');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('13');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-003: Tính phép trừ cho kết quả âm', async () => {
    await calcPage.enterFirstNumber('3');
    await calcPage.enterSecondNumber('10');
    await calcPage.selectOperation('Subtract');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('-7');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-004: Tính phép nhân hai số nguyên dương', async () => {
    await calcPage.enterFirstNumber('6');
    await calcPage.enterSecondNumber('7');
    await calcPage.selectOperation('Multiply');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('42');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-005: Tính phép chia cho kết quả là số nguyên', async () => {
    await calcPage.enterFirstNumber('20');
    await calcPage.enterSecondNumber('4');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('5');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-006: Tính phép chia cho kết quả là số thập phân', async () => {
    await calcPage.enterFirstNumber('5');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('2.5');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-007: Tính phép chia cho 0', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('0');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    await expect(calcPage.errorMsgField).toHaveText('Divide by zero error!');
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });

  test('TC-CALCULATE-008: Thực hiện phép nối chuỗi (Concatenate) hai số', async () => {
    await calcPage.enterFirstNumber('12');
    await calcPage.enterSecondNumber('34');
    await calcPage.selectOperation('Concatenate');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('1234');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-009: Tính toán với tùy chọn Integers Only được bật', async () => {
    await calcPage.enterFirstNumber('7');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.checkIntegersOnly();
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('3');
    await expect(calcPage.errorMsgField).toHaveText('');
  });

  test('TC-CALCULATE-010: Tính toán với số âm', async () => {
    await calcPage.enterFirstNumber('-5');
    await calcPage.enterSecondNumber('-3');
    await calcPage.selectOperation('Multiply');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('15');
    await expect(calcPage.errorMsgField).toHaveText('');
  });
});
