$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page",
  "description": "",
  "id": "computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6970260000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User Should Navigate to ComputerPage Successfully.",
  "description": "",
  "id": "computer-page;user-should-navigate-to-computerpage-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User to click on ComputerTab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify the text \"Computer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 73182101,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnComputerTab()"
});
formatter.result({
  "duration": 888779800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 29
    }
  ],
  "location": "ComputerPageTest.userShouldVerifyTheText(String)"
});
formatter.result({
  "duration": 31110300,
  "status": "passed"
});
formatter.after({
  "duration": 153500,
  "status": "passed"
});
formatter.before({
  "duration": 2403551200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User Should Navigate to DesktopsPage Successfully.",
  "description": "",
  "id": "computer-page;user-should-navigate-to-desktopspage-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User to click on ComputerTab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User to click on Desktoplink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should verify the DesktopText \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 26201,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnComputerTab()"
});
formatter.result({
  "duration": 947470000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnDesktoplink()"
});
formatter.result({
  "duration": 417762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 36
    }
  ],
  "location": "ComputerPageTest.userShouldVerifyTheDesktopText(String)"
});
formatter.result({
  "duration": 44827301,
  "status": "passed"
});
formatter.after({
  "duration": 19599,
  "status": "passed"
});
formatter.before({
  "duration": 2213201700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Should BuildOwnComputer",
  "description": "",
  "id": "computer-page;user-should-buildowncomputer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User to click on ComputerTab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User to click on Desktoplink",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User to click on Build your own computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to build my own computer",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 22001,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnComputerTab()"
});
formatter.result({
  "duration": 873416700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnDesktoplink()"
});
formatter.result({
  "duration": 392975799,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userToClickOnBuildYourOwnComputerTab()"
});
formatter.result({
  "duration": 868772899,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iWantToBuildMyOwnComputer()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage",
  "description": "",
  "id": "loginpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2423600600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to Loginpage successFully.",
  "description": "",
  "id": "loginpage;user-should-navigate-to-loginpage-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify welcome message\"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 423654300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 35
    }
  ],
  "location": "LoginPageSteps.userShouldVerifyWelcomeMessage(String)"
});
formatter.result({
  "duration": 39356399,
  "status": "passed"
});
formatter.after({
  "duration": 28800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should get The ErrorMessage With InValidCredentials.",
  "description": "",
  "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter E\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter P\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should verify the \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "error message"
      ],
      "line": 17,
      "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;1"
    },
    {
      "cells": [
        "orange@gmail.com",
        "orange123@",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 18,
      "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;2"
    },
    {
      "cells": [
        "orange1@gmail.com",
        "orange123",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 19,
      "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;3"
    },
    {
      "cells": [
        "orange2@gmail.com",
        "orange123",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 20,
      "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2473452501,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should get The ErrorMessage With InValidCredentials.",
  "description": "",
  "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter E\"orange@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter P\"orange123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should verify the \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 547671701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 128786900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 102627199,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 418732800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 20067736700,
  "status": "passed"
});
formatter.after({
  "duration": 47500,
  "status": "passed"
});
formatter.before({
  "duration": 1890391200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should get The ErrorMessage With InValidCredentials.",
  "description": "",
  "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter E\"orange1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter P\"orange123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should verify the \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 37799,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 863471200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange1@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 115111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange123",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 93601999,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 396557399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 20031277200,
  "status": "passed"
});
formatter.after({
  "duration": 33001,
  "status": "passed"
});
formatter.before({
  "duration": 1846616800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should get The ErrorMessage With InValidCredentials.",
  "description": "",
  "id": "loginpage;user-should-get-the-errormessage-with-invalidcredentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter E\"orange2@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter P\"orange123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should verify the \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 882788199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange2@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 86097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange123",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 69376499,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 372584500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 20008749299,
  "status": "passed"
});
formatter.after({
  "duration": 19400,
  "status": "passed"
});
formatter.before({
  "duration": 1798070700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User Should Login SuccessFully With Valid Credentials.",
  "description": "",
  "id": "loginpage;user-should-login-successfully-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter E\"sam@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter P\"sam123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should verify the Log out link display\"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 18599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 817984199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 70638301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam123",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 63744599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 291983099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 44
    }
  ],
  "location": "LoginPageSteps.userShouldVerifyTheLogOutLinkDisplay(String)"
});
formatter.result({
  "duration": 20057661100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e02f5cbe38d6f15b18755b0ea696f417, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\urvip\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54563}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54563/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e02f5cbe38d6f15b18755b0ea696f417\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerceWK14.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.nopcommerceWK14.pages.LoginPage.verifylogoutlinkdisplay(LoginPage.java:63)\r\n\tat com.nopcommerceWK14.steps.LoginPageSteps.userShouldVerifyTheLogOutLinkDisplay(LoginPageSteps.java:27)\r\n\tat ✽.Then User should verify the Log out link display\"Log out\"(Login.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 193000800,
  "status": "passed"
});
formatter.before({
  "duration": 1799193800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify User should LogOut SuccessFully.",
  "description": "",
  "id": "loginpage;verify-user-should-logout-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User click on LoginLink",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enter E\"sam@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enter P\"sam123\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User to verify Login link display \"Log in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 22099,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 838696001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 75103799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam123",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 59254599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 319945500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 35
    }
  ],
  "location": "LoginPageSteps.userToVerifyLoginLinkDisplay(String)"
});
formatter.result({
  "duration": 23878301,
  "status": "passed"
});
formatter.after({
  "duration": 13400,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterPage",
  "description": "",
  "id": "registerpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1877126599,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As user i should navigate to RegisterPage sucessfully.",
  "description": "",
  "id": "registerpage;as-user-i-should-navigate-to-registerpage-sucessfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify the Register Text \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 23299,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 387844100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 38
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The_Register_Text(String)"
});
formatter.result({
  "duration": 32970300,
  "status": "passed"
});
formatter.after({
  "duration": 18499,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"\u003cname1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"\u003cDay\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"\u003cMonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;",
  "rows": [
    {
      "cells": [
        "name",
        "name1",
        "Day",
        "Month",
        "Year",
        "Email",
        "Password",
        "ConfirmPassword",
        "error message"
      ],
      "line": 25,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;1"
    },
    {
      "cells": [
        "",
        "banana",
        "1",
        "December",
        "1920",
        "apple.banana@gmail.com",
        "apple123@",
        "apple123@",
        "First name is required."
      ],
      "line": 26,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;2"
    },
    {
      "cells": [
        "apple",
        "",
        "1",
        "December",
        "1920",
        "apple.banana@gmail.com",
        "apple123@",
        "apple123@",
        "Last name is required."
      ],
      "line": 27,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;3"
    },
    {
      "cells": [
        "apple",
        "banana",
        "1",
        "December",
        "1920",
        "",
        "apple123@",
        "apple123@",
        "Email is required."
      ],
      "line": 28,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;4"
    },
    {
      "cells": [
        "apple",
        "banana",
        "1",
        "December",
        "1920",
        "apple.banana@gmail.com",
        "",
        "apple123@",
        "Password is required."
      ],
      "line": 29,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;5"
    },
    {
      "cells": [
        "apple",
        "banana",
        "1",
        "December",
        "1920",
        "apple.banana@gmail.com",
        "apple123@",
        "",
        "Password is required."
      ],
      "line": 30,
      "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1914606001,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"banana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"December\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"1920\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"apple.banana@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"apple123@\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"apple123@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 830050199,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 56514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 52725499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 58061699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 57719000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 53379500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 58629600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple.banana@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 95236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 70165801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 56727301,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 46428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 21640499,
  "status": "passed"
});
formatter.after({
  "duration": 21301,
  "status": "passed"
});
formatter.before({
  "duration": 1784279000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"apple\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"December\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"1920\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"apple.banana@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"apple123@\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"apple123@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Last name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 368606700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 50292901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 65448200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 53822501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 48451799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 49053600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 50418600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple.banana@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 98388600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 73569200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 64275100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 69024200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 24296101,
  "status": "passed"
});
formatter.after({
  "duration": 22600,
  "status": "passed"
});
formatter.before({
  "duration": 2379991700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"apple\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"banana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"December\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"1920\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"apple123@\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"apple123@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Email is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 446690901,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 86519399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 107037100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 127721900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 96560700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 100243401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 93480600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 108882199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 116621800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 121724500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 88161700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 39600700,
  "status": "passed"
});
formatter.after({
  "duration": 32900,
  "status": "passed"
});
formatter.before({
  "duration": 2627658100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"apple\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"banana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"December\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"1920\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"apple.banana@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"apple123@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 1012272399,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 95537499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 103131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 110663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 79074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 82132901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 93303301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple.banana@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 136088300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 76891000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 95708600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 67805800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 34208500,
  "status": "passed"
});
formatter.after({
  "duration": 27300,
  "status": "passed"
});
formatter.before({
  "duration": 2614706401,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "As User i should verify that Firstname Lastname Email Password and Confirmpassword Fields are Mendatory.",
  "description": "",
  "id": "registerpage;as-user-i-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mendatory.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter F\"apple\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter L\"banana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select D\"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select M\"December\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select Y\"1920\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter E\"apple.banana@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter P\"apple123@\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter CP\"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 23601,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 546830900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 100281900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 99485600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 110176799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 77578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 79116600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 78067100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple.banana@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 133670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 104671500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 77380200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 80036200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "RegisterPageSteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 34478200,
  "status": "passed"
});
formatter.after({
  "duration": 24599,
  "status": "passed"
});
formatter.before({
  "duration": 2156714500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "As a user i should create an Account sucessfully.",
  "description": "",
  "id": "registerpage;as-a-user-i-should-create-an-account-sucessfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User click on RegisterLink",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User select Gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter F\"apple\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter L\"banana\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User should select D\"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should select M\"December\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should select Y\"1920\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter E\"star123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter P\"apple123@\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enter CP\"apple123@\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should verify Register Text \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageSteps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 419600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_RegisterLink()"
});
formatter.result({
  "duration": 565928700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_select_Gender_Female()"
});
formatter.result({
  "duration": 105304500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_F(String)"
});
formatter.result({
  "duration": 136137099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_L(String)"
});
formatter.result({
  "duration": 125730800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_D(String)"
});
formatter.result({
  "duration": 86522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_M(String)"
});
formatter.result({
  "duration": 88858900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1920",
      "offset": 21
    }
  ],
  "location": "RegisterPageSteps.user_Should_Select_Y(String)"
});
formatter.result({
  "duration": 80148900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "star123@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_E(String)"
});
formatter.result({
  "duration": 131421200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 13
    }
  ],
  "location": "RegisterPageSteps.user_Enter_P(String)"
});
formatter.result({
  "duration": 132408099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple123@",
      "offset": 14
    }
  ],
  "location": "RegisterPageSteps.user_Enter_CP(String)"
});
formatter.result({
  "duration": 114726500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 610904000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 34
    }
  ],
  "location": "RegisterPageSteps.user_should_verify_Register_Text(String)"
});
formatter.result({
  "duration": 45371599,
  "status": "passed"
});
formatter.after({
  "duration": 370400,
  "status": "passed"
});
});