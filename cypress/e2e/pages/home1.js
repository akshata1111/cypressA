class homePage{
    selectors = {
        firstName : '[name="first_name"]',
        lastName : '[name="last_name"]'
    }
    contactUs(){
        cy.get(this.selectors.firstName).type('Akshata')
        cy.get(this.selectors.lastName).type('SS')
    }
}

export default homePage