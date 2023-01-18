import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ){}
  populateDB(){

    this.CarsService.fillCarsWithSeedData( CARS_SEED);
    this.BrandsService.fillCarsWithSeedData( BRAND_SEED);

    return 'Seed executed';
  }

}
