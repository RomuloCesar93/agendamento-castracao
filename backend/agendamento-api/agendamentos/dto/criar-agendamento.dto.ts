import { IsNotEmpty, IsString, IsNumber, IsInt, Min } from 'class-validator';

export class CriarAgendamentoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  idade: number;

  @IsString()
  @IsNotEmpty()
  especie: string;

  @IsString()
  @IsNotEmpty()
  tutor: string;
}
