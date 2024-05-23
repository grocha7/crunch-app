import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";


@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
    })
  }

  async findOne(email: string): Promise<UserEntity>{
    return this.prisma.user.findUnique({
      where: {
        email
      },
      include: {
        favorites: true
      }
    })
  }

  async remove(email: string): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: {
        email,
      },
    });
  }
}