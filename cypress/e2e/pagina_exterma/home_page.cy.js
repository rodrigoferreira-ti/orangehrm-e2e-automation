/**
 * Valida diversos elementos da home page do site -> https://opensource-demo.orangehrmlive.com/
 */



import home_links from '../../fixtures/home_links'; // Verificação dos links da home Page do site -> https://opensource-demo.orangehrmlive.com/
import accounts from '../../fixtures/accounts'; // Acesso as contas de login para realizar os testes de login e senha.
import HOME_ELEMENTS from '../../support/elements/home_elements'; // Elementos da home page do site -> https://opensource-demo.orangehrmlive.com/

describe('Acessando o site da OrangeHRM', () => {  

  console.log(accounts);

  before(() => {cy.visit('/');});  // Acessando a página.
  
  after(() => { // Limpar a sessão depois de fazer os testes.
    sessionStorage.clear();
  });
  
  it('Valida o link do Reset Password', () => { // Validando se o link de reset de senha está funcionando corretamente.
    cy.get(HOME_ELEMENTS.FORGOT_PASSWORD_LINK).click();    
    cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode'); // Verifica se a URL mudou para a página de reset de senha    
    cy.go('back'); // Volta para a página anterior para continuar os outros testes
  });
  
  it('Valida a url dos créditos do site', () => { //Verificando a Url dos créditos do site.
    cy.get(HOME_ELEMENTS.CREDITS_LINK).should('have.attr', 'href', `${home_links.creditos}`).and('have.attr', 'target', `_blank`);
  });
    
  it('Valida a url dos links das redes sociais', () => { // Validando as urls e as ordens que elas estão sendo exibidas, caso ocorra alguma mudança de ordem o teste irá falhar.
    const urls = [home_links.linkedin, home_links.facebook, home_links.twitter, home_links.youtube];    
    cy.get(HOME_ELEMENTS.SOCIAL_MEDIA_LINKS).each((a, i) => {
      cy.expect(a.prop('href')).to.equal(urls[i]);
    });
  });
  
  it('Verifica a resposta de mensagem de login inválido!', () => { // Validando se aparece a mensagem de erro ao realizar, login e senha errada.
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.usernameInput).type(accounts.invalid.username);
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.passwordInput).type(accounts.invalid.password);
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.submitButton).click();
    cy.get(HOME_ELEMENTS.ERROR_MESSAGE).should('have.text','Invalid credentials');
  });
  
  it('Efetuar o login com sucesso e voltar a tela principal', () => { // Validando se o login é efetuado com sucesso, se acessa o dashboard e depois desloga.
    cy.login(accounts.default.username, accounts.default.password);
    cy.url().should('include', '/web/index.php/dashboard/index');
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.userDropdown).click();
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.logoutLink).should('be.visible').click();
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  // it.only('Provocando um erro para testar o github actions', () => {
  //   cy.get('.oxd-form [name="username"]').type('teste1234');
  //   cy.get('.oxd-form [name="password"]').type('teste1234');
  //   cy.get('.orangehrm-login-button').click();
  //   cy.get('[data-v-87fcf455] .oxd-text').should('have.text','Mensagem errada proposital.');
  // });

});


