export class FormArticlePage {

    articleTitle() {
        return cy.get('[formcontrolname="title"]')
    }
    articleDescription() {
        return cy.get('[formcontrolname="description"]')
    }
    articleBody() {
        return cy.get('[formcontrolname="body"]')
    }
    artilceTags() {
        return cy.get('[placeholder="Enter tags"]')
    }
    articleFormButton() {
        return cy.get('form button')
    }

}

export const onFormArticlePage = new FormArticlePage();