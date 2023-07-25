import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('I navigate to Stampin website',()=>{

cy.visit('https://www.stampinup.com/')

})