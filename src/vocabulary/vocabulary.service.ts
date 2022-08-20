import { Inject, Injectable } from '@nestjs/common';
import { CreateVocabularyInput } from './dto/create-vocabulary.input';
import { UpdateVocabularyInput } from './dto/update-vocabulary.input';
//import { Vocabulary } from './vocabulary.schema';
import { VocabularyRepository } from './vocabulary.repository';

@Injectable()
export class VocabularyService {
  constructor(
    @Inject(VocabularyRepository)
    private readonly vocabularyRepository: VocabularyRepository,
  ) {}

  create(createVocabularyInput: CreateVocabularyInput) {
    try {
      const vocabulary = this.vocabularyRepository.create(
        createVocabularyInput,
      );
      return vocabulary;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      return await this.vocabularyRepository.findAll();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findByID(id: string) {
    try {
      const vocabulary = await this.vocabularyRepository.findOne(id);
      return vocabulary;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findByWord(word: string) {
    try {
      const vocabulary = await this.vocabularyRepository.findOneByWord(word);
      return vocabulary;
    } catch (error) {
      return new Error(error.message);
    }
  }

  update(id: string, updateVocabularyInput: UpdateVocabularyInput) {
    return `This action updates a #${id} vocabulary`;
  }

  remove(id: number) {
    return `This action removes a #${id} vocabulary`;
  }
}
