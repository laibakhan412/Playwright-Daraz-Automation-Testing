
const { expect } = require('@playwright/test');

exports.DarazSearchResultsPage = class DarazSearchResultsPage {
  constructor(page) {
    this.page = page;
    this.brandFilter = brand => page.locator(`label:has-text("${brand}") input[type="checkbox"]`);
    this.freeShippingCheckbox = page.locator('input[businessvalue="Free_Shipping"]').first(); 
    this.minPriceInput = page.locator('input[placeholder="Min"]').first();
    this.maxPriceInput = page.locator('input[placeholder="Max"]').first();
    this.applyPriceBtn = page.locator('button.ant-btn-icon-only');
    this.productImages = page.locator('img[type="product"]'); 
  }

  async applyBrandFilter(brand) {
    const checkbox = this.brandFilter(brand);
    await checkbox.waitFor({ state: 'visible', timeout: 10000 });
    await checkbox.check();
    // Wait for the product images to reload after the filter is applied
    await this.page.waitForSelector('img[type="product"]', { timeout: 30000 });
  }

  async applyFreeShippingFilter() {
    await this.freeShippingCheckbox.check();
    // Wait for the product images to reload
    await this.page.waitForSelector('img[type="product"]', { timeout: 30000 });
  }

  async applyPriceFilter(min, max) {
    await this.minPriceInput.fill(String(min));
    await this.maxPriceInput.fill(String(max));
    await this.applyPriceBtn.click();
    // Wait for the product images to reload after applying the price filter
    await this.page.waitForSelector('img[type="product"]', { timeout: 30000 });
  }

  async getProductCount() {
    // Wait for at least one product image to be visible
    await this.page.waitForSelector('img[type="product"]', { timeout: 30000 });
    const count = await this.productImages.count();
    console.log(`Found ${count} products`);
    return count;
  }

  async clickFirstProduct() {
    // Wait for the first product image to be visible
    const firstProductImage = this.productImages.first();
    await firstProductImage.waitFor({ state: 'visible', timeout: 30000 });

    const [response] = await Promise.all([
      // Wait for the current page to navigate away
      this.page.waitForNavigation(),
      // Or for a new page to open
      this.page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
      firstProductImage.click(),
    ]);

    // Check if a new page was returned from the Promise.all
    if (response && response.url() !== this.page.url()) {
      // Return the new page if it's different from the original
      return response;
    } else {
      // Otherwise, assume navigation happened on the same page
      return this.page;
    }
  }
};

