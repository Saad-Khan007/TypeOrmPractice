import { Test, TestingModule } from '@nestjs/testing';
import { TransactionTypeController } from './transaction-type.controller';

describe('TransactionTypeController', () => {
  let controller: TransactionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionTypeController],
    }).compile();

    controller = module.get<TransactionTypeController>(TransactionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
