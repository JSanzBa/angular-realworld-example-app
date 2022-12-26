

describe('First test', () => {
  beforeEach('Login to the app', () => {
    // Load users from fixrue users.json
    cy.fixture('users.json').as('users').then((users) => {
      // then whe login with that data
      cy.loginToApp(users.user1, users.pass1)

    })


  })
  it('First Test', () => {
    cy.fixture('articles.json').as('articles').then((articles) => {
      cy.newArticle(articles.title+' '+Math.random(1,1000),articles.description+' '+Math.random(1,1000),articles.body+' '+Math.random(1,1000),articles.tags)

    })


  })
})