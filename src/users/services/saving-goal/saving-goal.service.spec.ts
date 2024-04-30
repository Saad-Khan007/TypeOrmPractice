import { Test, TestingModule } from '@nestjs/testing';
import { SavingGoalService } from './saving-goal.service';

describe('SavingGoalService', () => {
  let service: SavingGoalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavingGoalService],
    }).compile();

    service = module.get<SavingGoalService>(SavingGoalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
