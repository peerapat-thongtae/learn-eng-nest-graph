import { Injectable } from '@nestjs/common';
import { CreateVocabularyInput } from './dto/create-vocabulary.input';
import { UpdateVocabularyInput } from './dto/update-vocabulary.input';
import { Model } from 'mongoose';
//import { Vocabulary } from './vocabulary.schema';
import { Vocabulary } from './entities/vocabulary.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VocabularyRepository {
  constructor(
    @InjectModel(Vocabulary.name)
    private readonly vocabularyModel: Model<Vocabulary>,
  ) {}

  create(createVocabularyInput: CreateVocabularyInput) {
    try {
      const vocabulary = new this.vocabularyModel(createVocabularyInput);
      return vocabulary.save();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      const vocabulary = await this.vocabularyModel.find();

      if (!vocabulary) {
        return 'Vocabulary not found';
      }
      return vocabulary;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const vocabulary = await this.vocabularyModel.findOne({ _id: id }).exec();
      if (!vocabulary) {
        return 'Vocabulary not found';
      }
      return vocabulary;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findOneByWord(word: string) {
    try {
      const vocabulary = await this.vocabularyModel
        .findOne({ word: word })
        .exec();
      if (!vocabulary) {
        return 'Vocabulary not found';
      }
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
