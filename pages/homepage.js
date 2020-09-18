let homepage = function(){
//locators or Objects
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    //actions

    this.get = function(url){
        browser.get(url);
    };

    this.enterfirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
    };

    this.entersecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };
    
    this.verifyResult = function(result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    };
    
};

//Exposing the homepage function to  all external files
module.exports = new homepage