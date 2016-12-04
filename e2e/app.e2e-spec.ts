import { EventTablePage } from './app.po';

describe('event-table App', function() {
  let page: EventTablePage;

  beforeEach(() => {
    page = new EventTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
