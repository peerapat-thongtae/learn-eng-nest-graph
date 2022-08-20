import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VocabularyResolver } from './vocabulary.resolver';
import { Vocabulary, VocabularySchema } from './entities/vocabulary.entity';
import { VocabularyService } from './vocabulary.service';
import { VocabularyRepository } from './vocabulary.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vocabulary.name, schema: VocabularySchema },
    ]),
  ],
  providers: [VocabularyResolver, VocabularyService, VocabularyRepository],
})
export class VocabularyModule {}
