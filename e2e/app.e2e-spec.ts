import { TestAsferroPage } from './app.po';

describe('test-asferro App', function() {
  let page: TestAsferroPage;

  beforeEach(() => {
    page = new TestAsferroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
