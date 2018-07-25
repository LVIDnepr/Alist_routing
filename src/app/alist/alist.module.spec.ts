import { AlistModule } from './alist.module';

describe('AlistModule', () => {
  let alistModule: AlistModule;

  beforeEach(() => {
    alistModule = new AlistModule();
  });

  it('should create an instance', () => {
    expect(alistModule).toBeTruthy();
  });
});
