import { Test, TestingModule } from '@nestjs/testing';
import { AccountStatusService } from './account-status.service';

describe('AccountStatusService', () => {
  let service: AccountStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountStatusService],
    }).compile();

    service = module.get<AccountStatusService>(AccountStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
