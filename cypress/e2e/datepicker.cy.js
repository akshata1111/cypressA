/// <reference types="cypress" />

describe("manage datepicker using JS", function(){

it("date-picker in JS", function() {
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

let date = new Date()
date.setDate(date.getDate()+500)

cy.log(date.getyear())
cy.log(date.getMonth())
cy.log(date.getDate())
cy.log(date.toLocalString)("default",{month:"long"})
let year = date.getFullyear
let month = date.toLocalString("default",{month:"long"})
let dayDate = date.getDate
cy.get("#datepicker").click()
function selctMonthYear(){

cy.get(".datepicker-switch").first().then(function(currentDate){
if(!currentDate.text().includes(year)){
    cy.get(".next").first().click()
    selctMonthYear();
}
cy.get(".datepicker-switch").first().then(function(currentDate){
    if(!currentDate.text().includes(Month)){
         cy.get(".next").first().click()
         selctMonthYear();
    }
})
})
}
function selectFutureDate(){
    cy.contains(dayDate).click()
    }

    selectMonthYear()
    selectFutureDate()
    })
    })
