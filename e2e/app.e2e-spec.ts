<<<<<<< HEAD
=======
<<<<<<< 32a84765eba77defd5540483fbb59a41fedce126
import { NewAppPage } from './app.po';

describe('new-app App', () => {
  let page: NewAppPage;

  beforeEach(() => {
    page = new NewAppPage();
=======
>>>>>>> final-branch
import { TestAsferroPage } from './app.po';

describe('test-asferro App', function() {
  let page: TestAsferroPage;

  beforeEach(() => {
    page = new TestAsferroPage();
<<<<<<< HEAD
=======
>>>>>>> server well
>>>>>>> final-branch
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
