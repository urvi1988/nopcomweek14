package com.nopcommerceWK14.pages;

import com.nopcommerceWK14.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement RegisterLink;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement RegisterText;
    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']/span[2]/input")
    WebElement Femaleradiobutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement Firstnamefield;
    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement Lastnamefield;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement DateofbirthDay;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement DateofbirthMonth;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement DateofbirthYear;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordfield;
    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPasswordfield;
    @CacheLookup
    @FindBy(xpath = "//div[@class='page registration-page']/div[2]/form/div[5]/button")
    WebElement RegisterButton;
    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement Firstnameisrequired;
    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement Lastnameisrequired;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement Emailisrequired;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement Passwordisrequired;
    @CacheLookup
    @FindBy(id = "ConfirmPassword-error")
    WebElement ConfirmPasswordrequired;
    @CacheLookup
    @FindBy(xpath = "//div[text()='Your registration completed']")
    WebElement registrationCompletedMessage;
    @CacheLookup
    @FindBy(xpath = "//a[@class='button-1 register-continue-button']")
    WebElement ContinueTab;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fielderrrormess;

    public String getvaliderrormess(String fields) {
        String validationmess = null;
        for (WebElement error : fielderrrormess) {
            if (error.getText().equalsIgnoreCase(fields)) {
                break;

            }
        }
        return validationmess;
    }

    public String verifyRegisterText(String Text) {
        return getTextFromElement(RegisterText);
    }

    public void selectMaleFemaleradioButton() {
        clickOnElement(Femaleradiobutton);
        log.info("Click on femaleButton" + Femaleradiobutton.toString());
    }

    public void enterFirstname(String Firstname) {
        sendTextToElement(Firstnamefield, Firstname);
    }

    public void enterLastname(String Lastname) {
        sendTextToElement(Lastnamefield, Lastname);
    }

    public void DateofBirthDay(String Day) {
        sendTextToElement(DateofbirthDay, Day);
        log.info("select your day of birth" + DateofbirthDay.toString());
    }

    public void DateofBirthMonth(String Month) {
        sendTextToElement(DateofbirthMonth, Month);
        log.info("select your month of birth" + DateofbirthMonth.toString());
    }

    public void DateofBirthYear(String Year) {
        sendTextToElement(DateofbirthYear, Year);
        log.info("select your year of birth" + DateofbirthYear.toString());
    }

    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordfield, password);
    }

    public void enterConfirmPassword(String Password) {
        sendTextToElement(confirmPasswordfield, Password);
    }

    public void clickonRegisterButton() {
        log.info("click on register button" + RegisterButton.toString());
        clickOnElement(RegisterButton);
    }

    public void clickonRegisterLink() {
        clickOnElement(RegisterLink);
    }

    public String verifyFirstnameisrequiredText() {
        log.info("Verify first name required" + Firstnameisrequired.toString());
        return getTextFromElement(Firstnameisrequired);
    }

    public String verifyLastnameisrequiredText() {
        log.info("Verify last name required" + Lastnameisrequired.toString());
        return getTextFromElement(Lastnameisrequired);
    }

    public String verifyEmailisrequiredText() {
        return getTextFromElement(Emailisrequired);
    }

    public String verifyPasswordisrequiredText() {
        return getTextFromElement(Passwordisrequired);
    }

    public String verifyConfirmPasswordrequired() {
        return getTextFromElement(ConfirmPasswordrequired);
    }

    public String verifyRegistrationCompleteMsg() {
        log.info("Verify Registration Complete Text" + registrationCompletedMessage.toString());
        return getTextFromElement(registrationCompletedMessage);
    }

    public void clickonCountinueTab() {
        log.info("click on countinuetab" + ContinueTab.toString());
        clickOnElement(ContinueTab);
    }
}




