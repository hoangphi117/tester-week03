import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Answer (ANS)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-ANSWER-001: Hiển thị kết quả phép cộng chính xác', async () => {
    await calcPage.enterFirstNumber('15');
    await calcPage.enterSecondNumber('25');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('40');
    await expect(calcPage.numberAnswerField).toHaveAttribute('readonly', '');
  });

  test('TC-ANSWER-002: Hiển thị kết quả phép trừ chính xác', async () => {
    await calcPage.enterFirstNumber('50');
    await calcPage.enterSecondNumber('18');
    await calcPage.selectOperation('Subtract');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('32');
  });

  test('TC-ANSWER-003: Hiển thị kết quả phép nhân chính xác', async () => {
    await calcPage.enterFirstNumber('9');
    await calcPage.enterSecondNumber('9');
    await calcPage.selectOperation('Multiply');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('81');
  });

  test('TC-ANSWER-004: Hiển thị kết quả phép chia ra số nguyên', async () => {
    await calcPage.enterFirstNumber('100');
    await calcPage.enterSecondNumber('5');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('20');
  });

  test('TC-ANSWER-005: Hiển thị kết quả phép chia ra số thập phân', async () => {
    await calcPage.enterFirstNumber('1');
    await calcPage.enterSecondNumber('3');
    await calcPage.selectOperation('Divide');
    await calcPage.clickCalculate();

    const ans = await calcPage.getAnswerValue();
    expect(ans).toMatch(/^0\.3333/);
  });

  test('TC-ANSWER-006: Hiển thị kết quả phép nối chuỗi (Concatenate)', async () => {
    await calcPage.enterFirstNumber('56');
    await calcPage.enterSecondNumber('78');
    await calcPage.selectOperation('Concatenate');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('5678');
  });

  test('TC-ANSWER-007: Hiển thị kết quả là số nguyên khi bật Integers Only', async () => {
    await calcPage.enterFirstNumber('10');
    await calcPage.enterSecondNumber('3');
    await calcPage.selectOperation('Divide');
    await calcPage.checkIntegersOnly();
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('3');
  });

  test('TC-ANSWER-008: Ô Answer là readonly', async () => {
    await calcPage.enterFirstNumber('5');
    await calcPage.enterSecondNumber('3');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveAttribute('readonly', '');
    // Thử thao tác không cho phép gõ trực tiếp
    const isEditable = await calcPage.numberAnswerField.isEditable();
    expect(isEditable).toBe(false);
  });

  test('TC-ANSWER-009: Nút Clear xóa kết quả trong ô Answer', async () => {
    await calcPage.enterFirstNumber('8');
    await calcPage.enterSecondNumber('4');
    await calcPage.selectOperation('Add');
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('12');

    await calcPage.clickClear();
    await expect(calcPage.numberAnswerField).toHaveValue('');
  });
});
