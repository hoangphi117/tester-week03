import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Options (OPT)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-OPTIONS-001: Kiểm tra trạng thái mặc định của checkbox Integers only', async () => {
    await expect(calcPage.integerSelect).not.toBeChecked();
    await expect(calcPage.intSelectionLabel).toContainText('Integers only');
  });

  test('TC-OPTIONS-002: Kiểm tra thao tác bật/tắt (toggle) checkbox Integers only', async () => {
    await calcPage.checkIntegersOnly();
    await expect(calcPage.integerSelect).toBeChecked();

    await calcPage.uncheckIntegersOnly();
    await expect(calcPage.integerSelect).not.toBeChecked();
  });

  test('TC-OPTIONS-003: Kiểm tra tương tác click vào nhãn (label) Integers only', async () => {
    // Click vào label hoặc checkbox để kiểm tra khả năng tương tác
    await calcPage.intSelectionLabel.click();
    // Một số giao diện cho phép click label để check, nếu không gắn for thì click thẳng checkbox
    await calcPage.integerSelect.click();
    await expect(calcPage.integerSelect).toBeChecked();
  });

  test('TC-OPTIONS-004: Tính phép chia ra số thập phân khi bật Integers only', async () => {
    await calcPage.enterFirstNumber('5');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.checkIntegersOnly();
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('2');
  });

  test('TC-OPTIONS-005: Tính phép chia ra số thập phân khi tắt Integers only', async () => {
    await calcPage.enterFirstNumber('5');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.uncheckIntegersOnly();
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('2.5');
  });

  test('TC-OPTIONS-006: Tính toán ra kết quả số âm có phần thập phân khi bật Integers only', async () => {
    await calcPage.enterFirstNumber('-7');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.checkIntegersOnly();
    await calcPage.clickCalculate();

    // parseInt(-3.5) = -3
    await expect(calcPage.numberAnswerField).toHaveValue('-3');
  });

  test('TC-OPTIONS-007: Tính toán phép chia hết khi bật Integers only', async () => {
    await calcPage.enterFirstNumber('6');
    await calcPage.enterSecondNumber('2');
    await calcPage.selectOperation('Divide');
    await calcPage.checkIntegersOnly();
    await calcPage.clickCalculate();

    await expect(calcPage.numberAnswerField).toHaveValue('3');
  });

  test('TC-OPTIONS-008: Kiểm tra tùy chọn Integers only với phép toán Concatenate', async () => {
    await calcPage.enterFirstNumber('1.5');
    await calcPage.enterSecondNumber('2.5');
    await calcPage.selectOperation('Concatenate');

    await expect(calcPage.integerSelect).toBeHidden();
  });

  test('TC-OPTIONS-009: Kiểm tra trạng thái checkbox Integers only khi nhấn nút Clear', async () => {
    await calcPage.checkIntegersOnly();
    await expect(calcPage.integerSelect).toBeChecked();

    await calcPage.clickClear();
    await expect(calcPage.integerSelect).not.toBeChecked();
  });
});
