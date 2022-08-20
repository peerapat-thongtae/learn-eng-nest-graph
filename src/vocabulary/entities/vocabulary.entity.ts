import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Vocabulary {
  @Field(() => String)
  _id: string;

  @Prop({ unique: true })
  @Field(() => String, { description: 'Word' })
  word: string;

  @Prop()
  @Field(() => [String], { description: 'Translation' })
  translation: string[];

  @Prop()
  @Field(() => String, { description: 'Word Description' })
  description: string;
}

export type VocabularyDocument = Vocabulary & Document;

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);
