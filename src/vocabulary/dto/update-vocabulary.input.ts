import { CreateVocabularyInput } from './create-vocabulary.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVocabularyInput extends PartialType(CreateVocabularyInput) {
  @Field(() => String)
  _id: string;
}
