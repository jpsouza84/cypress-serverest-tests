# Automação de Testes com Cypress — ServeRest

Projeto desenvolvido como desafio técnico de QA, contendo testes automatizados E2E para o frontend e testes automatizados para a API da aplicação ServeRest.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions

## Aplicações testadas

- Frontend: https://front.serverest.dev
- API: https://serverest.dev

## Cenários de API

1. Criar um novo usuário com sucesso
2. Listar usuários cadastrados
3. Impedir o cadastro de um usuário com e-mail já existente

## Cenários de frontend

1. Realizar login com sucesso
2. Exibir mensagem de erro para credenciais inválidas
3. Realizar logout com sucesso

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── API/
│   │   └── users.cy.js
│   └── frontend.cy.js
├── pages/
│   └── loginPage.js
├── services/
│   └── userService.js
└── support/
    ├── commands.js
    └── e2e.js