import { expect } from '@playwright/test';

export const abrirSite = async (page) => {
  await page.goto('https://www.marvel.com/');
};

export const validarTitulo = async (page) => {
  await expect(page).toHaveTitle(/Marvel/);
};


export const clicarPersonagens = async (page) => {
  await page.goto('https://www.marvel.com/', { waitUntil: 'domcontentloaded' });
};