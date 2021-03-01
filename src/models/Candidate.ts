import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Candidate extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => Number)
  @Column()
  age: number;

  @Field(() => String)
  @Column()
  slogan: string;

  @Field(() => Number)
  @Column({ default: 0 })
  votes: number;

  @Field(() => Boolean)
  @Column({ default: false })
  isUpdated: true;
}