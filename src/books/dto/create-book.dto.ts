import { IsNumber, IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsDefined()
  price: number;

  @IsString()
  description: string;
}
