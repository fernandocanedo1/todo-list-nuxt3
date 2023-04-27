describe('Testes de componente', () => {
  it('Verifica se os componentes são renderizados corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.wait(1000)
    .contains("Adicione aqui") 
    .click(); 
    
    cy.wait(1000)
    cy.get("input[name='Name']").type("  Tarefa 1");
    cy.get('textarea').type('Minha descrição de tarefa');
    cy.get('button:contains("Adicionar Tarefa")').click();
    cy.visit('http://localhost:3000')
    
    cy.get("input[name='checked']").click();
    cy.get("[name='linkTask']").click();
    
    cy.wait(1000)
    cy.contains('Tarefa 1');
    cy.contains('Minha descrição de tarefa');
    cy.contains('Concluída');
    
    cy.visit('http://localhost:3000');
    
    cy.get('button[name="delete"]').click();


  })
})





