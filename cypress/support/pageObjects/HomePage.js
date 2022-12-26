 export class  HomePage{

     NavBarNewArticle(){
        return cy.get('[routerlink="/editor"]')
    }



}

export const onHomePage = new HomePage();
