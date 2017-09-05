import { FlorantusPage } from './app.po';

describe('florantus App', () => {
  let page: FlorantusPage;

  beforeEach(() => {
    page = new FlorantusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
