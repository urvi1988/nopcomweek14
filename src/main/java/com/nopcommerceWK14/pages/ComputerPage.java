package com.nopcommerceWK14.pages;

import com.nopcommerceWK14.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());
    public ComputerPage(){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers ')]")
    WebElement computerTab;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li[1]")
    WebElement ComputersText;
    @CacheLookup
    @FindBy(xpath =  "//div[@class='page-body']/div[1]/div[1]/div[1]/div[1]/h2/a")  //(//div[@class='item-grid']/div[1]")
    WebElement Desktopslink;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='sublist']/li[1]/a")
    WebElement DesktopsText;
    @CacheLookup
    @FindBy(linkText = ("Build your own computer"))
    WebElement BuildYourOwnComputerTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement BuildYourOwnComputerText;



    public void clickOncomputer() {
        clickOnElement(computerTab);
        log.info("click on computer Tab" + computerTab.toString());
    }
    public String getComputersText(){
        return getTextFromElement(ComputersText);
    }
    public void clickonDesktopslink(){
        clickOnElement(Desktopslink);
        log.info("Click on Desktopslink"+ Desktopslink.toString());
    }
    public String getDesktopsText(){
        return getTextFromElement(DesktopsText);
    }
    public String BuildYourOwnComputerText() {
        log.info("getting text from"+ BuildYourOwnComputerText.toString());
        return getTextFromElement(BuildYourOwnComputerText);

    }
    public void clickonBuildyourowncomputer() {
        clickOnElement(BuildYourOwnComputerTab);
        log.info("Click on Build Your Own Computer"+ BuildYourOwnComputerTab.toString());
    }


}


