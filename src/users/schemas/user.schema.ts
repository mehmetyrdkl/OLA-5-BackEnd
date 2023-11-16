import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}
@Schema()
export class User {
  _id: string;

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  gender: Gender;

  @Prop()
  zipcode: string;

  @Prop()
  birthdate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
