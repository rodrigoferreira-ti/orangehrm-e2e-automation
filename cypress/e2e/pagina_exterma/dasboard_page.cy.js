
/**
 * Verificação dos links da home Page do site -> https://opensource-demo.orangehrmlive.com/
 */
describe('Acessando o site da OrangeHRM', () => {
  
  // Acessando a página.
  before(() => {cy.visit('/');});

  // Limpar a sessão depois de fazer os testes.
  after(() => {sessionStorage.clear();});
  
  
  
})