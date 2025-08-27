import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { } from '../../src/user/user.service';
import { UserModule } from '../../src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../src/user/entities/user.entity';
import { CreateUserDto } from '../../src/user/dto/create-user.dto';

describe('Users (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          entities: [User],
          synchronize: true,
          dropSchema: true,
          
        }),
        UserModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const newUser: CreateUserDto = new CreateUserDto();
    newUser.firstname = "test"
    newUser.lastNamePaternal = "test"
    newUser.lastNameMaternal = "test"
    newUser.age = 2
    newUser.email = "test@gmail.com"
    newUser.password = "test"

    const res = await request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(201)
      .expect(res => {
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.email).toBe("test@gmail.com");
      });

  });

  afterAll(async () => {
    await app.close();
  });
});
