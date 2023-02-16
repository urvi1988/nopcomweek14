package com.nopcommerceWK14.steps;

import com.nopcommerceWK14.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps {
    @When("^User click on LoginLink$")
    public void userClickOnLoginLink() {
        new LoginPage().clickonLoginlink();
    }

    @Then("^User should verify welcome message\"([^\"]*)\"$")
    public void userShouldVerifyWelcomeMessage(String message ){
        new LoginPage().getWelcomeText();
    }

    @And("^User click on Login Button$")
    public void userClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User should verify the Log out link display\"([^\"]*)\"$")
    public void userShouldVerifyTheLogOutLinkDisplay(String verifylogout) {
        new LoginPage().verifylogoutlinkdisplay(verifylogout);
    }

    @Then("^User to verify Login link display \"([^\"]*)\"$")
    public void userToVerifyLoginLinkDisplay(String loginverify)  {
        new LoginPage().verifyloginlinkdisplay(loginverify);
    }
}
