import { Injectable } from '@nestjs/common';
import { CreateAlphabetDto } from './dto/create-alphabet.dto';
import { UpdateAlphabetDto } from './dto/update-alphabet.dto';

@Injectable()
export class AlphabetService {
  create(createAlphabetDto: CreateAlphabetDto) {
    return 'This action adds a new alphabet';
  }

  findAll() {
    return `This action returns all alphabet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alphabet`;
  }

  update(id: number, updateAlphabetDto: UpdateAlphabetDto) {
    return `This action updates a #${id} alphabet`;
  }

  remove(id: number) {
    return `This action removes a #${id} alphabet`;
  }
}
