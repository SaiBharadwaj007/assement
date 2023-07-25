describe('Stampin up Assesment', function(){
    it('Shopping cart checkout verification', function(){

        cy.visit('https://www.stampinup.com/')

        cy.wait(4000)
      //  let searchTerm = 'SDET';


        cy.get('[data-testid="search-placeholder"]'). type('SDET' + '{enter}')
       // console.log('-------------------');

        
cy.get('#app > div > main > div > div:nth-child(1) > header').should('have.text','\n        Sorry,\n       \n        There is no search result for:\n       SDET')

   //   cy.contains('\n SORRY,\n \n').should('be.visible')

     

      //  cy.get('.py-12').invoke('text').then((text1) =>  {

      //      expect(text1).to.eq('SORRY\n, There is no search result for: \n"' + searchTerm + '"')

      //  })
        
        //  cy.wait(4000)

      //  cy.contains('SORRY,').should('be.visible')
     //  cy.contains('SORRY,\nThere is no search result for:\n SDET').should('be.visible')

    // cy.get('.py-12').should('be.visible').and('SORRY, There is no search result for: "SDET"')
     //  cy.wait(4000)

         cy.wait(4000);

  // cy.get('.pb-md-3').should('be.visible').and('contain','SORRY,');
     // cy.contains('There is no search result for:').should('be.visible')
     // cy.contains('"SDET"').should('be.visible')

        cy.get('[data-testid="search-placeholder"]'). type('TIMELESS TILES CLING STAMP SET{enter}')


        cy.get(':nth-child(1) > .add-processing > [data-testid="availableProduct"] > :nth-child(2) > .col-sm-12 > .row > :nth-child(1) > div > [data-testid="quick-shop-button"] > .v-btn__content').click()


          cy.get('[data-testid="item-add-to-cart"] > .v-btn__content').click()

       cy.wait(4000)

       cy.get('[data-testid="VAvatar"] > span').click()        

       cy.get('[data-testid="btn-order-submit"] > .v-btn__content').click()


       cy.get('#authentication > div:nth-child(2) > div.col.col-12 > div > div > div > h3').should('have.text','\n        Continue as a guest\n      ')

     //  cy.get('[data-testid="authentication"] > :nth-child(2) > .col-12').should('be.visible').and('contain','CONTINUE AS A GUEST')

     //  cy.on('window:confirm', (text) => {
     //   expect(text).to.contains('CONTINUE ');
    
     //cy.get('').iframe().within(() => {

         // cy.window().then((win) => {
 
  //       cy.stub(win,'prompt').as('windowPrompt')
 
//});


     //cy.get('[data-testid="btn-order-submit"] > .v-btn__content').click()

   //  cy.get('@windowPrompt').should('have.been.called')



   // cy.get('[data-testid="authentication"] > :nth-child(2) > .col-12').should('be.visible').and('CONTINUE AS A GUEST')

     // })
    
    });
        
    })






