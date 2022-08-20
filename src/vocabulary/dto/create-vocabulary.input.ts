import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVocabularyInput {
  @Field(() => String, { description: 'Word' })
  word: string;

  @Field(() => [String], { description: 'Translation' })
  translation: string[];

  @Field(() => String, { description: 'Word Description' })
  description: string;
}
