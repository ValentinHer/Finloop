import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, Min, validateSync } from "class-validator";

enum Enviroment {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    TEST = "test"
}

class EnviromentVariables {
    @IsString()
    DB_HOST: string;

    @IsNumber()
    @Min(0)
    DB_PORT: number;

    @IsString()
    DB_USER: string;

    @IsString()
    DB_PASSWORD: string;

    @IsString()
    DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
    const validateConfig = plainToInstance(
        EnviromentVariables,
        config,
        {enableImplicitConversion: true},
    )
    const errors = validateSync(validateConfig, { skipMissingProperties: false });

    if (errors.length > 0) throw new Error(errors.toString());

    return validateConfig;
}