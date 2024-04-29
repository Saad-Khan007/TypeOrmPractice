import { Test, TestingModule } from '@nestjs/testing';
import { AccountStatusController } from './account-status.controller';

describe('AccountStatusController', () => {
  let controller: AccountStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountStatusController],
    }).compile();

    controller = module.get<AccountStatusController>(AccountStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
