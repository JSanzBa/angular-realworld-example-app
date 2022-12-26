import { onHomePage } from "../support/pageObjects/HomePage"
import { onSinglePostPage } from "../support/pageObjects/SinglePostPage"


describe('First test', () => {

  beforeEach('Login to the app', () => {
    
    cy.fixture('users.json').as('users').then((users) => {
      // then whe login with that data
      cy.loginToApp(users.user1, users.pass1)

    })

  })


  it.only('First Step', () => {// "Hola, mi número es: 123.45" (o cualquier otro 
    // Load users from fixrue users.json


    cy.fixture('articles.json').as('articles').then((articles) => {
      // cy.newArticle(articles.title+' '+Math.random(1,1000),articles.description+' '+Math.random(1,1000),articles.body+' '+Math.random(1,1000),articles.tags)
      cy.newArticle(articles.title, articles.description, articles.body, articles.tags)

    })
    cy.wait(3000)

    
    
    onSinglePostPage.insertPostComment('asdasdadads adsa dasd d')

    
  
  })

  it('Second step', () => {
    onHomePage.NavBarNewSettings().click()
    onHomePage.NavBarHome().click()

  })
})
