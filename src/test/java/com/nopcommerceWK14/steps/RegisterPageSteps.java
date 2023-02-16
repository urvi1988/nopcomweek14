package com.nopcommerceWK14.steps;

import com.nopcommerceWK14.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class RegisterPageSteps {
    @Given("^User is on Homepage$")
    public void user_Is_On_Homepage() {
    }

    @When("^User click on RegisterLink$")
    public void user_Click_On_RegisterLink() {
        new RegisterPage().clickonRegisterLink();
    }

    @Then("^User should verify Register Text \"([^\"]*)\"$")
    public void user_should_verify_Register_Text(String Tex) {
         new RegisterPage().verifyRegistrationCompleteMsg();
    }


    @And("^User enter F\"([^\"]*)\"$")
    public void user_Enter_F(String Fname) {
        new RegisterPage().enterFirstname(Fname);
    }

    @And("^User enter L\"([^\"]*)\"$")
    public void user_Enter_L(String Lname) {
        new RegisterPage().enterLastname(Lname);
    }

    @And("^User should select D\"([^\"]*)\"$")
    public void user_Should_Select_D(String date) {
        new RegisterPage().DateofBirthDay(date);
    }

    @And("^User should select M\"([^\"]*)\"$")
    public void user_Should_Select_M(String month) {
        new RegisterPage().DateofBirthMonth(month);
    }

    @And("^User should select Y\"([^\"]*)\"$")
    public void user_Should_Select_Y(String year) {
        new RegisterPage().DateofBirthYear(year);
    }

    @And("^User enter E\"([^\"]*)\"$")
    public void user_Enter_E(String email) {
        new RegisterPage().enterEmailId(email);
    }

    @And("^User enter P\"([^\"]*)\"$")
    public void user_Enter_P(String pass) {
        new RegisterPage().enterPassword(pass);
    }

    @And("^User enter CP\"([^\"]*)\"$")
    public void user_Enter_CP(String CoPass) {
        new RegisterPage().enterConfirmPassword(CoPass);
    }

    @And("^User click on Register Button$")
    public void user_Click_On_Register_Button() {
        new RegisterPage().clickonRegisterButton();
    }

    @Then("^User should verify the \"([^\"]*)\"$")
    public void user_Should_Verify_The(String errormessage) {
       new RegisterPage().getvaliderrormess(errormessage);
    }

    @And("^User select Gender Female$")
    public void user_select_Gender_Female(){
        new RegisterPage().selectMaleFemaleradioButton();
    }

    @Then("^User should verify the Register Text \"([^\"]*)\"$")
    public void user_Should_Verify_The_Register_Text(String Reg ) {
        Assert.assertEquals(Reg, new RegisterPage().verifyRegisterText(Reg));
    }
}



