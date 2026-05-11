import { Module } from '@nestjs/common';
import { AlphabetService } from './alphabet.service';
import { AlphabetController } from './alphabet.controller';

@Module({
  controllers: [AlphabetController],
  providers: [AlphabetService],
})
export class AlphabetModule {}
