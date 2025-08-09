
exports.DarazProductDetailsPage = class DarazProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.freeShippingLabel = page.locator('text=Free Shipping');
  }

  async isFreeShippingAvailable() {
    return await this.freeShippingLabel.isVisible();
  }
};


