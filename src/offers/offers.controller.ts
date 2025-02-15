import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  create(@Req() req, @Body() createOfferDto: CreateOfferDto) {
    const userId = req.user.id;
    return this.offersService.create(createOfferDto, Number(userId));
  }

  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.findOne(Number(id));
  }
}
