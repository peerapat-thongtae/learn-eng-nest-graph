import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VocabularyService } from './vocabulary.service';
//import { Vocabulary } from './vocabulary.schema';
import { CreateVocabularyInput } from './dto/create-vocabulary.input';
import { UpdateVocabularyInput } from './dto/update-vocabulary.input';
import { Vocabulary } from './entities/vocabulary.entity';

@Resolver(() => Vocabulary)
export class VocabularyResolver {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Mutation(() => Vocabulary)
  createVocabulary(
    @Args('createVocabularyInput') createVocabularyInput: CreateVocabularyInput,
  ) {
    return this.vocabularyService.create(createVocabularyInput);
  }

  @Query(() => [Vocabulary], { name: 'vocabularies' })
  findAll() {
    return this.vocabularyService.findAll();
  }

  @Query(() => Vocabulary, { name: 'vocabulary' })
  findOneByID(@Args('_id', { type: () => String }) id: string) {
    return this.vocabularyService.findByID(id);
  }

  @Query(() => Vocabulary, { name: 'getVocabularyByWord' })
  findOneByWord(@Args('word', { type: () => String }) word: string) {
    return this.vocabularyService.findByWord(word);
  }

  @Mutation(() => Vocabulary)
  updateVocabulary(
    @Args('updateVocabularyInput') updateVocabularyInput: UpdateVocabularyInput,
  ) {
    return this.vocabularyService.update(
      updateVocabularyInput._id,
      updateVocabularyInput,
    );
  }

  /*
  

  @Mutation(() => Vocabulary)
  removeVocabulary(@Args('id', { type: () => Int }) id: number) {
    return this.vocabularyService.remove(id);
  }
  */
}
