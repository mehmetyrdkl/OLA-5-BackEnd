import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';

describe('HotelsController', () => {
  it('should be defined', () => {
    const hotelsService = {
      findAll: jest.fn(),
    } as unknown as HotelsService;
    const controller = new HotelsController(hotelsService);

    expect(controller).toBeDefined();
  });
});
