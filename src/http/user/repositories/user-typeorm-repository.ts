import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchUserDto } from '../dto/search-user.dto';

export class UserTypeormRepository {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async insertOne(data: CreateUserDto): Promise<User | undefined> {
    const user = await this.userRepo.save(this.userRepo.create(data));

    return user;
  }

  async findOne(filter: SearchUserDto): Promise<User | undefined> {
    return await this.userRepo.findOne(filter);
  }

  async findMany(filter: SearchUserDto): Promise<User[]> {
    return await this.userRepo.find(filter);
  }

  async update(data: UpdateUserDto): Promise<User | undefined> {
    const result = await this.userRepo.update(data.id, data);
    return result.raw;
  }

  async delete(id: number): Promise<User | undefined> {
    const result = await this.userRepo.softDelete(id);
    return result.raw;
  }
}
