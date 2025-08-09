
exports.DarazHomePage = class DarazHomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[placeholder="Search in Daraz"]');
  }

  async goto() {
    await this.page.goto('https://www.daraz.pk/');
  }

  async searchItem(item) {
    await this.searchBox.fill(item);
    await this.searchBox.press('Enter'); // ⬅️ Press Enter to trigger search
    await this.page.waitForLoadState('networkidle'); // wait for results page
  }
};


