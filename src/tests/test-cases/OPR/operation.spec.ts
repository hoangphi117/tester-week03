import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../../../pages/calculator.page';

test.describe('Module Operation (OPR)', () => {
  let calcPage: CalculatorPage;
  const build = process.env.BUILD_VERSION || '0';

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto(build);
  });

  test('TC-OPERATION-001: Chọn phép toán Cộng (Add)', async () => {
    await calcPage.selectOperation('Add');
    await expect(calcPage.selectOperationDropdown).toHaveValue('0');
  });

  test('TC-OPERATION-002: Chọn phép toán Trừ (Subtract)', async () => {
    await calcPage.selectOperation('Subtract');
    await expect(calcPage.selectOperationDropdown).toHaveValue('1');
  });

  test('TC-OPERATION-003: Chọn phép toán Nhân (Multiply)', async () => {
    await calcPage.selectOperation('Multiply');
    await expect(calcPage.selectOperationDropdown).toHaveValue('2');
  });

  test('TC-OPERATION-004: Chọn phép toán Chia (Divide)', async () => {
    await calcPage.selectOperation('Divide');
    await expect(calcPage.selectOperationDropdown).toHaveValue('3');
  });

  test('TC-OPERATION-005: Chọn phép toán Nối chuỗi (Concatenate)', async () => {
    await calcPage.selectOperation('Concatenate');
    await expect(calcPage.selectOperationDropdown).toHaveValue('4');
  });

  test('TC-OPERATION-006: Kiểm tra giá trị mặc định của Operation dropdown', async () => {
    // Mặc định dropdown là Add (value 0)
    await expect(calcPage.selectOperationDropdown).toHaveValue('0');
    const selectedText = await calcPage.selectOperationDropdown.locator('option:checked').innerText();
    expect(selectedText.trim()).toBe('Add');
  });
});
