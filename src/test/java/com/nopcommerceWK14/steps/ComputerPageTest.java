package com.nopcommerceWK14.steps;

import com.nopcommerceWK14.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ComputerPageTest {
    @When("^User to click on ComputerTab$")
    public void userToClickOnComputerTab() {
        new ComputerPage().clickOncomputer();
    }
    @Then("^User should verify the text \"([^\"]*)\"$")
    public void userShouldVerifyTheText(String Text) {
        new ComputerPage().getComputersText();

    }
    @And("^User to click on Desktoplink$")
    public void userToClickOnDesktoplink() {
        new ComputerPage().clickonDesktopslink();
    }

    @Then("^User should verify the DesktopText \"([^\"]*)\"$")
    public void userShouldVerifyTheDesktopText(String desk)  {
        new ComputerPage().getDesktopsText();
    }

    @And("^User to click on Build your own computer tab$")
    public void userToClickOnBuildYourOwnComputerTab() {
        new ComputerPage().clickonBuildyourowncomputer();
    }

    @Then("^I want to build my own computer$")
    public void iWantToBuildMyOwnComputer() {
        
    }
}
