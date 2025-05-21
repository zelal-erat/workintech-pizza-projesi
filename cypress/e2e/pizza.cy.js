describe('Pizza Order Form Tests', () => {
  
  it('should allow the user to type a name', () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('input[type="text"]')
      .type('Mehmet') // 'Mehmet' ismini giriyoruz
      .should('have.value', 'Mehmet');
  });

  it('Kullanıcı 4 ile 10 arasında ekstra malzeme seçebilir', () => {
    cy.visit('http://localhost:5173/');
    
    // 4 ekstra malzeme seçiyoruz
    cy.get('#Pepperoni').check(); 
    cy.get('#Mısır').check(); 
    cy.get('#Sarımsak').check(); 
    cy.get('#Ananas').check(); 
    
    // 4 malzeme seçildiğini doğrula
    cy.get('.extras-selection input[type="checkbox"]:checked').should('have.length', 4); 
    
    // 10 malzeme seçimini yapalım
    cy.get('#Sosis').check(); 
    cy.get('#Sucuk').check(); 
    cy.get('#Biber').check(); 
    cy.get('#Kabak').check(); 
    cy.get('#Domates').check(); 
    cy.get('#Salam').check(); 
    
    // 10 malzeme seçildiğini doğrula
    cy.get('.extras-selection input[type="checkbox"]:checked').should('have.length', 10); 
  });
  
  it('Form doğru şekilde doldurulup gönderilebilir', () => {
    cy.visit('http://localhost:5173/');
    
    // İsim girme
    cy.get('input[type="text"]').type('Mehmet'); 
    
    // Boyut seçimi (Radio butonu)
    cy.get('input[type="radio"]#Small').check(); // Boyut Small olarak seçiliyor
    
    // Hamur tipi seçimi
    cy.get('select').select('normal'); 
    
    // Ekstra malzemeleri seçiyoruz
    cy.get('#Pepperoni').check();
    cy.get('#Mısır').check();
    cy.get('#Sarımsak').check();
    cy.get('#Ananas').check();
    
    // Adet artırma
    cy.get('button[type="button"]').contains('+').click(); // Adet arttırılıyor
    
    // Siparişi gönderme
    cy.get('button[type="submit"]').click(); 
    
    // Confirmation sayfasına yönlendirildiğini doğrula
    cy.url().should('include', '/confirmation');
  });
});
