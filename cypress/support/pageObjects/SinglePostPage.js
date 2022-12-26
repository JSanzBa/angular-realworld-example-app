export class SinglePostPage {
    getCommentTextArea() {

        return cy.get('textarea.form-control')
    }
    getButtonSubmitComment() {

        return cy.get('div.card-footer button')
    }

    insertPostComment(txt) {
        this.getCommentTextArea().click().type(txt)
        this.getButtonSubmitComment().click()
    }

}

export const onSinglePostPage = new SinglePostPage();