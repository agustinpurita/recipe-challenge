import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [String])
  @Column("simple-array", { array: true })
  ingredients: string[];

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field(() => String)
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.recipes)
  user: User;

  @ManyToOne(() => Category, (category) => category.recipes)
  category: Category;
}
