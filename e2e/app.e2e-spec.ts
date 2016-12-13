import { PmreportPage } from './app.po';

describe('pmreport App', function() {
  let page: PmreportPage;

  beforeEach(() => {
    page = new PmreportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
