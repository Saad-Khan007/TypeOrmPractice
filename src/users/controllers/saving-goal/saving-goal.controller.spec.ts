import { Test, TestingModule } from '@nestjs/testing';
import { SavingGoalController } from './saving-goal.controller';

describe('SavingGoalController', () => {
  let controller: SavingGoalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavingGoalController],
    }).compile();

    controller = module.get<SavingGoalController>(SavingGoalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
