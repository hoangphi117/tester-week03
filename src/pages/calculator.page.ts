import { Locator, Page, expect } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly selectBuildDropdown: Locator;
  readonly number1Field: Locator;
  readonly number2Field: Locator;
  readonly selectOperationDropdown: Locator;
  readonly calculateButton: Locator;
  readonly calculatingForm: Locator;
  readonly answerForm: Locator;
  readonly numberAnswerField: Locator;
  readonly integerSelect: Locator;
  readonly intSelectionLabel: Locator;
  readonly clearButton: Locator;
  readonly errorMsgField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectBuildDropdown = page.locator('#selectBuild');
    this.number1Field = page.locator('#number1Field');
    this.number2Field = page.locator('#number2Field');
    this.selectOperationDropdown = page.locator('#selectOperationDropdown');
    this.calculateButton = page.locator('#calculateButton');
    this.calculatingForm = page.locator('#calculatingForm');
    this.answerForm = page.locator('#answerForm');
    this.numberAnswerField = page.locator('#numberAnswerField');
    this.integerSelect = page.locator('#integerSelect');
    this.intSelectionLabel = page.locator('#intSelectionLabel');
    this.clearButton = page.locator('#clearButton');
    this.errorMsgField = page.locator('#errorMsgField');
  }

  async goto(build?: string) {
    const url = build !== undefined ? `https://testsheepnz.github.io/BasicCalculator.html?build=${build}` : 'https://testsheepnz.github.io/BasicCalculator.html';
    await this.page.goto(url);
    if (build !== undefined) {
      await this.selectBuild(build);
    }
  }

  async selectBuild(build: string) {
    await this.selectBuildDropdown.selectOption(build);
  }

  async enterFirstNumber(value: string) {
    await this.number1Field.fill(value);
  }

  async enterSecondNumber(value: string) {
    await this.number2Field.fill(value);
  }

  async selectOperation(operation: 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate' | string) {
    await this.selectOperationDropdown.selectOption({ label: operation });
  }

  async clickCalculate() {
    await this.calculateButton.click();
    // Chờ hệ thống xử lý: hoặc calculatingForm ẩn đi, hoặc có thông báo lỗi xuất hiện trong errorMsgField, hoặc ô Answer có giá trị
    await Promise.race([
      expect(this.calculatingForm).toBeHidden({ timeout: 3000 }).catch(() => {}),
      expect(this.errorMsgField).not.toHaveText('', { timeout: 3000 }).catch(() => {}),
    ]);
    // Cho một khoảng đệm nhỏ để DOM render ổn định
    await this.page.waitForTimeout(300);
  }

  async clickClear() {
    await this.clearButton.click();
  }

  async checkIntegersOnly() {
    await this.integerSelect.check();
  }

  async uncheckIntegersOnly() {
    await this.integerSelect.uncheck();
  }

  async getAnswerValue(): Promise<string> {
    return (await this.numberAnswerField.inputValue()).trim();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMsgField.innerText()).trim();
  }
}
