///<reference types="cypress" />
import page from "../pages/AutoExe"
import data from "../../fixtures/PayloadAutoE"

describe("Verify login functionality",function(){
    let title = undefined
    it("Create new User",function(){

        let pg = new page
        pg.visiturl()
        pg.btnclick(pg.selector.loginsignup)
        pg.newUserSignup(data)
        pg.btnclick(pg.selector.signupBtn)


        //new user create 
        if(data.title =="Mrs"){
            title = pg.selector.titleMrs

        }
        else{
            title = pg.selector.titleMr
        }

       pg.newUserCreate(title,data)
       pg.validatetext(pg.selector.accCreatedtext,"Account Created")
       pg.btnclick(pg.selector.loginsignup)
       pg.btnclick(pg.selector.logout)
       pg.loginUser(data)
       pg.validatetext(pg.selector.LoginTextVal,data.username)
    })
})


