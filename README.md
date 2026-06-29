# marvel-app
Tech challenge for position QA


📌 Descrição do projeto:

Este projeto implementa uma suíte de testes automatizados para uma aplicação que consome a API de personagens da Marvel.

O objetivo é validar:

Listagem de personagens
Busca de personagens
Exibição de detalhes
Comportamento da aplicação em cenários de erro e transversais

A suíte cobre testes de API, UI (E2E) e cenários não funcionais básicos, garantindo qualidade funcional e resiliência do sistema.

🧠 Estratégia adotada:

A estratégia de testes foi baseada na pirâmide de testes, priorizando cobertura em níveis mais baixos (API) e reduzindo dependência de UI.

Distribuição:
API Tests (base da pirâmide):
validação de contratos
regras de negócio
busca e paginação
UI/E2E Tests (fluxos críticos):
listagem de personagens
busca
navegação lista → detalhe
Transversais (qualidade do sistema):
loading states
tratamento de erro
indisponibilidade de API
console errors


## 🛠️ Pré-requisitos para rodar o projeto

- Node.js (usei a versão 24.18.0)
- VS Code

▶️ Istruções de execução:
1. Instalar dependências
npm install

2. Instalar Playwright
npx playwright install

3. Executar todos os testes
npx playwright test

4. Executar testes específicos
npx playwright test tests/api
npx playwright test tests/e2e

5. Gerar relatório
npx playwright show-report

🤖 Uso de IA

Este projeto contou com apoio de IA (ChatGPT) para:

Classificação de cenários (prioridade e camada)
Algumas dúvidas de códificação
Estruturação da matriz de testes