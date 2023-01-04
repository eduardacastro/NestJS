import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:       string; 

    @IsString({ message: `The brand must be a string`})
    readonly brand?:    string;

    @IsString({ message: `The model must be a string`})
    readonly model?:    string;
}