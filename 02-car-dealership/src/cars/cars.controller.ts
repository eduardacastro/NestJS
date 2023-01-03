import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4',})) id: string) {   
        console.log({id});

        return this.carsService.findOneById(id);
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar( @Body() createCarDto: CreateCarDto){
        return createCarDto;
    }

    @Patch('/:id')
    updateCar( 
        @Param('id') id: string,
        @Body() body: any)
    {
        return body;
    }

    @Delete()
    deleteCar( @Param('id') id: string){
        return{
            method: 'delete',
            id
        }
    }
}

