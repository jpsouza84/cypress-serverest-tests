# Automação de Testes com Cypress — ServeRest

Projeto desenvolvido como desafio técnico de QA, contendo testes automatizados E2E para o frontend e testes automatizados para a API da aplicação ServeRest.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
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
.github/
└── workflows/
    └── cypress.yml

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

cypress.config.js
package.json
package-lock.json
```

## Padrões e boas práticas

O projeto utiliza os seguintes padrões e práticas:

- **Page Object:** encapsula os seletores e as ações da página de login.
- **Service Object:** centraliza as requisições realizadas para a API.
- **Custom Commands:** disponibiliza comandos reutilizáveis, como `cy.login()`, `cy.createUser()` e `cy.getUsers()`.
- **Testes independentes:** cada cenário prepara os próprios dados necessários.
- **Seletores estáveis:** utilização de atributos `data-testid` nas interações com o frontend.
- **Dados dinâmicos:** geração de e-mails únicos com `Date.now()`, evitando conflitos entre execuções.
- **Validações de contrato e regra de negócio:** verificação de status HTTP, propriedades da resposta e mensagens retornadas pela aplicação.

## Estratégia de testes

Os cenários de login criam previamente os usuários pela API. Essa abordagem reduz o tempo de execução do setup e elimina a dependência de credenciais fixas ou de dados previamente cadastrados.

Os testes cobrem fluxos positivos e negativos, incluindo autenticação válida, credenciais inválidas e tentativa de cadastro com e-mail duplicado.

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js
- npm
- Git

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd cypress-serverest-tests
```

Instale as dependências:

```bash
npm ci
```

## Execução dos testes

### Modo interativo

```bash
npx cypress open
```

### Modo headless

```bash
npx cypress run
```

### Somente os testes de frontend

```bash
npx cypress run --spec "cypress/e2e/frontend.cy.js"
```

### Somente os testes de API

```bash
npx cypress run --spec "cypress/e2e/API/users.cy.js"
```

## Integração contínua

O projeto possui um workflow do GitHub Actions que:

1. Baixa o código do repositório
2. Configura o Node.js
3. Instala as dependências com `npm ci`
4. Executa todos os testes em modo headless
5. Armazena screenshots como artefatos em caso de falha

O workflow é executado automaticamente em pushes e pull requests direcionados à branch `main`.

## Resultado esperado

```text
Tests:    6
Passing:  6
Failing:  0
```