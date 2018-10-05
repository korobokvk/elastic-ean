<<<<<<< 32a84765eba77defd5540483fbb59a41fedce126
import { browser, element, by } from 'protractor';

export class NewAppPage {
=======
import { browser, element, by } from 'protractor/globals';

export class TestAsferroPage {
>>>>>>> server well
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
