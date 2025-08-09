
const { test, expect } = require('@playwright/test');
const { DarazHomePage } = require('../pages/darazHomePage');
const { DarazSearchResultsPage } = require('../pages/darazSearchResultsPage');

test('Daraz automation: Search, filter, and navigate to product page', async ({ page }) => {
  const home = new DarazHomePage(page);
  const results = new DarazSearchResultsPage(page);

  await home.goto();
  await home.searchItem('electronics');
  await results.applyBrandFilter('Planet X');
  await results.applyFreeShippingFilter();
  await results.applyPriceFilter('500', '5000');

  const productCount = await results.getProductCount();
  expect(productCount).toBeGreaterThan(0);

  const newPageHandle = await results.clickFirstProduct();

});

