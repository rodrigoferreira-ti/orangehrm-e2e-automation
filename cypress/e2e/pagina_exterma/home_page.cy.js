
// Validação dos links de forma modular caso algum link mude, eu altero apenas em um único local realzar a validação.
import link from '../../fixtures/home_links.js';

/**
 * Verificação dos links da home Page do site -> https://opensource-demo.orangehrmlive.com/
 */
describe('Acessando o site da OrangeHRM', () => {
  
  // Acessando a página.
  before(() => {cy.visit('/');});

  // Limpar a sessão depois de fazer os testes.
  after(() => {sessionStorage.clear();});

  it('Valida o link do Reset Password', () => {
    cy.get('.orangehrm-login-forgot').click();
    // Verifica se a URL mudou para a página de reset de senha
    cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
    // Volta para a página anterior para continuar os outros testes
    cy.go('back');    
  });

  //Verificando a Url dos créditos do site.
  it('Valida a url dos créditos do site', () => {
    cy.get('p[data-v-7b563373] a').should('have.attr', 'href', `${link.creditos}`).and('have.attr', 'target', `_blank`);
  });
  
  // Validando as urls e as ordens que elas estão sendo exibidas, caso ocorra alguma mudança de ordem o teste irá falhar.
  it('Valida a url dos links das redes sociais', () => {
    const urls = [link.linkedin, link.facebook, link.twitter, link.youtube];    
    cy.get('.orangehrm-login-footer-sm a').each((a, i) => {
      cy.expect(a.prop('href')).to.equal(urls[i]);
    });
  });

  // Validando se aparece a mensagem de erro ao realizar, login e senha errada.
  it('Verifica a resposta de mensagem de login inválido!', () => {
    cy.get('.oxd-form [name="username"]').type('teste1234');
    cy.get('.oxd-form [name="password"]').type('teste1234');
    cy.get('.orangehrm-login-button').click();
    cy.get('[data-v-87fcf455] .oxd-text').should('have.text','Invalid credentials');
  });

  // Validando se o login é efetuado com sucesso, se acessa o dashboard e depois desloga.
  it('Efetuar o login com sucesso e voltar a tela principal', () => {
    cy.get('.oxd-form [name="username"]').type('Admin');
    cy.get('.oxd-form [name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click();
    cy.url().should('include', '/web/index.php/dashboard/index');
    cy.get('.oxd-userdropdown-name').click();
    cy.wait(2000);
    cy.get('.oxd-dropdown-menu a[href="/web/index.php/auth/logout"]').click();
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  // it.only('Provocando um erro para testar o github actions', () => {
  //   cy.get('.oxd-form [name="username"]').type('teste1234');
  //   cy.get('.oxd-form [name="password"]').type('teste1234');
  //   cy.get('.orangehrm-login-button').click();
  //   cy.get('[data-v-87fcf455] .oxd-text').should('have.text','Mensagem errada proposital.');
  // });

});


