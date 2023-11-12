import { Controller, Post, Body, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);

    return this.catsService.create(createCatDto);
  }
}
