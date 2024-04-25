import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';
import { AnswerTypeormRepository } from './repositories/answer-typeorm-repository';
import { SearchAnswerDto } from './dto/search-answer.dto';

@Injectable()
export class AnswerService {
  constructor(private answersRepository: AnswerTypeormRepository) {}

  create(createAnswerDto: CreateAnswerDto) {
    return this.answersRepository.insertOne(createAnswerDto);
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return this.answersRepository.findOne(id);
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<Answer> {
    return new Promise(() => new Answer());
  }

  softDelete(id: number): Promise<Answer> {
    return new Promise(() => new Answer());
  }
}
