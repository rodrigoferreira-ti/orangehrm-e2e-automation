# 🧪 Cypress E2E Automation - OrangeHRM

[![Executar Testes Cypress](https://github.com/rodrigoferreira-ti/orangehrm-e2e-automation/actions/workflows/main.yml/badge.svg)](https://github.com/rodrigoferreira-ti/orangehrm-e2e-automation/actions/workflows/main.yml)
![Cypress Version](https://img.shields.io/badge/cypress-13.x-04C38C?logo=cypress)
![Node Version](https://img.shields.io/badge/node-v22-green?logo=node.js)

Projeto de automação de testes End-to-End (E2E) cobrindo os principais fluxos da plataforma de demonstração OrangeHRM. O foco da arquitetura foi a manutenibilidade, separação de responsabilidades (elementos vs. massa) e integração contínua via CI/CD.

---

## 🎯 Cenários Cobertos

* [x] Validação de elementos estruturais e links institucionais / redes sociais
* [x] Fluxo de recuperação de senha (*Reset Password*)
* [x] Autenticação com credenciais padrão válidas
* [x] Validação de mensagens de erro para credenciais inválidas
* [x] Limpeza e persistência de sessão de login (*cookies/session storage*)

---

## 🔮 Próximos Passos (Roadmap de Testes)

Planejamento para as próximas iterações da suíte de testes na área autenticada (**Dashboard**):

- [ ] **Gerenciamento de Sessão:** Implementação de `cy.session()` para reaproveitar autenticação sem relogar a cada teste
- [ ] **Validação de Widgets:** Verificação estrutural dos cards principais (*Time at Work*, *My Actions* e *Quick Launch*)
- [ ] **Interações de Quick Launch:** Testes de navegação rápida via atalhos do painel
- [ ] **Filtro da Barra Lateral:** Validação do campo de busca dinâmica de módulos na sidebar
- [ ] **Modal de Sistema:** Abertura e fechamento do modal *About* através do dropdown de perfil do usuário

## 🏗️ Estrutura do Projeto

O repositório adota uma abordagem modular para evitar código duplicado e seletores espalhados nos testes:

cypress/
  ├── e2e/               # Especificações de testes (.cy.js)  
  ├── fixtures/          # Massa estática de testes em formato JSON puro  
  ├── support/  
  │    ├── elements/     # Centralização de seletores CSS em constantes  
  │    ├── commands.js   # Custom commands reutilizáveis (ex: cy.login)  
  │    └── e2e.js        # Configurações globais e tratamento de exceções  
.github/workflows/       # Pipeline CI com GitHub Actions  

---

## ⚙️ Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) — Framework principal de automação E2E
* JavaScript (ES6+) — Linguagem padrão do projeto
* GitHub Actions — Pipeline de Integração Contínua para execução headless
* Artifacts — Coleta automática de screenshots e vídeos apenas em falhas

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js (versão 20 ou superior recomendada)
* npm instalado

### 1. Clonar o repositório
git clone https://github.com/rodrigoferreira-ti/cypress-orangehrm-e2e.git
cd cypress-orangehrm-e2e

### 2. Instalar as dependências
npm install

### 3. Executar os testes

Modo Interativo (Cypress GUI):
npx cypress open
(Selecione "E2E Testing" e escolha o navegador de sua preferência)

Modo Headless (Terminal / CI):
npx cypress run

---

## 🔄 Pipeline CI/CD

A suíte de testes roda automaticamente a cada push ou pull_request para a branch main.
* Execução em ambiente Linux (ubuntu-latest).
* Upload de artefatos (cypress/screenshots e cypress/videos) acionado condicionalmente apenas se houver falha de execução (if: failure()).

---

## 👤 Autor

Desenvolvido por Rodrigo Ferreira  
GitHub: https://github.com/rodrigoferreira-ti
