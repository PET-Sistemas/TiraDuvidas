import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserTypeormRepository } from './repositories/user-typeorm-repository';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UserService {
  constructor(private usersRepository: UserTypeormRepository) {}

  create(createProfileDto: CreateUserDto) {
    return this.usersRepository.insertOne(createProfileDto);
  }

  findAll() {
    return this.usersRepository.findMany({});
  }

  findOne(filter: SearchUserDto) {
    return this.usersRepository.findOne(filter);
  }

  update(updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.update(updateUserDto);
  }

  softDelete(id: number): Promise<User> {
    return new Promise(() => new User());
  }
}
