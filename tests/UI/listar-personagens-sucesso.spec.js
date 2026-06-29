import { test } from '@playwright/test';

import {
  abrirSite,
  validarTitulo
} from '../pages/validacao-inicial.js';

import {
  clicarPersonagens
} from '../pages/listar-personagens.js';

test.beforeEach(async ({ page }) => {
  await abrirSite(page);
  await validarTitulo(page);
});

test('Listar personagens com sucesso', async ({ page }) => {
  await clicarPersonagens(page);
});