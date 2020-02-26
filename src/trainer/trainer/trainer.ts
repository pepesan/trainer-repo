import { validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, MinLength, MaxLength } from 'class-validator';
export class Trainer {
  @MinLength(5, {
    message: 'El nombre es demadiado corto' })
  @MaxLength(50, {
    message: 'El nombre es demasiado largo' })
  name: string;
  @IsEmail({}, {
    message: 'Tiene que ser un email válido' })
  email: string;
  techSkills: string[];
  constructor(
    name: string = '',
    email: string = '',
    techSkills: string[] = []) {
    this.name = name;
    this.email = email;
    this.techSkills = techSkills;
  }
}
