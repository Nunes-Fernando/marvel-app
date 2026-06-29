import { expect } from '@playwright/test';


export const clicarPersonagens = async (page) => {
  const botao = page
    .locator("a[data-testid='button_link']")
    .filter({ hasText: 'Characters' })
    .first();

  await botao.scrollIntoViewIfNeeded();
  await botao.waitFor({ state: 'visible' });
  await botao.click();
};