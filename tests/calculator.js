let hp = require('../pages/homepage');

describe('Demo Calculator Test', function(){

    it('Addition Test', function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        hp.get('https://juliemr.github.io/protractor-demo/');

       //element(by.model('first')).sendKeys('5');
        hp.enterfirstNumber('10');

        //element(by.model('second')).sendKeys('10');
        hp.entersecondNumber('15');

        //element(by.css('[ng-click="doAddition()"]')).click();
        hp.clickGo();
        
        
        //let result=element(by.cssContainingText('.ng-binding','15'));
        //expect(result.getText()).toEqual('15');
        
        hp.verifyResult('25');

        browser.sleep(2000);


    });
    it('Subtraction Test', function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        hp.get('https://juliemr.github.io/protractor-demo/');

       //element(by.model('first')).sendKeys('5');
        hp.enterfirstNumber('10');

        //element(by.model('second')).sendKeys('10');
        hp.entersecondNumber('15');

        //element(by.css('[ng-click="doAddition()"]')).click();
        hp.clickGo1();
        
        
        //let result=element(by.cssContainingText('.ng-binding','15'));
        //expect(result.getText()).toEqual('15');
        
        hp.verifyResults('25');

        browser.sleep(2000);


    });
});