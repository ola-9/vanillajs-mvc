import { test, expect } from '@playwright/test';

test('main-content-list', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.locator('#list-python-list').click();
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade');
  await expect(page.locator('#secondary-javascript-list')).toHaveClass('list-group-item list-group-item-action active');
  await expect(page.locator('#secondary-python-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.locator('#secondary-ruby-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade active show');
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade');
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade');

  await page.locator('#list-ruby-list').click();
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade');
  await expect(page.locator('#secondary-javascript-list')).toHaveClass('list-group-item list-group-item-action active');
  await expect(page.locator('#secondary-python-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.locator('#secondary-ruby-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade active show');
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade');
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade');

  await page.locator('#list-javascript-list').click();
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade');
  await expect(page.locator('#secondary-javascript-list')).toHaveClass('list-group-item list-group-item-action active');
  await expect(page.locator('#secondary-python-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.locator('#secondary-ruby-list')).toHaveClass('list-group-item list-group-item-action');
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade active show');
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade');
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade');
});

test('secondary-content-list', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.locator('#secondary-python-list').click();
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade active show')
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade')
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade');
  await expect(page.locator('#list-javascript-list')).toHaveClass('list-group-item active');
  await expect(page.locator('#list-python-list')).toHaveClass('list-group-item');
  await expect(page.locator('#list-ruby-list')).toHaveClass('list-group-item');
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade');

  await page.locator('#secondary-ruby-list').click();
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade active show');
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade')
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade')
  await expect(page.locator('#list-javascript-list')).toHaveClass('list-group-item active');
  await expect(page.locator('#list-python-list')).toHaveClass('list-group-item');
  await expect(page.locator('#list-ruby-list')).toHaveClass('list-group-item');
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade');

  await page.locator('#secondary-javascript-list').click();
  await expect(page.getByTestId('secondary-javascript')).toHaveClass('tab-pane fade active show')
  await expect(page.getByTestId('secondary-python')).toHaveClass('tab-pane fade')
  await expect(page.getByTestId('secondary-ruby')).toHaveClass('tab-pane fade');
  await expect(page.locator('#list-javascript-list')).toHaveClass('list-group-item active');
  await expect(page.locator('#list-python-list')).toHaveClass('list-group-item');
  await expect(page.locator('#list-ruby-list')).toHaveClass('list-group-item');
  await expect(page.getByTestId('list-javascript')).toHaveClass('card-body tab-pane fade active show');
  await expect(page.getByTestId('list-python')).toHaveClass('card-body tab-pane fade');
  await expect(page.getByTestId('list-ruby')).toHaveClass('card-body tab-pane fade');
});
