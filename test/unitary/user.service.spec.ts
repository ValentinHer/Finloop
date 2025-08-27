import { Test, TestingModule } from "@nestjs/testing";
import { CreateUserDto } from "../../src/user/dto/create-user.dto";
import { UserService } from "../../src/user/user.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "../../src/user/entities/user.entity";
import { mock } from "node:test";

describe("User Service", () => {
    let userService: UserService;
    const userRepository = {
        save: jest.fn()
    }

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            providers: [UserService, { provide: getRepositoryToken(User), useValue: userRepository }]
        }).compile();

        userService = moduleRef.get(UserService);
    })

    describe("Create a user", () => {
        it("should return an 200 status and data saved", async () => {
            const newUser: CreateUserDto = new CreateUserDto();
            newUser.firstname = "test"
            newUser.lastNamePaternal = "test"
            newUser.lastNameMaternal = "test"
            newUser.age = 2
            newUser.email = "test@gmail.com"
            newUser.password = "test"

            const response = await userService.create(newUser)

            expect(response).toHaveProperty("success", true);
            expect(response).toHaveProperty("message", "Usuario guardado exitosamente");
        })
    })
})