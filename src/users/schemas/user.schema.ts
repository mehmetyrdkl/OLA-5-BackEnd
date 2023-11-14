import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: string;

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
  // Phone number
  // Address
}

export const UserSchema = SchemaFactory.createForClass(User);
