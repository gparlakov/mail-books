import { MailedBooksModule } from './mailed-books.module';

describe('MailedBooksModule', () => {
  let mailedBooksModule: MailedBooksModule;

  beforeEach(() => {
    mailedBooksModule = new MailedBooksModule();
  });

  it('should create an instance', () => {
    expect(mailedBooksModule).toBeTruthy();
  });
});
