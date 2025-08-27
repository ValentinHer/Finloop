import { IsEmail, IsNotEmpty, Min } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({message: "El nombre es requerido"})
    firstname: string;

    @IsNotEmpty({message: "El apellido paterno es requerido"})
    lastNamePaternal: string;

    @IsNotEmpty({message: "El apellido materno es requerido"})
    lastNameMaternal: string;

    @IsNotEmpty({message: "La edad es requerida"})
    @Min(10, {message: "La edad mínima es de 10"})
    age: number;

    @IsNotEmpty({message: "El email es requerido"})
    @IsEmail()
    email: string;

    @IsNotEmpty({message: "El password es requerido"})
    password: string;
}
