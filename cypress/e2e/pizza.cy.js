describe('Pizza Order Form Tests', () => {
  it('should allow the user to type a name', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[type="text"]')
      .type('Mehmet') // 'Mehmet' ismini giriyoruz
      .should('have.value', 'Mehmet');
  })
  it('Kullanıcı 4 ile 10 arasında ekstra malzeme seçebilir', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[type="checkbox"]')
    cy.get('#pepperoni').check();
    cy.get('#misir').check(); 
    cy.get('#sarimsak').check(); 
    cy.get('#ananas').check(); 
    
    // 4 malzeme seçildiğini doğrula
    cy.get('.extras-selection input[type="checkbox"]:checked').should('have.length', 4); 
    
    // 10 malzeme seçimine kadar ilerleyelim
    cy.get('#sosis').check(); 
    cy.get('#sucuk').check(); 
    cy.get('#biber').check(); 
    cy.get('#kabak').check(); 
    cy.get('#domates').check(); 
    cy.get('#jalepone').check(); 
    
    // 10 malzeme seçildiğini doğrula
    cy.get('.extras-selection input[type="checkbox"]:checked').should('have.length', 10); 
  });
  it('Form doğru şekilde doldurulup gönderilebir', ()=>{
    cy.visit('http://localhost:5173/');
    cy.get('input[type="text"]').type('Mehmet') 
    cy.get('input[type="radio"]#small').check(); // Boyut
    cy.get('select').select('normal'); 
    cy.get('#pepperoni').check();
    cy.get('#misir').check(); 
    cy.get('#sarimsak').check(); 
    cy.get('#ananas').check(); 
    cy.get('button[type="button"]').contains('+').click(); 
    cy.get('button[type="submit"]').click(); 
  })
  })
