export class HomePage {
    NavBarHome(){
        return cy.get('.nav-link').contains('Home')
    }
    NavBarNewArticle() {
        return cy.get('[routerlink="/editor"]')
    }
    NavBarNewSettings() {
        return cy.get('[routerlink="/settings"]')
    }




}

export const onHomePage = new HomePage();
